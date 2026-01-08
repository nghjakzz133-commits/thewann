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
function smartBooking() {
  const ua = navigator.userAgent.toLowerCase();

  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guest = document.getElementById("guest").value;

  let msg = `
BOOKING THE WANN
📅 Date: ${date || "Not specified"}
⏰ Time: ${time || "Not specified"}
👥 Guests: ${guest || "Not specified"}

VIP TABLE
`;

  // Detect Zalo
  if (ua.includes("zalo")) {
    window.open("https://zalo.me/0778307889", "_blank");
    return;
  }

  // Detect Mobile VN → ưu tiên Zalo
  if (/iphone|android/.test(ua)) {
    window.open("https://zalo.me/0778307889", "_blank");
  } else {
    // Desktop / foreign → WhatsApp
    const phone = "849778307889";
    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  }
}
