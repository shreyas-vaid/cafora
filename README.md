# CAFORA — Chandigarh Café Discovery & City Guide

> *"Not just the highest rated. The one you'll actually want to return to."*

**Live Deployment**: [https://cafe-finder-steel.vercel.app](https://cafe-finder-steel.vercel.app)

---

## ☕ About Cafora

**Cafora** is an independent editorial city guide and café discovery journal built for Chandigarh. Moving away from generic infinite photo walls and dark dashboard interfaces, Cafora blends:

- **Editorial City Guide**: Tailored recommendations with verified pros & cons.
- **Conversational Discovery**: Intent search responding to queries like *"quiet corner to study"*, *"date night under 1000"*, or *"good coffee in Sector 17"*.
- **"What's the Mood?"**: 8 personality mood cards that actively filter the recommendation engine.
- **Deterministic Trust Score Engine**: 0–100 veracity score combating review inflation across platforms.
- **Interactive City Map**: Leaflet map with custom branded markers and a seamless List / Map switcher.
- **Your Little Coffee List**: Curated bookmarking collections persisted in local storage.

---

## 🛠️ Technology Stack

- **Framework**: React 19, React Router 7
- **Animations**: Framer Motion 12
- **Styling**: Vanilla CSS Design Tokens (Deep Coffee atmosphere, warm cream typography)
- **Mapping**: Leaflet with CartoDB Voyager tiles
- **Deployment**: Vercel (SPA routing configured via `vercel.json`)

---

## 🚀 Running Locally

```bash
# Clone the repository
git clone <repo-url>
cd cafora

# Install dependencies
npm install

# Start local development server
npm start
```

Runs on [http://localhost:3000](http://localhost:3000).

---

## 📦 Production Build

```bash
npm run build
```
