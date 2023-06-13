const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  initPosition: { x: 0, y: 6000 },
  tablet: {
    smooth: true,
  },
  smartphone: {
    smooth: true,
  },
  getDirection: true,
  // direction: "vertical",
  // reloadOnContextChange: true,
});

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },

    800: {
      slidesPerView: 2.5,
    },
    650: {
      slidesPerView: 2,
    },
    440: {
      slidesPerView: 1.35,
    },
  },

  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-before",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// === HEADER HIDE ===

// document.querySelector(".end").style.transform =
//   "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";
// console.log(document.querySelector(".end").style.transform);
const header = document.querySelector(".main__heading");

let currentScroll = window.scrollY;
scroll.on("scroll", (args) => {
  if (args.direction === "up") {
    header.classList.remove("main__heading-closed");
  } else {
    header.classList.add("main__heading-closed");
  }
});
