import React, { useEffect, useRef } from "react";
import { calculateTrustScore } from "../../utils/trustScore";

export default function InteractiveMap({ cafes, selectedSector, activeCafeId }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!window.L) {
      console.warn("Leaflet is loading from CDN...");
      return;
    }

    const L = window.L;

    // Initialize Map centered on Chandigarh (Sector 17 / heart of city)
    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [30.7350, 76.7900],
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: true
      });

      // Dark / Voyager basemap for high-contrast dark cafe theme
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Clear previous markers
    markersRef.current.forEach((m) => map.removeLayer(m));
    markersRef.current = [];

    // Add cafe markers
    cafes.forEach((cafe) => {
      if (!cafe.coordinates || cafe.coordinates.length < 2) return;

      const trust = calculateTrustScore(cafe);

      // Accent color based on trust tier
      let markerColor = "#2da473"; // high trust
      if (trust.score < 65 || cafe.isLowTrust) markerColor = "#c93b3b";
      else if (trust.score < 80) markerColor = "#d9622b";
      else if (trust.score < 90) markerColor = "#e09422";

      // Distinctive Cafe Finder branded marker: Bean badge with Trust score
      const customIcon = L.divIcon({
        className: "custom-cafe-marker",
        html: `
          <div style="
            background: #1e150f;
            color: #fcf8f2;
            font-weight: 800;
            font-size: 11px;
            padding: 4px 10px;
            border-radius: 20px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.65);
            border: 2px solid ${markerColor};
            white-space: nowrap;
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          ">
            <span style="color: #e07a38; font-size: 12px;">✦</span>
            <span>${trust.score}</span>
          </div>
        `,
        iconSize: [52, 28],
        iconAnchor: [26, 14]
      });

      const topPos = cafe.strengths?.[0] || cafe.verdict?.loved?.[0] || "Great coffee";
      const topNeg = cafe.weaknesses?.[0] || cafe.verdict?.disliked?.[0] || "Busy during peak hours";

      const popupHtml = `
        <div style="min-width: 230px; max-width: 270px; color: #fcf8f2; font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px;">
          <div style="height: 110px; border-radius: 10px; overflow: hidden; margin-bottom: 10px; position: relative;">
            <img src="${cafe.heroImage}" alt="${cafe.name}" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; top: 6px; right: 6px; background: rgba(16,11,8,0.85); color: #d4af37; padding: 2px 7px; border-radius: 6px; font-size: 11px; font-weight: 700;">
              ★ ${cafe.rating}
            </div>
            <div style="position: absolute; bottom: 6px; left: 6px; background: rgba(16,11,8,0.85); color: #fcf8f2; padding: 2px 7px; border-radius: 6px; font-size: 10.5px;">
              📍 ${cafe.sector}
            </div>
          </div>
          
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
            <h4 style="font-size: 15px; font-weight: 700; color: #fcf8f2; margin: 0; font-family: 'Playfair Display', serif;">${cafe.name}</h4>
            <span style="color: ${markerColor}; font-weight: 800; font-size: 11.5px;">${trust.score} TRUST</span>
          </div>

          <div style="font-size: 11px; color: #dcd0bf; margin-bottom: 8px;">
            ${cafe.distanceKm} km · ${cafe.priceRange} (₹${cafe.approxCostForTwo} for 2)
          </div>

          <div style="background: rgba(16,11,8,0.5); padding: 7px 9px; border-radius: 6px; margin-bottom: 10px; font-size: 11px; line-height: 1.35; border: 1px solid rgba(252,248,242,0.1);">
            <div style="color: #2da473; margin-bottom: 3px;">✓ ${topPos}</div>
            <div style="color: #e07a38;">⚠️ ${topNeg}</div>
          </div>

          <a href="/cafe/${cafe.id}" style="
            display: block;
            text-align: center;
            background: #e07a38;
            color: #100b08;
            font-weight: 700;
            padding: 7px 12px;
            border-radius: 8px;
            font-size: 12px;
            text-decoration: none;
            letter-spacing: 0.02em;
          ">
            View Editorial Profile →
          </a>
        </div>
      `;

      const marker = L.marker([cafe.coordinates[0], cafe.coordinates[1]], { icon: customIcon })
        .addTo(map)
        .bindPopup(popupHtml, {
          className: "custom-leaflet-popup",
          maxWidth: 290
        });

      // If this is the active cafe, open its popup & pan to it
      if (activeCafeId && cafe.id === activeCafeId) {
        marker.openPopup();
        map.setView([cafe.coordinates[0], cafe.coordinates[1]], 15);
      }

      markersRef.current.push(marker);
    });

    // Auto fit bounds if multiple cafes
    if (cafes.length > 1 && !activeCafeId) {
      const validCoords = cafes
        .filter((c) => c.coordinates && c.coordinates.length >= 2)
        .map((c) => [c.coordinates[0], c.coordinates[1]]);

      if (validCoords.length > 0) {
        const bounds = L.latLngBounds(validCoords);
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
      }
    } else if (cafes.length === 1) {
      map.setView([cafes[0].coordinates[0], cafes[0].coordinates[1]], 15);
    }
  }, [cafes, activeCafeId]);

  // Handle sector selection zoom
  useEffect(() => {
    if (!mapInstanceRef.current || selectedSector === "All Chandigarh") return;

    const sectorCafes = cafes.filter(
      (c) => c.sector?.toLowerCase().includes(selectedSector.toLowerCase()) && c.coordinates
    );

    if (sectorCafes.length > 0) {
      const coords = sectorCafes.map((c) => [c.coordinates[0], c.coordinates[1]]);
      const bounds = window.L.latLngBounds(coords);
      mapInstanceRef.current.fitBounds(bounds, { padding: [60, 60], maxZoom: 15 });
    }
  }, [selectedSector, cafes]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
      <style>{`
        .leaflet-popup-content-wrapper {
          background: #1e150f !important;
          border: 1px solid rgba(252, 248, 242, 0.2) !important;
          border-radius: 16px !important;
          box-shadow: 0 16px 36px rgba(0,0,0,0.65) !important;
        }
        .leaflet-popup-tip {
          background: #1e150f !important;
        }
      `}</style>
    </div>
  );
}
