import { Swiper, Navigation, Autoplay, Lazy, A11y } from "swiper/dist/js/swiper.esm.js";
Swiper.use([Navigation, Autoplay, Lazy, A11y]);

new Swiper("#special-price .contents .swiper-container", {
  slidesPerView: 5,
  spaceBetween: 40,
  speed: 500,
  loop: true,
  autoplay: false,
  allowTouchMove: false,
  lazy: {
    loadPrevNext: true,
  },
  a11y: {
    prevSlideMessage: "이전 이미지",
    nextSlideMessage: "다음 이미지",
  },
  navigation: {
    prevEl: "#special-price .contents .swiper-button-prev",
    nextEl: "#special-price .contents .swiper-button-next",
  },
});
