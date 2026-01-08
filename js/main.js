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
