import Swiper from "swiper/bundle";
import "swiper/css/bundle";

(function initMainSlide() {
  const btnToggleSlide = document.querySelector(".main-slider .btn-toggle-slide");

  new Swiper("main .main-slider .swiper", {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: "main .main-slider .swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "main .main-slider .swiper .swiper-button-next",
      prevEl: "main .main-slider .swiper .swiper-button-prev",
    },
    on: {
      beforeInit() {
        document.querySelector(".main-slider .swiper .swiper-wrapper .swiper-slide .text-img").style.opacity = "1";
      },
      afterInit() {
        btnToggleSlide.addEventListener("click", () => {
          if (this.autoplay.running) {
            this.autoplay.stop();
            btnToggleSlide.classList.add("play");
          } else {
            this.autoplay.start();
            btnToggleSlide.classList.remove("play");
          }
        });
        this.pagination.bullets.forEach((bullet) => {
          bullet.addEventListener("click", () => {
            btnToggleSlide.classList.add("play");
          });
        });
        this.navigation.$prevEl[0].addEventListener("click", () => {
          btnToggleSlide.classList.add("play");
        });
        this.navigation.$nextEl[0].addEventListener("click", () => {
          btnToggleSlide.classList.add("play");
        });
        this.slides.forEach((slide) => {
          slide.querySelector(".text-img").style.transition = "0.4s ease-out";
        });
      },
      slideChangeTransitionStart() {
        this.slides.forEach((slide) => {
          slide.querySelector(".text-img").style.opacity = "0";
        });
      },
      slideChangeTransitionEnd() {
        this.slides.forEach((slide) => {
          slide.querySelector(".text-img").style.opacity = "1";
        });
      },
    },
  });
})();

(function initSpecialPricesSlide() {
  new Swiper("main .special-prices .slider .swiper", {
    allowTouchMove: false,
    speed: 500,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 40,
    navigation: {
      nextEl: "main .special-prices .slider .swiper-button-next",
      prevEl: "main .special-prices .slider .swiper-button-prev",
    },
  });
})();

(function initEventsSlide() {
  new Swiper("main .events .slider .swiper", {
    speed: 500,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: "main .events .swiper-button-next",
      prevEl: "main .events .swiper-button-prev",
    },
  });
})();
