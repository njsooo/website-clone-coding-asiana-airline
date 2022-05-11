import { Swiper, Navigation, Pagination, Autoplay, Lazy, A11y } from "swiper/dist/js/swiper.esm.js";
Swiper.use([Navigation, Pagination, Autoplay, Lazy, A11y]);

const swiper = new Swiper("#main-slide .swiper-container", {
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  lazy: {
    loadPrevNext: true,
  },
  a11y: {
    prevSlideMessage: "이전 이미지",
    nextSlideMessage: "다음 이미지",
  },
  pagination: {
    el: "#main-slide .swiper-container .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: "#main-slide .swiper-container .swiper-button-prev",
    nextEl: "#main-slide .swiper-container .swiper-button-next",
  },
  on: {
    init() {
      const $firstTextImg = $("#main-slide .swiper-container .swiper-slide-active .text-img");
      $firstTextImg.css({ opacity: 1, transition: "none" });
      setTimeout(() => {
        $firstTextImg.css({ transition: "" });
      }, 0);

      /*
        The reason for applying opacity to whole rather than necessary parts is
        hard to control duplicate slide
      */
      const $textImgList = $(this.slides).find(".text-img");

      this.on("slideChangeTransitionStart", () => {
        $textImgList.css({ opacity: "" });
      });
      this.on("slideChangeTransitionEnd", () => {
        $textImgList.css({ opacity: "1" });
      });
    },
  },
});

/*
  https://github.com/nolimits4web/swiper/issues/3234

  In this old version,
  initialization of navigation and pagination don't part of the Swiper initialization.
*/

const $btnTogglePlay = $("#main-slide .swiper-container .btn-toggle-play");

initBtnTogglePlay();
initSwiperNavigationEvent();
initSwiperPaginationEvent();

function initBtnTogglePlay() {
  $btnTogglePlay.on("click", () => {
    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      changePlayIcon();
    } else {
      swiper.autoplay.start();
      changePauseIcon();
    }
  });
}

function initSwiperNavigationEvent() {
  $(swiper.navigation.$prevEl).on("click", () => {
    changePlayIcon();
  });
  $(swiper.navigation.$nextEl).on("click", () => {
    changePlayIcon();
  });
}

function initSwiperPaginationEvent() {
  $(swiper.pagination.bullets).on("click", () => {
    changePlayIcon();
  });
}

function changePlayIcon() {
  $btnTogglePlay.removeClass("icon-pause");
  $btnTogglePlay.addClass("icon-play");
}

function changePauseIcon() {
  $btnTogglePlay.removeClass("icon-play");
  $btnTogglePlay.addClass("icon-pause");
}

/*
  The reason export main slide swiper is that
  the old version does not update ifself when body overflow hidden.
*/
export default swiper;
