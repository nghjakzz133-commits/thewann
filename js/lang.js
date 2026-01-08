const LANG = {
  vi: {
    menu_home: "Trang Chủ",
    menu_about: "Giới Thiệu",
    menu_booking: "Đặt Bàn",
    menu_contact: "Liên Hệ",

    booking_title: "ĐẶT BÀN VIP",
    booking_desc: "Xác nhận trong vòng 10 phút",

    name: "Họ và tên",
    email: "Email",
    guests: "Số khách"
  },

  en: {
    menu_home: "Home",
    menu_about: "About",
    menu_booking: "Booking",
    menu_contact: "Contact",

    booking_title: "VIP TABLE BOOKING",
    booking_desc: "Confirmation within 10 minutes",

    name: "Full Name",
    email: "Email Address",
    guests: "Number of guests"
  }
};

// SET LANGUAGE
function setLang(lang) {
  localStorage.setItem("lang", lang);

  // Text nodes
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (LANG[lang][key]) {
      el.innerText = LANG[lang][key];
    }
  });

  // Placeholder inputs
  document.querySelectorAll("[data-lang-placeholder]").forEach(el => {
    const key = el.getAttribute("data-lang-placeholder");
    if (LANG[lang][key]) {
      el.placeholder = LANG[lang][key];
    }
  });
}

// AUTO LOAD
const currentLang = localStorage.getItem("lang") || "vi";
setLang(currentLang);
