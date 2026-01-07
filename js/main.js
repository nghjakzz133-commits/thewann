let currentLang = localStorage.getItem("lang") || "vi";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLang();
}

function applyLang() {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (LANG[currentLang] && LANG[currentLang][key]) {
      el.innerText = LANG[currentLang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", applyLang);

