import { Swiper, Navigation, Autoplay, Lazy, A11y } from "swiper/dist/js/swiper.esm.js";
Swiper.use([Navigation, Autoplay, Lazy, A11y]);

new Swiper("#event .contents .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 40,
  speed: 500,
  loop: true,
  autoplay: false,
  allowTouchMove: true,
  lazy: {
    loadPrevNext: true,
  },
  a11y: {
    prevSlideMessage: "이전 이미지",
    nextSlideMessage: "다음 이미지",
  },
  navigation: {
    prevEl: "#event .contents .swiper-button-prev",
    nextEl: "#event .contents .swiper-button-next",
  },
});
