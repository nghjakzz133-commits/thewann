fetch('components/header.html')
  .then(res => res.text())
  .then(data => document.getElementById('header').innerHTML = data);

fetch('components/footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer').innerHTML = data);
function toggleMenu() {
  document.getElementById("slideMenu").classList.toggle("active");
  document.getElementById("menuOverlay").classList.toggle("active");
}
function toggleMenu() {
  document.querySelector(".mobile-menu").classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}

