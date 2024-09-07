const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.queryselector("i");

menuBtn.addEventListener("click", (e) => {
  navlinks.classList.toggle("open");

  const isOpen = navlinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navlinks.addEventListener("click", (e) => {
  navlinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealoption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

// header container
scrollReveal().reveal(".header_container .section_subheader", {
  ...scrollRevealoption,
});

scrollReveal().reveal(".header_container h1", {
  ...scrollRevealoption,
  delay:500,
});

scrollReveal().reveal(".header_container .btn", {
  ...scrollRevealoption,
  delay: 1000,
});

// room container
scrollReveal().reveal(".room_card", {
  ...scrollRevealoption,
  interval: 500,
});

// feature container
scrollReveal().reveal(".feature_card", {
  ...scrollRevealoption,
  interval: 500,
});

// news container
scrollReveal().reveal(".news_card", {
  ...scrollRevealoption,
  interval: 500,
});