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

 const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
  });
function toggleContact(){
  const t = document.getElementById("contactType").value;
  document.getElementById("zaloBox").style.display =
    t === "zalo" ? "block" : "none";
}

function submitBooking(e){
  e.preventDefault();
  alert("Đã gửi booking — sẽ xác nhận ngay!");
}
