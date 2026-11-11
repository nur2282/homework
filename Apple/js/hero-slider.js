export const heroSlider = () => {
  new Swiper(".hero__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewhel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".hero__slider-button--prev",
      nextEl: ".hero__slider-button--next",
    },
  });
};
