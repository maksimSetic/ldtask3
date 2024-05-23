const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1: { slidesPerView: 1, spaceBetween: 0 },
    320: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    880: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
  },
});
