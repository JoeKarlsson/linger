// Shared by every page: turns a marked line into words under marker, and boils the marker.
//   (none) always visible   ^ appears after a short pause   ~ appears only if you linger

// Fills `el` with one span per word. Hidden words get data-l and a random reveal delay.
function buildMarkedLine(el, text) {
  el.classList.add("line");
  if (!el.dataset.level) el.dataset.level = "0";
  el.textContent = "";
  text.split(" ").forEach((token, j, all) => {
    const word = document.createElement("span");
    word.className = "w";
    const mark = token[0];
    if (mark === "^" || mark === "~") {
      word.dataset.l = mark === "^" ? "1" : "2";
      word.style.setProperty("--d", (Math.random() * 1.4).toFixed(2) + "s");
      word.style.setProperty("--oy", ((Math.random() - 0.5) * 0.08).toFixed(3) + "em");
      token = token.slice(1);
    }
    word.textContent = token;
    el.append(word);
    if (j < all.length - 1) el.append(" ");
  });
  return el;
}

// Static markup: <p data-words="~the ^snow ..." data-level="1">plain text for no-JS</p>
document.querySelectorAll("[data-words]").forEach(el => buildMarkedLine(el, el.dataset.words));

// Stop-motion boil: about 8 times a second, every bar on screen shifts by up to a pixel,
// like a marker stroke redrawn each frame.
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(() => {
    if (document.hidden) return;
    const h = window.innerHeight;
    for (const line of document.querySelectorAll(".line")) {
      const r = line.getBoundingClientRect();
      if (r.bottom < 0 || r.top > h) continue;
      for (const bar of line.querySelectorAll(".w[data-l]")) {
        bar.style.setProperty("--jx", Math.round(Math.random() * 2 - 1) + "px");
        bar.style.setProperty("--jy", Math.round(Math.random() * 2 - 1) + "px");
      }
    }
  }, 125);
}
