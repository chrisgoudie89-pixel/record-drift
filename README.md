# Record Drift (`recorddrift.com`) — Live API Edition

**Record Drift** is a zero-dependency web application for global music discovery powered live by the **MusicBrainz API** and **Cover Art Archive**. Instead of a fixed local list, every spin queries millions of real official album releases across 70+ countries in real time.

---

## Project Structure

```text
record-drift-live/
├── index.html   # Semantic markup, layout hierarchy, and crate drawer
├── styles.css   # Midnight cartographic theme, vinyl & tonearm animations
├── app.js       # Live MusicBrainz & Cover Art Archive integration, strict filters
└── README.md    # Setup, API notes, and deployment instructions
```

---

## How Live Discovery Works

1. **Country & Region Filtering**: Select a **Country First Letter**, **Continental Zone**, or lock onto a **Specific Country** (73 countries indexed with geographic coordinates).
2. **Deep Catalog Querying**: When you click **Drift Record** (or press `Spacebar`), `app.js` constructs a live Lucene query against `https://musicbrainz.org/ws/2/release-group/` filtering by:
   - Official album primary type (`primarytype:album AND status:official`)
   - Country ISO code (`country:ML`, `country:CD`, `country:JP`, etc.)
   - Optional Artist First Letter, Release Decade, and Genre tag
3. **Genuine Cover Art**: Automatically fetches official album cover thumbnails from `https://coverartarchive.org/`, falling back cleanly to a bespoke procedural vinyl sleeve if a release lacks scanned artwork.
4. **Strict Match Enforcement**: If a narrow combination (e.g., *1950s Afrobeat in Iceland*) yields `0` live releases, the turntable halts cleanly and displays a red alert prompting you to adjust your filters.

---

## Local Setup Instructions

### Option 1: Direct File Launch
1. Extract `record-drift-live.zip` into a folder.
2. Double-click `index.html` to open it in any modern browser with an active internet connection.

### Option 2: Local HTTP Server (Recommended)
```bash
cd record-drift-live
python3 -m http.server 8080
```
Open `http://localhost:8080` in your browser.

---

## API Rate-Limit Note
MusicBrainz allows anonymous browser requests at roughly **1 request per second**. Avoid rapid-fire clicking within the same second so your IP is never temporarily throttled.

---

## Deploying to `recorddrift.com`
Upload `index.html`, `styles.css`, and `app.js` to **Netlify Drop**, **Cloudflare Pages**, **GitHub Pages**, or **Vercel** and point your `recorddrift.com` DNS records to the deployment.
