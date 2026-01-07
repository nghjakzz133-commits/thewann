function bookZalo() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guest = document.getElementById("guest").value;

  let msg = "BOOKING THE WANN%0A";

  if (date) msg += "📅 Date: " + date + "%0A";
  if (time) msg += "⏰ Time: " + time + "%0A";
  if (guest) msg += "👥 Guests: " + guest + "%0A";

  msg += "%0A🔥 VIP TABLE";

  // Zalo OA / cá nhân
  const phone = "0778307889";
  const url = `https://zalo.me/${phone}?text=${msg}`;

  window.open(url, "_blank");
}
