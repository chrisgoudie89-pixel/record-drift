// Record Drift (recorddrift.com) — Global Album Roulette & Cartography

const ALBUM_DATABASE = [
  {
    id: "ml-ali-farka-1994",
    title: "Talking Timbuktu",
    artist: "Ali Farka Touré & Ry Cooder",
    country: "Mali",
    flag: "🇲🇱",
    region: "Africa",
    year: 1994,
    decade: "1990s",
    genre: "Desert Blues",
    coords: "LAT 16.77°N • LNG 3.01°W",
    palette: ["#78350f", "#b45309"],
    notes: "Recorded in three days with minimal overdubs, bridging Songhai river traditions from Niafunké with hypnotic slide guitar."
  },
  {
    id: "cd-franco-1972",
    title: "L'Afrique Danse",
    artist: "Franco & Le T.P.O.K. Jazz",
    country: "DR Congo",
    flag: "🇨🇩",
    region: "Africa",
    year: 1972,
    decade: "1970s",
    genre: "Congolese Rumba",
    coords: "LAT 4.44°S • LNG 15.26°E",
    palette: ["#064e3b", "#047857"],
    notes: "Golden-era Kinshasa rumba driven by interlocking sebene guitar lines and brass arrangements that defined Central African nightlife."
  },
  {
    id: "jp-haruomi-1973",
    title: "Hosono House",
    artist: "Haruomi Hosono",
    country: "Japan",
    flag: "🇯🇵",
    region: "Asia",
    year: 1973,
    decade: "1970s",
    genre: "Folk Rock",
    coords: "LAT 35.85°N • LNG 139.41°E",
    palette: ["#1e3a8a", "#1d4ed8"],
    notes: "Recorded on a 16-track console inside an American-style bungalow in Sayama, laying the blueprint for Japanese city pop and folk."
  },
  {
    id: "br-jorge-ben-1974",
    title: "A Tábua de Esmeralda",
    artist: "Jorge Ben",
    country: "Brazil",
    flag: "🇧🇷",
    region: "South America",
    year: 1974,
    decade: "1970s",
    genre: "MPB / Samba Soul",
    coords: "LAT 22.91°S • LNG 43.17°W",
    palette: ["#14532d", "#ca8a04"],
    notes: "Alchemical themes meet percussive acoustic guitar strumming in one of Rio de Janeiro's most celebrated studio recordings."
  },
  {
    id: "et-mulatu-1972",
    title: "Mulatu of Ethiopia",
    artist: "Mulatu Astatke",
    country: "Ethiopia",
    flag: "🇪🇹",
    region: "Africa",
    year: 1972,
    decade: "1970s",
    genre: "Ethio-Jazz",
    coords: "LAT 9.03°N • LNG 38.74°E",
    palette: ["#7f1d1d", "#b45309"],
    notes: "Vibrant vibraphone, modal Ethiopian scales, and Latin percussion fuse in the unmistakable Addis Ababa sound."
  },
  {
    id: "dk-gasolin-1976",
    title: "Efter endnu en dag",
    artist: "Gasolin'",
    country: "Denmark",
    flag: "🇩🇰",
    region: "Europe",
    year: 1976,
    decade: "1970s",
    genre: "Classic Rock",
    coords: "LAT 55.67°N • LNG 12.56°E",
    palette: ["#881337", "#be123c"],
    notes: "Copenhagen's premier rock outfit at their melodic peak, pairing working-class storytelling with soaring harmonies."
  },
  {
    id: "is-sigur-ros-1999",
    title: "Ágætis byrjun",
    artist: "Sigur Rós",
    country: "Iceland",
    flag: "🇮🇸",
    region: "Europe",
    year: 1999,
    decade: "1990s",
    genre: "Post-Rock",
    coords: "LAT 64.14°N • LNG 21.94°W",
    palette: ["#0f172a", "#0284c7"],
    notes: "Bowed electric guitar and glacial chamber arrangements recorded in Reykjavík that reshaped atmospheric rock."
  },
  {
    id: "tr-baris-manco-1975",
    title: "2023",
    artist: "Barış Manço",
    country: "Turkey",
    flag: "🇹🇷",
    region: "Asia",
    year: 1975,
    decade: "1970s",
    genre: "Anatolian Rock",
    coords: "LAT 41.01°N • LNG 28.97°E",
    palette: ["#581c87", "#9333ea"],
    notes: "Synthesizers, fuzz bass, and traditional Turkish folk motifs collide in an ambitious Anatolian concept record."
  },
  {
    id: "jm-lee-perry-1976",
    title: "Super Ape",
    artist: "The Upsetters",
    country: "Jamaica",
    flag: "🇯🇲",
    region: "North America",
    year: 1976,
    decade: "1970s",
    genre: "Dub Reggae",
    coords: "LAT 18.01°N • LNG 76.80°W",
    palette: ["#065f46", "#d97706"],
    notes: "Mixed at Kingston's legendary Black Ark studio using 4-track tape saturation, spring reverb, and hypnotic bass weight."
  },
  {
    id: "se-bo-hansson-1970",
    title: "Sagan om ringen",
    artist: "Bo Hansson",
    country: "Sweden",
    flag: "🇸🇪",
    region: "Europe",
    year: 1970,
    decade: "1970s",
    genre: "Progressive Instrumental",
    coords: "LAT 59.32°N • LNG 18.06°E",
    palette: ["#1e293b", "#475569"],
    notes: "Moody Hammond organ, Moog textures, and pastoral flutes composed during an isolated winter in Stockholm."
  },
  {
    id: "ng-william-onyeabor-1978",
    title: "Atomic Bomb",
    artist: "William Onyeabor",
    country: "Nigeria",
    flag: "🇳🇬",
    region: "Africa",
    year: 1978,
    decade: "1970s",
    genre: "Synth Funk",
    coords: "LAT 6.45°N • LNG 7.51°E",
    palette: ["#312e81", "#4f46e5"],
    notes: "Self-pressed in Enugu on his Wilfilms label, pairing analog synthesizers with infectious Afro-funk grooves."
  },
  {
    id: "ar-soda-stereo-1990",
    title: "Canción Animal",
    artist: "Soda Stereo",
    country: "Argentina",
    flag: "🇦🇷",
    region: "South America",
    year: 1990,
    decade: "1990s",
    genre: "Rock en Español",
    coords: "LAT 34.60°S • LNG 58.38°W",
    palette: ["#0369a1", "#0ea5e9"],
    notes: "Buenos Aires trio delivering arena-sized guitar riffs and timeless Latin American rock anthems."
  },
  {
    id: "au-avalanches-2000",
    title: "Since I Left You",
    artist: "The Avalanches",
    country: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    year: 2000,
    decade: "2000s",
    genre: "Plunderphonics",
    coords: "LAT 37.81°S • LNG 144.96°E",
    palette: ["#1d4ed8", "#38bdf8"],
    notes: "Constructed in Melbourne from over 3,500 vinyl samples woven into a seamless, sun-drenched dance odyssey."
  },
  {
    id: "lb-fairuz-1971",
    title: "Jerusalem in My Heart",
    artist: "Fairuz",
    country: "Lebanon",
    flag: "🇱🇧",
    region: "Asia",
    year: 1971,
    decade: "1970s",
    genre: "Arabic Classical / Folk",
    coords: "LAT 33.89°N • LNG 35.50°E",
    palette: ["#7c2d12", "#c2410c"],
    notes: "Orchestral Levantine arrangements showcasing one of the most iconic voices in Middle Eastern music."
  },
  {
    id: "de-neu-1972",
    title: "Neu!",
    artist: "NEU!",
    country: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    year: 1972,
    decade: "1970s",
    genre: "Krautrock",
    coords: "LAT 51.22°N • LNG 6.77°E",
    palette: ["#991b1b", "#18181b"],
    notes: "Düsseldorf minimalism powered by Klaus Dinger's relentless motorik drumbeat and Michael Rother's shimmering guitars."
  },
  {
    id: "co-frente-cumbiero-2011",
    title: "Frente Cumbiero Meets Mad Professor",
    artist: "Frente Cumbiero",
    country: "Colombia",
    flag: "🇨🇴",
    region: "South America",
    year: 2011,
    decade: "2010s",
    genre: "Digital Cumbia / Dub",
    coords: "LAT 4.71°N • LNG 74.07°W",
    palette: ["#065f46", "#eab308"],
    notes: "Bogotá brass cumbia traditions collide with analog dub mixing techniques."
  }
];

// State
let currentRecord = null;
let isSpinning = false;
let audioEnabled = true;
let globeAngle = 0;
let globeSpeed = 0.012;
let savedCrates = JSON.parse(localStorage.getItem("recordDriftCrates") || "[]");

// DOM Elements
const countryLetterSelect = document.getElementById("countryLetterSelect");
const artistLetterSelect = document.getElementById("artistLetterSelect");
const regionSelect = document.getElementById("regionSelect");
const decadeSelect = document.getElementById("decadeSelect");
const genreSelect = document.getElementById("genreSelect");
const matchCounter = document.getElementById("matchCounter");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const alertResetBtn = document.getElementById("alertResetBtn");

const driftBtn = document.getElementById("driftBtn");
const vinylDisc = document.getElementById("vinylDisc");
const tonearm = document.getElementById("tonearm");
const globeCanvas = document.getElementById("globeCanvas");
const ctx = globeCanvas.getContext("2d");

const emptyPromptState = document.getElementById("emptyPromptState");
const noMatchAlert = document.getElementById("noMatchAlert");
const albumCard = document.getElementById("albumCard");

const audioToggleBtn = document.getElementById("audioToggleBtn");
const audioIcon = document.getElementById("audioIcon");

const openCratesBtn = document.getElementById("openCratesBtn");
const closeCratesBtn = document.getElementById("closeCratesBtn");
const cratesDrawer = document.getElementById("cratesDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const crateBadge = document.getElementById("crateBadge");
const crateFilterSelect = document.getElementById("crateFilterSelect");
const exportLogBtn = document.getElementById("exportLogBtn");
const cratesList = document.getElementById("cratesList");
const saveCrateBtn = document.getElementById("saveCrateBtn");

// Initialize Filter Dropdowns
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

  const regions = [...new Set(ALBUM_DATABASE.map(a => a.region))].sort();
  regions.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r;
    opt.textContent = r;
    regionSelect.appendChild(opt);
  });

  const decades = [...new Set(ALBUM_DATABASE.map(a => a.decade))].sort();
  decades.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    decadeSelect.appendChild(opt);
  });

  const genres = [...new Set(ALBUM_DATABASE.map(a => a.genre))].sort();
  genres.forEach(g => {
    const opt = document.createElement("option");
    opt.value = g;
    opt.textContent = g;
    genreSelect.appendChild(opt);
  });
}

// Strict Filter Evaluation
function getFilteredRecords() {
  const cLetter = countryLetterSelect.value;
  const aLetter = artistLetterSelect.value;
  const region = regionSelect.value;
  const decade = decadeSelect.value;
  const genre = genreSelect.value;

  return ALBUM_DATABASE.filter(item => {
    const countryFirst = item.country.trim().charAt(0).toUpperCase();
    const artistFirst = item.artist.trim().charAt(0).toUpperCase();

    if (cLetter !== "ALL" && countryFirst !== cLetter) return false;
    if (aLetter !== "ALL" && artistFirst !== aLetter) return false;
    if (region !== "ALL" && item.region !== region) return false;
    if (decade !== "ALL" && item.decade !== decade) return false;
    if (genre !== "ALL" && item.genre !== genre) return false;
    return true;
  });
}

function updateMatchCount() {
  const matches = getFilteredRecords();
  const count = matches.length;
  matchCounter.textContent = `${count} Matching ${count === 1 ? "Record" : "Records"}`;
  if (count === 0) {
    matchCounter.classList.add("zero-matches");
  } else {
    matchCounter.classList.remove("zero-matches");
  }
}

// Web Audio API Needle Drop Sound
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
  } catch (e) {
    // Audio blocked or unsupported
  }
}

// Spinning Wireframe Canvas Globe
function renderGlobeLoop() {
  const w = globeCanvas.width;
  const h = globeCanvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const radius = 58;

  ctx.clearRect(0, 0, w, h);

  // Outer sphere glow
  const grad = ctx.createRadialGradient(cx - 15, cy - 15, 8, cx, cy, radius);
  grad.addColorStop(0, "#1e3a8a");
  grad.addColorStop(1, "#050914");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();

  // Latitude lines
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

  // Rotating Longitude Meridians
  for (let i = 0; i < 6; i++) {
    const angle = globeAngle + (i * Math.PI) / 6;
    const rx = Math.cos(angle) * radius;
    ctx.strokeStyle = i === 0 ? "rgba(212, 175, 55, 0.75)" : "rgba(56, 189, 248, 0.32)";
    ctx.beginPath();
    ctx.ellipse(cx, cy, Math.abs(rx), radius, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Rim ring
  ctx.strokeStyle = "rgba(212, 175, 55, 0.8)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  globeAngle += globeSpeed;
  requestAnimationFrame(renderGlobeLoop);
}

// Drift Spin Action (Strict Filter Mode)
function triggerDrift() {
  if (isSpinning) return;

  const candidates = getFilteredRecords();

  // Strict check: if 0 matches, halt and display prompt
  if (candidates.length === 0) {
    playNeedleSound("error");
    emptyPromptState.classList.add("hidden");
    albumCard.classList.add("hidden");
    noMatchAlert.classList.remove("hidden");
    tonearm.classList.remove("engaged");
    return;
  }

  isSpinning = true;
  noMatchAlert.classList.add("hidden");
  emptyPromptState.classList.add("hidden");

  vinylDisc.classList.add("spinning");
  tonearm.classList.add("engaged");
  globeSpeed = 0.09;
  playNeedleSound("drop");

  // Avoid repeating same album if multiple candidates exist
  let pool = candidates;
  if (candidates.length > 1 && currentRecord) {
    pool = candidates.filter(r => r.id !== currentRecord.id);
  }
  const chosen = pool[Math.floor(Math.random() * pool.length)];

  setTimeout(() => {
    vinylDisc.classList.remove("spinning");
    globeSpeed = 0.012;
    isSpinning = false;
    currentRecord = chosen;
    displayRecord(chosen);
  }, 850);
}

function displayRecord(rec) {
  albumCard.classList.remove("hidden");

  const sleeve = document.getElementById("albumSleeve");
  sleeve.style.background = `linear-gradient(135deg, ${rec.palette[0]} 0%, ${rec.palette[1]} 100%)`;

  document.getElementById("sleeveYear").textContent = rec.year;
  document.getElementById("sleeveFlag").textContent = rec.flag;
  document.getElementById("sleeveArtist").textContent = rec.artist;
  document.getElementById("sleeveTitle").textContent = rec.title;

  document.getElementById("countryBadge").textContent = `${rec.flag} ${rec.country}`;
  document.getElementById("coordsBadge").textContent = rec.coords;
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

  updateSaveButtonState();
}

function updateSaveButtonState() {
  if (!currentRecord) return;
  const exists = savedCrates.some(item => item.id === currentRecord.id);
  if (exists) {
    saveCrateBtn.innerHTML = "<span>✓ Saved in My Crate</span>";
  } else {
    saveCrateBtn.innerHTML = "<span>+ Add to My Crate</span>";
  }
}

// Crates Management
function persistCrates() {
  localStorage.setItem("recordDriftCrates", JSON.stringify(savedCrates));
  crateBadge.textContent = savedCrates.length;
  renderCratesList();
  updateSaveButtonState();
}

function addCurrentToCrate() {
  if (!currentRecord) return;
  if (savedCrates.some(item => item.id === currentRecord.id)) return;

  savedCrates.unshift({
    ...currentRecord,
    status: "want",
    rating: 0,
    savedAt: new Date().toISOString().split("T")[0]
  });
  persistCrates();
}

function renderCratesList() {
  const filter = crateFilterSelect.value;
  const filtered = savedCrates.filter(item => filter === "ALL" || item.status === filter);

  if (filtered.length === 0) {
    cratesList.innerHTML = `<p class="panel-hint" style="text-align:center;margin-top:2rem;">No records in this crate view yet.</p>`;
    return;
  }

  cratesList.innerHTML = filtered.map(item => `
    <div class="crate-item">
      <div class="crate-item-top">
        <div>
          <div class="crate-item-title">${item.flag} ${item.title}</div>
          <div class="crate-item-meta">${item.artist} • ${item.country} (${item.year})</div>
        </div>
        <button class="remove-crate-btn" data-id="${item.id}" title="Remove">Remove</button>
      </div>
      <div class="crate-controls">
        <select class="status-select" data-id="${item.id}">
          <option value="want" ${item.status === "want" ? "selected" : ""}>Want to Listen</option>
          <option value="listened" ${item.status === "listened" ? "selected" : ""}>Listened</option>
        </select>
        <div>
          ${[1, 2, 3, 4, 5].map(star => `
            <button class="star-btn" data-id="${item.id}" data-star="${star}">
              ${item.rating >= star ? "★" : "☆"}
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function exportListeningLog() {
  if (savedCrates.length === 0) {
    alert("Your crate is empty. Save at least one album before exporting.");
    return;
  }
  const lines = [
    "RECORD DRIFT (recorddrift.com) — LISTENING LOG",
    `Exported: ${new Date().toLocaleDateString()}`,
    "==================================================",
    ""
  ];

  savedCrates.forEach((item, idx) => {
    lines.push(`${idx + 1}. ${item.title} — ${item.artist}`);
    lines.push(`   Origin: ${item.country} (${item.region}) | Year: ${item.year} | Genre: ${item.genre}`);
    lines.push(`   Status: ${item.status === "listened" ? "Listened" : "Want to Listen"} | Rating: ${item.rating}/5`);
    lines.push("");
  });

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "record-drift-log.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function resetAllFilters() {
  countryLetterSelect.value = "ALL";
  artistLetterSelect.value = "ALL";
  regionSelect.value = "ALL";
  decadeSelect.value = "ALL";
  genreSelect.value = "ALL";
  noMatchAlert.classList.add("hidden");
  updateMatchCount();
}

// Event Listeners
[countryLetterSelect, artistLetterSelect, regionSelect, decadeSelect, genreSelect].forEach(sel => {
  sel.addEventListener("change", updateMatchCount);
});

resetFiltersBtn.addEventListener("click", resetAllFilters);
alertResetBtn.addEventListener("click", resetAllFilters);
driftBtn.addEventListener("click", triggerDrift);
saveCrateBtn.addEventListener("click", addCurrentToCrate);

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

openCratesBtn.addEventListener("click", () => {
  cratesDrawer.classList.add("open");
  cratesDrawer.setAttribute("aria-hidden", "false");
  drawerBackdrop.classList.remove("hidden");
});

function closeDrawer() {
  cratesDrawer.classList.remove("open");
  cratesDrawer.setAttribute("aria-hidden", "true");
  drawerBackdrop.classList.add("hidden");
}

closeCratesBtn.addEventListener("click", closeDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);
crateFilterSelect.addEventListener("change", renderCratesList);
exportLogBtn.addEventListener("click", exportListeningLog);

cratesList.addEventListener("click", e => {
  const removeBtn = e.target.closest(".remove-crate-btn");
  if (removeBtn) {
    const id = removeBtn.dataset.id;
    savedCrates = savedCrates.filter(item => item.id !== id);
    persistCrates();
    return;
  }

  const starBtn = e.target.closest(".star-btn");
  if (starBtn) {
    const id = starBtn.dataset.id;
    const star = Number(starBtn.dataset.star);
    savedCrates = savedCrates.map(item => item.id === id ? { ...item, rating: star } : item);
    persistCrates();
  }
});

cratesList.addEventListener("change", e => {
  if (e.target.classList.contains("status-select")) {
    const id = e.target.dataset.id;
    const status = e.target.value;
    savedCrates = savedCrates.map(item => item.id === id ? { ...item, status } : item);
    persistCrates();
  }
});

// Boot
initFilters();
updateMatchCount();
persistCrates();
renderGlobeLoop();
