/* =========================================================
   THE WANN — CONTACT PAGE JS
   File: contact.js
   Goal:
   - Nhẹ
   - Không phụ thuộc thư viện
   - Tăng UX cho Contact
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     Highlight hotline when idle
  =============================== */
  const hotlineBtn = document.querySelector('.contact-actions .btn');

  if (hotlineBtn) {
    setInterval(() => {
      hotlineBtn.classList.toggle('pulse');
    }, 4200);
  }

  /* ===============================
     Copy phone number on long press
  =============================== */
  const phoneLink = document.querySelector('a[href^="tel:"]');

  if (phoneLink) {
    phoneLink.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText("0899996977");
      alert("Đã copy số hotline: 0899 996 977");
    });
  }

});
