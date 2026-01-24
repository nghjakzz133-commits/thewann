/* =========================================================
   ABOUT PAGE — JS
   Compatible with about.html + about.css
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     HERO VIDEO SAFETY
  ========================= */
  const heroVideo = document.querySelector(".about-hero video");

  if (heroVideo) {
    heroVideo.muted = true;

    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        heroVideo.style.display = "none";
        heroVideo.parentElement.classList.add("video-fallback");
      });
    }
  }

  /* =========================
     SCROLL REVEAL (LIGHTWEIGHT)
  ========================= */
  const revealEls = document.querySelectorAll(
    ".about-box, .about-card, .about-highlight .pill"
  );

  revealEls.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity .7s ease, transform .7s ease";
  });

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach(el => revealObserver.observe(el));

  /* =========================
     CTA CLICK FEEDBACK
  ========================= */
  const ctaButtons = document.querySelectorAll(".about-btn");

  ctaButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 180);
    });
  });

  /* =========================
     HERO TEXT MICRO PARALLAX
  ========================= */
  const heroContent = document.querySelector(".about-hero-content");

  if (heroContent) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY < 300) {
        heroContent.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
    });
  }

});
