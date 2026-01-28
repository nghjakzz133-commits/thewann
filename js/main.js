document.addEventListener("DOMContentLoaded", () => {
  const btnBooking = document.getElementById("btnBooking");
  const bookingForm = document.getElementById("bookingForm");

  if (btnBooking) {
    btnBooking.addEventListener("click", () => {
      document
        .getElementById("booking")
        .scrollIntoView({ behavior: "smooth" });
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Đặt phòng thành công! Chúng tôi sẽ liên hệ sớm.");
      bookingForm.reset();
    });
  }
});
const isTikTok = navigator.userAgent.toLowerCase().includes('tiktok');

if (isTikTok) {
  document.querySelectorAll('a[href^="tel:"], a[href^="zalo:"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      alert('TikTok không hỗ trợ gọi trực tiếp.\nVui lòng mở link bằng Safari/Chrome.');
    });
  });
}
