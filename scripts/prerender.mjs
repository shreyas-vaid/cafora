import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerender() {
  const rootDir = path.resolve(__dirname, '..');
  const buildDir = path.join(rootDir, 'build');
  const indexPath = path.join(buildDir, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.warn('[Prerender] build/index.html not found, skipping prerender.');
    return;
  }

  const { CAFES_DATA, CHANDIGARH_SECTORS } = await import('../src/data/cafesData.js');
  const { MOODS_LIST } = await import('../src/utils/vibeEngine.js');

  console.log(`[Prerender] Injecting ${CAFES_DATA.length} cafes into static HTML for AI web readers & search engines...`);

  // 1. Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "CAFORA — Chandigarh Cafe Discovery",
    "description": "Curated guide to 87 verified cafes in Chandigarh by vibe, trust score, coffee quality, and work suitability.",
    "numberOfItems": CAFES_DATA.length,
    "itemListElement": CAFES_DATA.map((cafe, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CafeOrCoffeeShop",
        "name": cafe.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": cafe.address || cafe.sector,
          "addressLocality": "Chandigarh",
          "addressRegion": "Chandigarh",
          "addressCountry": "IN"
        },
        "priceRange": cafe.priceRange || "₹₹",
        ...(cafe.rating ? {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": cafe.rating,
            "bestRating": 5,
            "worstRating": 1
          }
        } : {}),
        "description": cafe.verdict?.headline || cafe.tagline || `Audited Chandigarh cafe in ${cafe.sector}`,
        "keywords": [...(cafe.categories || []), ...(cafe.tags || []), ...(cafe.moods || [])].join(", ")
      }
    }))
  };

  // 2. Generate Semantic Initial HTML for <div id="root">
  const staticHtmlContent = `
  <div class="app-shell" style="background:#100b08;color:#fcf8f2;min-height:100vh;font-family:sans-serif;">
    <header style="padding:24px 20px;border-bottom:1px solid rgba(252,248,242,0.1);max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;">
      <h1 style="font-size:24px;letter-spacing:0.04em;margin:0;">CAFORA</h1>
      <p style="margin:0;font-size:13px;color:#a89f91;">CHANDIGARH • ${CAFES_DATA.length} AUDITED & CURATED SPOTS</p>
    </header>

    <main style="max-width:1100px;margin:0 auto;padding:40px 20px;">
      <section style="text-align:center;margin-bottom:48px;">
        <h2 style="font-size:42px;margin:0 0 16px 0;line-height:1.2;">
          WHERE ARE WE HAVING <span style="color:#e07a38;">coffee</span> TODAY?
        </h2>
        <p style="font-size:18px;color:#a89f91;max-width:620px;margin:0 auto;">
          Chandigarh has way too many cafes. We narrowed it down to ${CAFES_DATA.length} audited spots with honest trust scores.
        </p>
      </section>

      <section style="margin-bottom:48px;">
        <h3 style="font-size:14px;letter-spacing:0.18em;color:#e07a38;text-transform:uppercase;margin-bottom:16px;">
          • WHAT'S THE MOOD? PICK A VIBE
        </h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;">
          ${MOODS_LIST.map(m => `
            <div style="background:#160f0b;border:1px solid rgba(252,248,242,0.1);border-radius:12px;padding:16px;">
              <div style="font-size:20px;margin-bottom:6px;">${m.icon} ${m.title}</div>
              <div style="font-size:12px;color:#a89f91;">"${m.tagline}"</div>
            </div>
          `).join('')}
        </div>
      </section>

      <section>
        <h3 style="font-size:20px;margin-bottom:20px;border-bottom:1px solid rgba(252,248,242,0.1);padding-bottom:10px;">
          ✦ AUDITED CHANDIGARH CAFES (${CAFES_DATA.length})
        </h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px;">
          ${CAFES_DATA.map(c => `
            <article style="background:#160f0b;border:1px solid rgba(252,248,242,0.1);border-radius:14px;padding:20px;">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
                <h4 style="font-size:18px;margin:0;color:#fcf8f2;">${c.name}</h4>
                <span style="font-size:13px;color:#e07a38;font-weight:bold;">${c.priceRange || '₹₹'}</span>
              </div>
              <p style="font-size:13px;color:#e07a38;margin:0 0 8px 0;">${c.sector} • Rating: ★ ${c.rating || 4.5}${c.reviews && c.reviews > 0 ? ` (${c.reviews} reviews)` : ' (Verified listing)'}</p>
              <p style="font-size:13px;color:#d5cdc2;line-height:1.4;margin:0 0 12px 0;">
                ${c.tagline || c.verdict?.headline || 'Audited cafe in Chandigarh.'}
              </p>
              <div style="font-size:11px;color:#a89f91;">
                <strong>Vibes:</strong> ${(c.moods || c.categories || []).join(', ')}
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    </main>

    <footer style="margin-top:60px;padding:32px 20px;border-top:1px solid rgba(252,248,242,0.1);text-align:center;font-size:13px;color:#a89f91;">
      CAFORA • Chandigarh Cafe Discovery • "Good cafes. Better reasons to leave the house."
    </footer>
  </div>
  `;

  // 3. Inject into build/index.html
  let indexHtml = fs.readFileSync(indexPath, 'utf8');

  // Inject JSON-LD into <head>
  const jsonLdTag = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
  if (!indexHtml.includes('application/ld+json')) {
    indexHtml = indexHtml.replace('</head>', `  ${jsonLdTag}\n  </head>`);
  } else {
    indexHtml = indexHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, jsonLdTag);
  }

  // Inject static initial HTML inside <div id="root">
  indexHtml = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${staticHtmlContent}</div>`
  );

  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('[Prerender] Successfully injected static HTML and JSON-LD schema into build/index.html');

  // 4. Generate public/llms.txt and build/llms.txt
  const llmsContent = `# CAFORA — Chandigarh Cafe Discovery
> Live site: https://caforacafe.vercel.app

## About
CAFORA is a curated Chandigarh cafe discovery platform. It cuts through generic listings to recommend cafes based on personality, verified visits, Trust Scores, and specific user vibes.

## Core Features
- Multi-mood recommendation engine (Good Coffee, Get Work Done, Date Night, Quiet Corner, Somewhere Pretty, Sweet Tooth, With the Gang, Late Night)
- Trust Score algorithm penalizing review volatility and fake review bursts
- Sector-based location filtering covering 16 Chandigarh sectors
- 87 verified cafes with real attributes (Wi-Fi, power outlets, noise level, seating comfort, prices)

## Mood Categories (12 Curated Vibes)
1. Good Coffee (☕) - Specialty roasters, single origins, manual pour-overs.
2. Get Work Done (💻) - Ergonomic seating, stable Wi-Fi, accessible power outlets.
3. Date Night (❤️) - Romantic mood lighting, intimate seating, curated music.
4. Quiet Corner (🌿) - Low noise level, secluded tables, reading spots.
5. Somewhere Pretty (📸) - Photogenic interiors, natural light, aesthetics.
6. Sweet Tooth (🍰) - Outstanding bakeries, artisanal patisseries, decadent desserts.
7. With the Gang (👯) - Spacious sharing tables, social buzz, sharing platters.
8. Late Night (🌙) - Open after hours for late-night coffee.
9. Read & Unwind (📚) - Comfortable plush seating, tranquil low distraction, books.
10. Brunch (🥐) - Wholesome morning plates, artisan toasts, daytime dining.
11. Outdoor Escape (🌳) - Sunlit courtyards, garden patios, breezy open-air terraces.
12. Slow Morning (🧘) - Gentle morning light, unhurried coffee, peaceful early ambiance.

## Curated Cafes Directory (${CAFES_DATA.length} Verified Spots)
${CAFES_DATA.map(c => `### ${c.name} (${c.sector})
- Price: ${c.priceRange || '₹₹'} (~₹${c.approxCostForTwo || 600} for two)
- Rating: ${c.rating} (${c.reviews} reviews)
- Trust Score: ${c.trustScore || 88}/100
- Best for: ${(c.moods || c.categories || []).join(', ')}
- Caveat: ${c.characteristics?.quiet?.caveat || c.characteristics?.work?.caveat || 'None reported'}
- Description: ${c.verdict?.headline || c.featuredQuote || 'Verified spot'}
- Address: ${c.address || c.sector}
`).join('\n')}
`;

  const publicLlmsPath = path.join(rootDir, 'public', 'llms.txt');
  const buildLlmsPath = path.join(buildDir, 'llms.txt');

  fs.writeFileSync(publicLlmsPath, llmsContent, 'utf8');
  fs.writeFileSync(buildLlmsPath, llmsContent, 'utf8');
  console.log('[Prerender] Successfully generated public/llms.txt and build/llms.txt for AI web readers.');
}

prerender().catch(err => {
  console.error('[Prerender Error]', err);
  process.exit(1);
});
