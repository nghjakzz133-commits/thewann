/* ================= BOOKING JS ================= */
document.addEventListener("DOMContentLoaded", () => {

  /* ===== Fade-in on scroll ===== */
  const revealElements = document.querySelectorAll(
    ".booking-card, .benefit-item, .booking-hero-content"
  );

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("reveal-active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ===== CTA click tracking (optional) ===== */
  const ctaButtons = document.querySelectorAll(".cta-btn");

  ctaButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("Booking CTA clicked:", btn.textContent.trim());
    });
  });

  /* ===== Hero subtle parallax ===== */
  const hero = document.querySelector(".booking-hero");

  if (hero) {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY * 0.25;
      hero.style.backgroundPosition = `center ${offset}px`;
    });
  }

});
