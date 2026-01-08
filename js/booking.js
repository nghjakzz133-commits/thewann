function smartBooking() {
  const name = document.getElementById("name").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guest = document.getElementById("guest").value;
  const note = document.getElementById("note").value;

  if (!name || !date || !time) {
    alert("Vui lòng nhập Tên, Ngày và Giờ");
    return;
  }

  alert(
    "🍾 BOOKING RECEIVED\n\n" +
    "Name: " + name + "\n" +
    "Date: " + date + "\n" +
    "Time: " + time + "\n" +
    "Guests: " + (guest || "—") + "\n" +
    "Note: " + (note || "—")
  );
}
