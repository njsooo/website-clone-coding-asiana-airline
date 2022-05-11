/*
  The reason import main sldie swiper is that
  the old version does not update ifself when body overflow hidden.
*/
import mainSlideSwiper from "./main_slide";

initScrollDown();
initNavModalMode();
initChangeTripTypeMode();
initDropdownInterestRoute();
initModalCoupon();

function initScrollDown() {
  const $articleQuickService = $("#quick-service");
  const $header = $("#header");
  const $btnScrollDown = $("#quick-service .container .btn-scroll-down");

  $btnScrollDown.on("click", () => {
    const scrollTop = $articleQuickService.next().offset().top - $header.outerHeight() - 10;
    $("html, body").animate({ scrollTop: scrollTop }, 600, "linear");
  });
}

function initNavModalMode() {
  const $window = $(window);
  const $body = $(document.body);

  const $nav = $("#quick-service .container .nav");
  const $navLiList = $("#quick-service .container .nav > li");
  const $btnCloseModalMode = $("#quick-service .container > .btn-close-modal-mode");

  $navLiList.each((i, li) => {
    const $li = $(li);

    $li.find(".btn-activate-modal-mode").on("click", () => {
      closeOpenedDropdown();
      $btnCloseModalMode.css({ display: "block" });
      $navLiList.removeClass("on");
      $li.addClass("on");
      $nav.addClass("on");
      $nav.css({ zIndex: 1000 });
      $body.addClass("quick-service-nav-on");
      mainSlideSwiper.update();
      if ($window.scrollTop() !== 0) {
        $("html, body").animate({ scrollTop: 0 });
      }

      $nav.on("transitionend", () => {
        $nav.off("transitionend");
        window.onclick = (e) => {
          if ($nav.hasClass("on") && $(e.target).closest($nav).length === 0) {
            window.onclick = null;
            $btnCloseModalMode.css({ display: "" });
            $nav.removeClass("on");
            $body.removeClass("quick-service-nav-on");
            $navLiList.removeClass("on");
            $navLiList.eq(0).addClass("on");
            $nav.on("transitionend", () => {
              $nav.css({ zIndex: "" });
              $nav.off("transitionend");
            });
          }
        };
      });
    });
  });

  const $liSelectLanguage = $("#header .util .right .select-language");

  const $liSearch = $("#header .main .actions .search");
  const $dropdownSearch = $("#header .main .actions .search .dropdown");

  function closeOpenedDropdown() {
    if ($liSelectLanguage.hasClass("on")) {
      $liSelectLanguage.removeClass("on");
    }
    if ($liSearch.hasClass("on")) {
      $liSearch.removeClass("on");
      $dropdownSearch.css({ display: "none" });
    }
  }
}

function initChangeTripTypeMode() {
  const $liList = $(
    "#quick-service .container .nav .flight-booking .contents .container .condition .trip-type > li"
  );

  $liList.each((i, li) => {
    const $li = $(li);

    $li.on("click", () => {
      $liList.removeClass("on");
      $li.addClass("on");
    });
  });
}

function initDropdownInterestRoute() {
  const $divInterestRoute = $(
    "#quick-service .container .nav .flight-booking .contents .container .condition .interest-route"
  );

  const $btnClose = $divInterestRoute.find(".dropdown .btn-close");

  $divInterestRoute.find("> button").on("click", () => {
    $divInterestRoute.toggleClass("on");
  });

  $btnClose.on("click", () => {
    $divInterestRoute.removeClass("on");
  });
}

function initModalCoupon() {
  const $modalCoupon = $("#modal-coupon");
  const $btnOpenModal = $(
    "#quick-service .container .nav .flight-booking .contents .container .condition .btn-open-modal-coupon"
  );
  const $btnCloseList = $("#modal-coupon .btn-close");

  $btnOpenModal.on("click", () => {
    $modalCoupon.addClass("on");
  });

  $btnCloseList.each((i, btnClose) => {
    $(btnClose).on("click", () => {
      $modalCoupon.removeClass("on");
    });
  });
}
