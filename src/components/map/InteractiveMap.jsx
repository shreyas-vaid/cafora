import React, { useEffect, useRef } from "react";
import { calculateTrustScore } from "../../utils/trustScore";

// Sector coordinate lookup fallback for Chandigarh
const CHANDIGARH_SECTOR_COORDS = {
  "sector 7": [30.7303, 76.8048],
  "sector 8": [30.7380, 76.8000],
  "sector 9": [30.7450, 76.7950],
  "sector 10": [30.7520, 76.7900],
  "sector 11": [30.7580, 76.7850],
  "sector 15": [30.7550, 76.7720],
  "sector 16": [30.7480, 76.7770],
  "sector 17": [30.7350, 76.7850],
  "sector 22": [30.7250, 76.7750],
  "sector 26": [30.7220, 76.8150],
  "sector 34": [30.7180, 76.7650],
  "sector 35": [30.7200, 76.7580],
  "sector 43": [30.7100, 76.7450],
  "sector 44": [30.7050, 76.7500],
  "sector 50": [30.6980, 76.7400],
  "industrial area": [30.7060, 76.8050]
};

export function getCafeCoords(cafe) {
  if (!cafe) return null;

  // 1. If coordinates is an Array [lat, lng]
  if (Array.isArray(cafe.coordinates) && cafe.coordinates.length >= 2) {
    const lat = Number(cafe.coordinates[0]);
    const lng = Number(cafe.coordinates[1]);
    if (!isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
      return [lat, lng];
    }
  }

  // 2. If coordinates is an Object { lat, lng }
  if (cafe.coordinates && typeof cafe.coordinates === "object") {
    const lat = Number(cafe.coordinates.lat ?? cafe.coordinates.latitude);
    const lng = Number(cafe.coordinates.lng ?? cafe.coordinates.longitude);
    if (!isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
      return [lat, lng];
    }
  }

  // 3. If in identity or facts
  const idLat = Number(cafe.identity?.latitude ?? cafe.facts?.latitude);
  const idLng = Number(cafe.identity?.longitude ?? cafe.facts?.longitude);
  if (!isNaN(idLat) && !isNaN(idLng) && idLat !== 0 && idLng !== 0) {
    return [idLat, idLng];
  }

  // 4. Sector fallback lookup with slight deterministic jitter so pins don't overlap
  const sec = (cafe.sector || cafe.identity?.sector || "").toLowerCase();
  for (const [sKey, baseCoords] of Object.entries(CHANDIGARH_SECTOR_COORDS)) {
    if (sec.includes(sKey)) {
      let hash = 0;
      const str = cafe.id || cafe.name || "";
      for (let i = 0; i < str.length; i++) hash = (hash * 31 + str.charCodeAt(i)) % 1000;
      const jitterLat = ((hash % 16) - 8) * 0.0003;
      const jitterLng = (((hash * 7) % 16) - 8) * 0.0003;
      return [baseCoords[0] + jitterLat, baseCoords[1] + jitterLng];
    }
  }

  return [30.7350, 76.7900]; // Default city center (Sector 17)
}

export default function InteractiveMap({ cafes = [], selectedSector, activeCafeId }) {
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
      const coords = getCafeCoords(cafe);
      if (!coords) return;

      const trust = calculateTrustScore(cafe);
      const hasTrust = trust && trust.score !== null;

      // Accent color based on trust tier (or warm neutral if unverified)
      let markerColor = "#d97706";
      if (hasTrust) {
        if (trust.score >= 80) markerColor = "#2da473";
        else if (trust.score >= 65) markerColor = "#e09422";
        else markerColor = "#d9622b";
      }

      // Distinctive Cafe Finder branded marker: Bean badge with Trust score (or rating if unverified)
      const badgeText = hasTrust ? trust.score : (cafe.rating || "★");
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
            <span>${badgeText}</span>
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
            ${hasTrust ? `<span style="color: ${markerColor}; font-weight: 800; font-size: 11.5px;">${trust.score} TRUST</span>` : ""}
          </div>

          <div style="font-size: 11px; color: #dcd0bf; margin-bottom: 8px;">
            ${cafe.distanceKm ? cafe.distanceKm + " km · " : ""}${cafe.priceRange} (₹${cafe.approxCostForTwo} for 2)
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

      const marker = L.marker(coords, { icon: customIcon })
        .addTo(map)
        .bindPopup(popupHtml, {
          className: "custom-leaflet-popup",
          maxWidth: 290
        });

      // If this is the active cafe, open its popup & pan to it
      if (activeCafeId && cafe.id === activeCafeId) {
        marker.openPopup();
        map.setView(coords, 15);
      }

      markersRef.current.push(marker);
    });

    // Auto fit bounds if multiple cafes
    if (cafes.length > 1 && !activeCafeId) {
      const validCoords = cafes
        .map((c) => getCafeCoords(c))
        .filter(Boolean);

      if (validCoords.length > 0) {
        const bounds = L.latLngBounds(validCoords);
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
      }
    } else if (cafes.length === 1) {
      const singleCoords = getCafeCoords(cafes[0]);
      if (singleCoords) {
        map.setView(singleCoords, 15);
      }
    }
  }, [cafes, activeCafeId]);

  // Handle sector selection zoom
  useEffect(() => {
    if (!mapInstanceRef.current || selectedSector === "All Chandigarh") return;

    const sectorCafes = cafes.filter(
      (c) => c.sector?.toLowerCase().includes(selectedSector.toLowerCase())
    );

    if (sectorCafes.length > 0) {
      const coords = sectorCafes.map((c) => getCafeCoords(c)).filter(Boolean);
      if (coords.length > 0) {
        const bounds = window.L.latLngBounds(coords);
        mapInstanceRef.current.fitBounds(bounds, { padding: [60, 60], maxZoom: 15 });
      }
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
