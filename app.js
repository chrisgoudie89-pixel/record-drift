// Record Drift (recorddrift.com) — Live MusicBrainz & Cover Art Archive Edition
// Clean Discovery Mode: Smooth Auto-Scroll, Shareable Filter Deep-Links, 30s Previews, and Session Recent Spins

const COUNTRIES = [
  { code: "DZ", name: "Algeria", region: "Africa", coords: "LAT 28.03°N • LNG 1.65°E" },
  { code: "AR", name: "Argentina", region: "South America", coords: "LAT 34.60°S • LNG 58.38°W" },
  { code: "AU", name: "Australia", region: "Oceania", coords: "LAT 37.81°S • LNG 144.96°E" },
  { code: "AT", name: "Austria", region: "Europe", coords: "LAT 48.20°N • LNG 16.37°E" },
  { code: "BE", name: "Belgium", region: "Europe", coords: "LAT 50.85°N • LNG 4.35°E" },
  { code: "BO", name: "Bolivia", region: "South America", coords: "LAT 16.50°S • LNG 68.15°W" },
  { code: "BR", name: "Brazil", region: "South America", coords: "LAT 22.91°S • LNG 43.17°W" },
  { code: "BG", name: "Bulgaria", region: "Europe", coords: "LAT 42.69°N • LNG 23.32°E" },
  { code: "CM", name: "Cameroon", region: "Africa", coords: "LAT 3.84°N • LNG 11.50°E" },
  { code: "CA", name: "Canada", region: "North America", coords: "LAT 43.65°N • LNG 79.38°W" },
  { code: "CL", name: "Chile", region: "South America", coords: "LAT 33.44°S • LNG 70.66°W" },
  { code: "CN", name: "China", region: "Asia", coords: "LAT 39.90°N • LNG 116.40°E" },
  { code: "CO", name: "Colombia", region: "South America", coords: "LAT 4.71°N • LNG 74.07°W" },
  { code: "HR", name: "Croatia", region: "Europe", coords: "LAT 45.81°N • LNG 15.98°E" },
  { code: "CU", name: "Cuba", region: "North America", coords: "LAT 23.11°N • LNG 82.36°W" },
  { code: "CZ", name: "Czechia", region: "Europe", coords: "LAT 50.07°N • LNG 14.43°E" },
  { code: "CD", name: "DR Congo", region: "Africa", coords: "LAT 4.44°S • LNG 15.26°E" },
  { code: "DK", name: "Denmark", region: "Europe", coords: "LAT 55.67°N • LNG 12.56°E" },
  { code: "EC", name: "Ecuador", region: "South America", coords: "LAT 0.18°S • LNG 78.46°W" },
  { code: "EG", name: "Egypt", region: "Africa", coords: "LAT 30.04°N • LNG 31.23°E" },
  { code: "EE", name: "Estonia", region: "Europe", coords: "LAT 59.43°N • LNG 24.75°E" },
  { code: "ET", name: "Ethiopia", region: "Africa", coords: "LAT 9.03°N • LNG 38.74°E" },
  { code: "FI", name: "Finland", region: "Europe", coords: "LAT 60.16°N • LNG 24.93°E" },
  { code: "FR", name: "France", region: "Europe", coords: "LAT 48.85°N • LNG 2.35°E" },
  { code: "DE", name: "Germany", region: "Europe", coords: "LAT 52.52°N • LNG 13.40°E" },
  { code: "GH", name: "Ghana", region: "Africa", coords: "LAT 5.60°N • LNG 0.18°W" },
  { code: "GR", name: "Greece", region: "Europe", coords: "LAT 37.98°N • LNG 23.72°E" },
  { code: "HU", name: "Hungary", region: "Europe", coords: "LAT 47.49°N • LNG 19.04°E" },
  { code: "IS", name: "Iceland", region: "Europe", coords: "LAT 64.14°N • LNG 21.94°W" },
  { code: "IN", name: "India", region: "Asia", coords: "LAT 19.07°N • LNG 72.87°E" },
  { code: "ID", name: "Indonesia", region: "Asia", coords: "LAT 6.20°S • LNG 106.84°E" },
  { code: "IR", name: "Iran", region: "Asia", coords: "LAT 35.68°N • LNG 51.38°E" },
  { code: "IE", name: "Ireland", region: "Europe", coords: "LAT 53.34°N • LNG 6.26°W" },
  { code: "IL", name: "Israel", region: "Asia", coords: "LAT 32.08°N • LNG 34.78°E" },
  { code: "IT", name: "Italy", region: "Europe", coords: "LAT 41.90°N • LNG 12.49°E" },
  { code: "JM", name: "Jamaica", region: "North America", coords: "LAT 18.01°N • LNG 76.80°W" },
  { code: "JP", name: "Japan", region: "Asia", coords: "LAT 35.67°N • LNG 139.65°E" },
  { code: "KE", name: "Kenya", region: "Africa", coords: "LAT 1.29°S • LNG 36.82°E" },
  { code: "LB", name: "Lebanon", region: "Asia", coords: "LAT 33.89°N • LNG 35.50°E" },
  { code: "MY", name: "Malaysia", region: "Asia", coords: "LAT 3.13°N • LNG 101.68°E" },
  { code: "ML", name: "Mali", region: "Africa", coords: "LAT 12.63°N • LNG 8.00°W" },
  { code: "MX", name: "Mexico", region: "North America", coords: "LAT 19.43°N • LNG 99.13°W" },
  { code: "MA", name: "Morocco", region: "Africa", coords: "LAT 33.57°N • LNG 7.58°W" },
  { code: "NL", name: "Netherlands", region: "Europe", coords: "LAT 52.36°N • LNG 4.90°E" },
  { code: "NZ", name: "New Zealand", region: "Oceania", coords: "LAT 36.84°S • LNG 174.76°E" },
  { code: "NG", name: "Nigeria", region: "Africa", coords: "LAT 6.52°N • LNG 3.37°E" },
  { code: "NO", name: "Norway", region: "Europe", coords: "LAT 59.91°N • LNG 10.75°E" },
  { code: "PK", name: "Pakistan", region: "Asia", coords: "LAT 24.86°N • LNG 67.00°E" },
  { code: "PE", name: "Peru", region: "South America", coords: "LAT 12.04°S • LNG 77.04°W" },
  { code: "PH", name: "Philippines", region: "Asia", coords: "LAT 14.59°N • LNG 120.98°E" },
  { code: "PL", name: "Poland", region: "Europe", coords: "LAT 52.22°N • LNG 21.01°E" },
  { code: "PT", name: "Portugal", region: "Europe", coords: "LAT 38.72°N • LNG 9.13°W" },
  { code: "RO", name: "Romania", region: "Europe", coords: "LAT 44.42°N • LNG 26.10°E" },
  { code: "SN", name: "Senegal", region: "Africa", coords: "LAT 14.71°N • LNG 17.46°W" },
  { code: "RS", name: "Serbia", region: "Europe", coords: "LAT 44.78°N • LNG 20.44°E" },
  { code: "ZA", name: "South Africa", region: "Africa", coords: "LAT 26.20°S • LNG 28.04°E" },
  { code: "KR", name: "South Korea", region: "Asia", coords: "LAT 37.56°N • LNG 126.97°E" },
  { code: "ES", name: "Spain", region: "Europe", coords: "LAT 40.41°N • LNG 3.70°W" },
  { code: "SE", name: "Sweden", region: "Europe", coords: "LAT 59.32°N • LNG 18.06°E" },
  { code: "CH", name: "Switzerland", region: "Europe", coords: "LAT 47.37°N • LNG 8.54°E" },
  { code: "TW", name: "Taiwan", region: "Asia", coords: "LAT 25.03°N • LNG 121.56°E" },
  { code: "TZ", name: "Tanzania", region: "Africa", coords: "LAT 6.79°S • LNG 39.20°E" },
  { code: "TH", name: "Thailand", region: "Asia", coords: "LAT 13.75°N • LNG 100.50°E" },
  { code: "TN", name: "Tunisia", region: "Africa", coords: "LAT 36.80°N • LNG 10.18°E" },
  { code: "TR", name: "Turkey", region: "Asia", coords: "LAT 41.01°N • LNG 28.97°E" },
  { code: "UA", name: "Ukraine", region: "Europe", coords: "LAT 50.45°N • LNG 30.52°E" },
  { code: "GB", name: "United Kingdom", region: "Europe", coords: "LAT 51.50°N • LNG 0.12°W" },
  { code: "US", name: "United States", region: "North America", coords: "LAT 40.71°N • LNG 74.00°W" },
  { code: "UY", name: "Uruguay", region: "South America", coords: "LAT 34.90°S • LNG 56.16°W" },
  { code: "VE", name: "Venezuela", region: "South America", coords: "LAT 10.48°N • LNG 66.90°W" },
  { code: "VN", name: "Vietnam", region: "Asia", coords: "LAT 21.02°N • LNG 105.83°E" },
  { code: "ZM", name: "Zambia", region: "Africa", coords: "LAT 15.38°S • LNG 28.32°E" },
  { code: "ZW", name: "Zimbabwe", region: "Africa", coords: "LAT 17.82°S • LNG 31.05°E" }
];

const SLEEVE_PALETTES = [
  ["#78350f", "#b45309"],
  ["#064e3b", "#047857"],
  ["#1e3a8a", "#1d4ed8"],
  ["#14532d", "#ca8a04"],
  ["#7f1d1d", "#b45309"],
  ["#881337", "#be123c"],
  ["#0f172a", "#0284c7"],
  ["#581c87", "#9333ea"],
  ["#312e81", "#4f46e5"],
  ["#7c2d12", "#c2410c"]
];

function countryCodeToFlag(code) {
  if (!code || code.length !== 2) return "🌍";
  const upper = code.toUpperCase();
  return String.fromCodePoint(...[...upper].map(c => 127397 + c.charCodeAt(0)));
}

let currentRecord = null;
let isSpinning = false;
let audioEnabled = true;
let globeAngle = 0;
let globeSpeed = 0.012;
let lastApiCallTimestamp = 0;
const queryCache = new Map();
let recentSpins = [];

const countryLetterSelect = document.getElementById("countryLetterSelect");
const countrySelect = document.getElementById("countrySelect");
const artistLetterSelect = document.getElementById("artistLetterSelect");
const regionSelect = document.getElementById("regionSelect");
const decadeSelect = document.getElementById("decadeSelect");
const genreSelect = document.getElementById("genreSelect");
const matchCounter = document.getElementById("matchCounter");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const alertResetBtn = document.getElementById("alertResetBtn");

const driftBtn = document.getElementById("driftBtn");
const driftBtnLabel = document.getElementById("driftBtnLabel");
const vinylDisc = document.getElementById("vinylDisc");
const tonearm = document.getElementById("tonearm");
const globeCanvas = document.getElementById("globeCanvas");
const ctx = globeCanvas.getContext("2d");

const resultsSection = document.getElementById("resultsSection");
const emptyPromptState = document.getElementById("emptyPromptState");
const loadingState = document.getElementById("loadingState");
const loadingTitle = document.getElementById("loadingTitle");
const loadingSub = document.getElementById("loadingSub");
const noMatchAlert = document.getElementById("noMatchAlert");
const alertHeading = document.getElementById("alertHeading");
const alertMessage = document.getElementById("alertMessage");
const albumCard = document.getElementById("albumCard");

const previewAudioBox = document.getElementById("previewAudioBox");
const previewPlayBtn = document.getElementById("previewPlayBtn");
const previewTrackName = document.getElementById("previewTrackName");
const previewAudioEl = document.getElementById("previewAudioEl");

const recentSpinsWrap = document.getElementById("recentSpinsWrap");
const recentSpinsStrip = document.getElementById("recentSpinsStrip");

const audioToggleBtn = document.getElementById("audioToggleBtn");
const audioIcon = document.getElementById("audioIcon");
const shareRecordBtn = document.getElementById("shareRecordBtn");

function revealResultsPanel(targetEl = resultsSection) {
  if (!resultsSection) return;
  resultsSection.classList.remove("highlight-pulse");
  void resultsSection.offsetWidth;
  resultsSection.classList.add("highlight-pulse");

  const scrollTarget = targetEl || resultsSection;
  requestAnimationFrame(() => {
    setTimeout(() => {
      scrollTarget.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
  });
}

function syncUrlParams() {
  const params = new URLSearchParams();
  if (regionSelect.value !== "ALL") params.set("region", regionSelect.value);
  if (countryLetterSelect.value !== "ALL") params.set("cletter", countryLetterSelect.value);
  if (countrySelect.value !== "ALL") params.set("country", countrySelect.value);
  if (artistLetterSelect.value !== "ALL") params.set("aletter", artistLetterSelect.value);
  if (decadeSelect.value !== "ALL") params.set("decade", decadeSelect.value);
  if (genreSelect.value !== "ALL") params.set("genre", genreSelect.value);

  const queryString = params.toString();
  const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
  window.history.replaceState({}, "", newUrl);
}

function applyUrlParamsOnLoad() {
  const params = new URLSearchParams(window.location.search);
  let hasFilters = false;

  if (params.has("region")) {
    regionSelect.value = params.get("region");
    hasFilters = true;
  }
  if (params.has("cletter")) {
    countryLetterSelect.value = params.get("cletter").toUpperCase();
    hasFilters = true;
  }

  populateCountryDropdown();

  if (params.has("country")) {
    const cCode = params.get("country").toUpperCase();
    if ([...countrySelect.options].some(opt => opt.value === cCode)) {
      countrySelect.value = cCode;
      hasFilters = true;
    }
  }
  if (params.has("aletter")) {
    artistLetterSelect.value = params.get("aletter").toUpperCase();
    hasFilters = true;
  }
  if (params.has("decade")) {
    decadeSelect.value = params.get("decade");
    hasFilters = true;
  }
  if (params.has("genre")) {
    genreSelect.value = params.get("genre");
    hasFilters = true;
  }

  updateEligibilityStatus();

  if (hasFilters) {
    setTimeout(() => triggerDrift(), 250);
  }
}

function initFilters() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  letters.forEach(letter => {
    const opt1 = document.createElement("option");
    opt1.value = letter;
    opt1.textContent = letter;
    countryLetterSelect.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = letter;
    opt2.textContent = letter;
    artistLetterSelect.appendChild(opt2);
  });

  const regions = [...new Set(COUNTRIES.map(c => c.region))].sort();
  regions.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r;
    opt.textContent = r;
    regionSelect.appendChild(opt);
  });

  populateCountryDropdown();
}

function getEligibleCountries() {
  const cLetter = countryLetterSelect.value;
  const region = regionSelect.value;

  return COUNTRIES.filter(c => {
    const firstChar = c.name.trim().charAt(0).toUpperCase();
    if (cLetter !== "ALL" && firstChar !== cLetter) return false;
    if (region !== "ALL" && c.region !== region) return false;
    return true;
  });
}

function populateCountryDropdown() {
  const previousValue = countrySelect.value;
  const eligible = getEligibleCountries();

  countrySelect.innerHTML = `<option value="ALL">Any Country in Filter (${eligible.length})</option>`;
  eligible.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.code;
    opt.textContent = `${countryCodeToFlag(c.code)} ${c.name}`;
    countrySelect.appendChild(opt);
  });

  if (eligible.some(c => c.code === previousValue)) {
    countrySelect.value = previousValue;
  } else {
    countrySelect.value = "ALL";
  }

  updateEligibilityStatus();
}

function updateEligibilityStatus() {
  const eligible = getEligibleCountries();
  if (eligible.length === 0) {
    matchCounter.textContent = "0 Eligible Countries";
    matchCounter.classList.add("zero-matches");
  } else if (countrySelect.value !== "ALL") {
    const chosen = eligible.find(c => c.code === countrySelect.value);
    matchCounter.textContent = `Target: ${chosen.name} (Live API)`;
    matchCounter.classList.remove("zero-matches");
  } else {
    matchCounter.textContent = `${eligible.length} Countries • Live API Pool`;
    matchCounter.classList.remove("zero-matches");
  }
  syncUrlParams();
}

function playNeedleSound(type = "drop") {
  if (!audioEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    if (type === "error") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(95, audioCtx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.26);
    } else {
      osc.type = "sine";
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, audioCtx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
    }

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.28);
  } catch (e) {}
}

function renderGlobeLoop() {
  const w = globeCanvas.width;
  const h = globeCanvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const radius = 58;

  ctx.clearRect(0, 0, w, h);

  const grad = ctx.createRadialGradient(cx - 15, cy - 15, 8, cx, cy, radius);
  grad.addColorStop(0, "#1e3a8a");
  grad.addColorStop(1, "#050914");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
  ctx.lineWidth = 1;
  [-0.6, -0.3, 0, 0.3, 0.6].forEach(lat => {
    const y = cy + lat * radius;
    const halfWidth = Math.sqrt(Math.max(0, radius * radius - (lat * radius) ** 2));
    ctx.beginPath();
    ctx.moveTo(cx - halfWidth, y);
    ctx.lineTo(cx + halfWidth, y);
    ctx.stroke();
  });

  for (let i = 0; i < 6; i++) {
    const angle = globeAngle + (i * Math.PI) / 6;
    const rx = Math.cos(angle) * radius;
    ctx.strokeStyle = i === 0 ? "rgba(212, 175, 55, 0.75)" : "rgba(56, 189, 248, 0.32)";
    ctx.beginPath();
    ctx.ellipse(cx, cy, Math.abs(rx), radius, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(212, 175, 55, 0.8)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  globeAngle += globeSpeed;
  requestAnimationFrame(renderGlobeLoop);
}

async function politeMusicBrainzFetch(url) {
  const now = Date.now();
  const elapsed = now - lastApiCallTimestamp;
  if (elapsed < 1150) {
    await new Promise(resolve => setTimeout(resolve, 1150 - elapsed));
  }
  lastApiCallTimestamp = Date.now();

  const response = await fetch(url, {
    headers: { "Accept": "application/json" }
  });

  if (response.status === 503 || response.status === 429) {
    await new Promise(resolve => setTimeout(resolve, 1600));
    lastApiCallTimestamp = Date.now();
    const retryResp = await fetch(url, {
      headers: { "Accept": "application/json" }
    });
    if (!retryResp.ok) {
      throw new Error(`MusicBrainz HTTP ${retryResp.status}`);
    }
    return retryResp.json();
  }

  if (!response.ok) {
    throw new Error(`MusicBrainz HTTP ${response.status}`);
  }
  return response.json();
}

async function loadAudioPreview(artist, albumTitle) {
  previewAudioEl.pause();
  previewAudioEl.src = "";
  previewAudioBox.classList.add("hidden");
  previewPlayBtn.textContent = "▶ Play 30s Preview";

  try {
    const term = encodeURIComponent(`${artist} ${albumTitle}`);
    const resp = await fetch(`https://itunes.apple.com/search?term=${term}&media=music&entity=song&limit=5`);
    if (!resp.ok) return;
    const data = await resp.json();
    const match = (data.results || []).find(
      track => track.previewUrl && track.artistName && track.artistName.toLowerCase().includes(artist.toLowerCase().slice(0, 6))
    ) || (data.results || []).find(track => track.previewUrl);

    if (match && match.previewUrl) {
      previewAudioEl.src = match.previewUrl;
      previewTrackName.textContent = `Preview: "${match.trackName}"`;
      previewAudioBox.classList.remove("hidden");
    }
  } catch (e) {}
}

async function fetchAlbumsByArtistOrigin(countryObj) {
  const aLetter = artistLetterSelect.value;
  const decade = decadeSelect.value;
  const genre = genreSelect.value;

  const cacheKey = `${countryObj.code}|${aLetter}|${decade}|${genre}`;
  if (queryCache.has(cacheKey)) {
    const cached = queryCache.get(cacheKey);
    if (cached.albums.length > 0) {
      return cached;
    }
  }

  const artistQueryParts = [`country:${countryObj.code}`];
  if (aLetter !== "ALL") {
    artistQueryParts.push(`artist:${aLetter.toLowerCase()}*`);
  }
  if (genre !== "ALL") {
    artistQueryParts.push(`tag:"${genre}"`);
  }

  const artistQuery = artistQueryParts.join(" AND ");
  const artistUrl = `https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(artistQuery)}&limit=50&fmt=json`;
  const artistData = await politeMusicBrainzFetch(artistUrl);

  let artists = artistData.artists || [];
  if (aLetter !== "ALL") {
    artists = artists.filter(a => a.name && a.name.trim().charAt(0).toUpperCase() === aLetter);
  }

  if (artists.length === 0) {
    return { totalArtists: 0, albums: [] };
  }

  const shuffledArtists = [...artists].sort(() => Math.random() - 0.5).slice(0, 4);
  let collectedAlbums = [];

  for (const artist of shuffledArtists) {
    const rgUrl = `https://musicbrainz.org/ws/2/release-group?artist=${artist.id}&type=album&inc=tags&limit=50&fmt=json`;
    const rgData = await politeMusicBrainzFetch(rgUrl);
    const rgs = rgData["release-groups"] || [];

    const matchingRgs = rgs.filter(rg => {
      const secondary = rg["secondary-types"] || [];
      if (secondary.includes("Compilation") || secondary.includes("Interview") || secondary.includes("Audiobook")) {
        return false;
      }

      if (decade !== "ALL") {
        const relDate = rg["first-release-date"] || "";
        const year = parseInt(relDate.slice(0, 4), 10);
        const startYear = parseInt(decade.slice(0, 4), 10);
        if (isNaN(year) || year < startYear || year > startYear + 9) {
          return false;
        }
      }

      return true;
    });

    matchingRgs.forEach(rg => {
      collectedAlbums.push({
        rg,
        artistName: artist.name,
        artistArea: artist.area?.name || countryObj.name,
        artistTags: (artist.tags || []).map(t => t.name)
      });
    });

    if (collectedAlbums.length >= 12) break;
  }

  const resultPayload = {
    totalArtists: artistData.count || artists.length,
    albums: collectedAlbums
  };

  if (collectedAlbums.length > 0) {
    queryCache.set(cacheKey, resultPayload);
  }

  return resultPayload;
}

function recordSessionSpin(rec) {
  recentSpins = recentSpins.filter(item => item.id !== rec.id);
  recentSpins.unshift(rec);
  if (recentSpins.length > 12) {
    recentSpins.pop();
  }
  renderRecentSpins();
}

function renderRecentSpins() {
  if (!recentSpinsWrap || !recentSpinsStrip) return;
  if (recentSpins.length <= 1) {
    recentSpinsWrap.classList.add("hidden");
    return;
  }

  recentSpinsWrap.classList.remove("hidden");
  recentSpinsStrip.innerHTML = "";

  recentSpins.forEach(item => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "spin-thumb-btn" + (currentRecord && currentRecord.id === item.id ? " active" : "");
    btn.title = `${item.title} — ${item.artist} (${item.country})`;

    const art = document.createElement("div");
    art.className = "spin-thumb-art";
    art.style.background = `linear-gradient(135deg, ${item.palette[0]} 0%, ${item.palette[1]} 100%)`;

    const img = document.createElement("img");
    img.src = `https://coverartarchive.org/release-group/${item.id}/front-250`;
    img.alt = "";
    img.loading = "lazy";
    img.onerror = () => img.remove();

    const flagSpan = document.createElement("span");
    flagSpan.className = "spin-thumb-flag";
    flagSpan.textContent = item.flag;

    const yearSpan = document.createElement("span");
    yearSpan.className = "spin-thumb-year";
    yearSpan.textContent = item.year;

    art.appendChild(img);
    art.appendChild(flagSpan);
    art.appendChild(yearSpan);

    const titleDiv = document.createElement("div");
    titleDiv.className = "spin-thumb-title";
    titleDiv.textContent = item.title;

    const artistDiv = document.createElement("div");
    artistDiv.className = "spin-thumb-artist";
    artistDiv.textContent = `${item.artist} · ${item.country}`;

    btn.appendChild(art);
    btn.appendChild(titleDiv);
    btn.appendChild(artistDiv);

    btn.addEventListener("click", () => {
      if (isSpinning) return;
      noMatchAlert.classList.add("hidden");
      emptyPromptState.classList.add("hidden");
      currentRecord = item;
      playNeedleSound("drop");
      displayRecord(item, false);
      renderRecentSpins();
    });

    recentSpinsStrip.appendChild(btn);
  });
}

async function triggerDrift() {
  if (isSpinning) return;

  previewAudioEl.pause();

  const eligibleCountries = getEligibleCountries();
  if (eligibleCountries.length === 0) {
    showStrictError(
      "No Eligible Countries",
      "Zero countries match your Country First Letter and Continental Zone combination. Adjust your filters and drift again."
    );
    return;
  }

  isSpinning = true;
  driftBtn.disabled = true;
  driftBtnLabel.textContent = "DRIFTING...";

  emptyPromptState.classList.add("hidden");
  noMatchAlert.classList.add("hidden");
  albumCard.classList.add("hidden");
  loadingState.classList.remove("hidden");

  revealResultsPanel();

  vinylDisc.classList.add("spinning");
  tonearm.classList.add("engaged");
  globeSpeed = 0.095;
  playNeedleSound("drop");

  let targetCountry = null;
  if (countrySelect.value !== "ALL") {
    targetCountry = eligibleCountries.find(c => c.code === countrySelect.value);
  } else {
    targetCountry = eligibleCountries[Math.floor(Math.random() * eligibleCountries.length)];
  }

  loadingTitle.textContent = `Locking Coordinates: ${countryCodeToFlag(targetCountry.code)} ${targetCountry.name}`;
  loadingSub.textContent = `Finding artists originating in ${targetCountry.name} & browsing their discography...`;

  try {
    const result = await fetchAlbumsByArtistOrigin(targetCountry);

    if (!result.albums || result.albums.length === 0) {
      stopSpinner();
      showStrictError(
        `No Matching Albums Found in ${targetCountry.name}`,
        `MusicBrainz returned 0 official albums by artists from ${targetCountry.name} matching your exact artist letter, decade, and genre filters. Strict mode is active—adjust your filters or spin again.`
      );
      return;
    }

    let pool = result.albums;
    if (pool.length > 1 && currentRecord) {
      pool = pool.filter(entry => entry.rg.id !== currentRecord.id);
    }

    const chosenEntry = pool[Math.floor(Math.random() * pool.length)];
    const picked = chosenEntry.rg;
    const releaseDate = picked["first-release-date"] || "Unknown Year";
    const releaseYear = releaseDate.slice(0, 4) || "—";

    const rgTags = (picked.tags || [])
      .sort((a, b) => (b.count || 0) - (a.count || 0))
      .slice(0, 3)
      .map(t => t.name);

    const combinedTags = rgTags.length > 0 ? rgTags : chosenEntry.artistTags.slice(0, 3);
    const palette = SLEEVE_PALETTES[Math.floor(Math.random() * SLEEVE_PALETTES.length)];
    const flag = countryCodeToFlag(targetCountry.code);

    const recordObj = {
      id: picked.id,
      title: picked.title,
      artist: chosenEntry.artistName,
      country: targetCountry.name,
      countryCode: targetCountry.code,
      flag: flag,
      region: targetCountry.region,
      year: releaseYear,
      genre: combinedTags.length > 0 ? combinedTags.join(" / ") : (genreSelect.value !== "ALL" ? genreSelect.value : "Studio Album"),
      coords: targetCountry.coords,
      palette: palette,
      archiveTotal: `${result.totalArtists.toLocaleString()} artists`,
      notes: `Verified artist from ${chosenEntry.artistArea}, ${targetCountry.name} (${result.totalArtists.toLocaleString()} artists indexed in ${targetCountry.name} on MusicBrainz).`
    };

    stopSpinner();
    currentRecord = recordObj;
    matchCounter.textContent = `${result.totalArtists.toLocaleString()} Artists in ${targetCountry.name}`;
    matchCounter.classList.remove("zero-matches");
    displayRecord(recordObj, true);
  } catch (err) {
    stopSpinner();
    showStrictError(
      "MusicBrainz Rate Limit or Network Pause",
      "MusicBrainz briefly paused the request due to traffic limits. Wait 2 seconds and click Drift Record again."
    );
  }
}

function stopSpinner() {
  isSpinning = false;
  driftBtn.disabled = false;
  driftBtnLabel.textContent = "DRIFT RECORD";
  vinylDisc.classList.remove("spinning");
  loadingState.classList.add("hidden");
  globeSpeed = 0.012;
}

function showStrictError(heading, message) {
  playNeedleSound("error");
  tonearm.classList.remove("engaged");
  emptyPromptState.classList.add("hidden");
  loadingState.classList.add("hidden");
  albumCard.classList.add("hidden");
  alertHeading.textContent = heading;
  alertMessage.textContent = message;
  noMatchAlert.classList.remove("hidden");
  matchCounter.textContent = "0 Matching Records";
  matchCounter.classList.add("zero-matches");
  revealResultsPanel(noMatchAlert);
}

function displayRecord(rec, addToHistory = true) {
  albumCard.classList.remove("hidden");

  const sleeve = document.getElementById("albumSleeve");
  sleeve.style.background = `linear-gradient(135deg, ${rec.palette[0]} 0%, ${rec.palette[1]} 100%)`;

  const coverImg = document.getElementById("coverArtImg");
  coverImg.classList.add("hidden");
  coverImg.src = `https://coverartarchive.org/release-group/${rec.id}/front-250`;
  coverImg.onload = () => {
    coverImg.classList.remove("hidden");
  };
  coverImg.onerror = () => {
    coverImg.classList.add("hidden");
  };

  document.getElementById("sleeveYear").textContent = rec.year;
  document.getElementById("sleeveFlag").textContent = rec.flag;
  document.getElementById("sleeveArtist").textContent = rec.artist;
  document.getElementById("sleeveTitle").textContent = rec.title;

  document.getElementById("countryBadge").textContent = `${rec.flag} ${rec.country}`;
  document.getElementById("coordsBadge").textContent = rec.coords;
  document.getElementById("archiveTotalBadge").textContent = `Pool: ${rec.archiveTotal}`;
  document.getElementById("albumTitle").textContent = rec.title;
  document.getElementById("artistName").textContent = rec.artist;
  document.getElementById("yearTag").textContent = `Released: ${rec.year}`;
  document.getElementById("regionTag").textContent = rec.region;
  document.getElementById("genreTag").textContent = rec.genre;
  document.getElementById("fieldNotes").textContent = rec.notes;

  const query = encodeURIComponent(`${rec.artist} ${rec.title}`);
  document.getElementById("spotifyLink").href = `https://open.spotify.com/search/${query}`;
  document.getElementById("youtubeLink").href = `https://www.youtube.com/results?search_query=${query}`;
  document.getElementById("discogsLink").href = `https://www.discogs.com/search/?q=${query}&type=release`;
  document.getElementById("mbLink").href = `https://musicbrainz.org/release-group/${rec.id}`;

  if (addToHistory) {
    recordSessionSpin(rec);
  }

  revealResultsPanel(albumCard);
  loadAudioPreview(rec.artist, rec.title);
}

function resetAllFilters() {
  countryLetterSelect.value = "ALL";
  regionSelect.value = "ALL";
  artistLetterSelect.value = "ALL";
  decadeSelect.value = "ALL";
  genreSelect.value = "ALL";
  noMatchAlert.classList.add("hidden");
  populateCountryDropdown();
}

countryLetterSelect.addEventListener("change", populateCountryDropdown);
regionSelect.addEventListener("change", populateCountryDropdown);
countrySelect.addEventListener("change", updateEligibilityStatus);
artistLetterSelect.addEventListener("change", syncUrlParams);
decadeSelect.addEventListener("change", syncUrlParams);
genreSelect.addEventListener("change", syncUrlParams);

resetFiltersBtn.addEventListener("click", resetAllFilters);
alertResetBtn.addEventListener("click", resetAllFilters);
driftBtn.addEventListener("click", triggerDrift);

shareRecordBtn.addEventListener("click", async () => {
  syncUrlParams();
  const shareUrl = window.location.href;
  try {
    await navigator.clipboard.writeText(shareUrl);
    shareRecordBtn.innerHTML = "<span>✓ Link Copied!</span>";
    setTimeout(() => {
      shareRecordBtn.innerHTML = "<span>🔗 Share Filter</span>";
    }, 2000);
  } catch (e) {
    prompt("Copy this shareable Record Drift link:", shareUrl);
  }
});

previewPlayBtn.addEventListener("click", () => {
  if (previewAudioEl.paused) {
    previewAudioEl.play();
    previewPlayBtn.textContent = "⏸ Pause Preview";
  } else {
    previewAudioEl.pause();
    previewPlayBtn.textContent = "▶ Play 30s Preview";
  }
});

previewAudioEl.addEventListener("ended", () => {
  previewPlayBtn.textContent = "▶ Play 30s Preview";
});

document.addEventListener("keydown", e => {
  if (e.code === "Space" && document.activeElement.tagName !== "SELECT" && document.activeElement.tagName !== "BUTTON") {
    e.preventDefault();
    triggerDrift();
  }
});

audioToggleBtn.addEventListener("click", () => {
  audioEnabled = !audioEnabled;
  audioToggleBtn.setAttribute("aria-pressed", String(audioEnabled));
  audioIcon.textContent = audioEnabled ? "🔊" : "🔇";
  audioToggleBtn.querySelector(".btn-label").textContent = audioEnabled ? "Audio: ON" : "Audio: OFF";
});

initFilters();
renderGlobeLoop();
applyUrlParamsOnLoad();
