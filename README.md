# Record Drift (`recorddrift.com`)

**Record Drift** is a zero-dependency, static single-page web application for global music discovery. It pairs an interactive spinning vinyl turntable and wireframe cartographic globe with strict multi-dimensional filtering, Web Audio needle effects, and persistent local crate storage.

---

## Project Structure

```text
record-drift/
├── index.html   # Semantic markup, layout hierarchy, and drawer structure
├── styles.css   # Responsive dark cartographic theme, vinyl & tonearm animations
├── app.js       # Curated discography, strict filter logic, canvas globe, crate storage
└── README.md    # Setup and deployment instructions
```

---

## Local Setup Instructions

Because **Record Drift** uses pure HTML5, CSS3, and vanilla ES6+ JavaScript with zero build steps or external package dependencies, you can run it immediately in any modern browser.

### Option 1: Direct File Launch (Fastest)
1. Unzip the downloaded `record-drift.zip` archive into a folder on your computer.
2. Double-click `index.html` to open it directly in Chrome, Firefox, Edge, or Safari.
3. Ensure `index.html`, `styles.css`, and `app.js` remain in the **same directory** so the stylesheet and script load properly.

### Option 2: Local Development Server (Recommended)
Running via a local HTTP server ensures clean `localStorage` isolation and Web Audio playback:

* **Using Python 3:**
  ```bash
  cd record-drift
  python3 -m http.server 8080
  ```
  Then visit `http://localhost:8080` in your browser.

* **Using VS Code:**
  Open the `record-drift` folder in Visual Studio Code and click **Go Live** using the *Live Server* extension.

---

## Deploying to `recorddrift.com`

You can host these three static files (`index.html`, `styles.css`, `app.js`) for free on any static web host:

1. **Netlify Drop:** Drag and drop the `record-drift` folder onto [app.netlify.com/drop](https://app.netlify.com/drop), then attach your custom domain (`recorddrift.com`) under **Domain Management**.
2. **Cloudflare Pages / GitHub Pages / Vercel:** Push the folder to a repository and point your root directory to `/`. No build command is required.

---

## Customizing the Discography Database

Open `app.js` and locate the `ALBUM_DATABASE` array at the top of the file. Add new entries following this schema:

```javascript
{
  id: "unique-slug-year",
  title: "Album Name",
  artist: "Artist or Band",
  country: "Country Name",
  flag: "🇺🇳",
  region: "Europe", // Africa, Asia, Europe, North America, South America, Oceania
  year: 1978,
  decade: "1970s",
  genre: "Genre Label",
  coords: "LAT 00.00°N • LNG 00.00°E",
  palette: ["#1e293b", "#0f172a"], // Two hex colors for the procedural sleeve gradient
  notes: "Short historical or musical liner note."
}
```
