import "jquery-ui/ui/effect";

const $quickMenu = $("#right-wing .quick-menu");

initToggleVisibleRightWing();
initBtnToggleMenu();
initBtnClickQuickServiceNav();
initBtnToTop();

function initToggleVisibleRightWing() {
  const $window = $(window);
  const $rightWing = $("#right-wing");
  const triggerOffsetTop = $("#special-price").offset().top - $("#header").outerHeight();

  $window.on("scroll", () => {
    if ($window.scrollTop() >= triggerOffsetTop) {
      $rightWing.addClass("on");
    } else {
      $rightWing.removeClass("on");
      if ($quickMenu.hasClass("on")) {
        $quickMenu.removeClass("on");
      }
    }
  });
}

function initBtnToggleMenu() {
  const $btnToggleMenu = $("#right-wing .quick-menu .btn-toggle-menu");

  $btnToggleMenu.on("click", () => {
    $quickMenu.toggleClass("on");

    if ($quickMenu.hasClass("on")) {
      $btnToggleMenu.attr("title", "퀵메뉴 닫기");
      $btnToggleMenu.attr("aria-label", "퀵메뉴 닫기");
    } else {
      $btnToggleMenu.attr("title", "퀵메뉴 열기");
      $btnToggleMenu.attr("aria-label", "퀵메뉴 열기");
    }
  });
}

function initBtnClickQuickServiceNav() {
  const $btnListInRightWing = $("#right-wing .quick-menu ul li button");
  const $btnListInQuickServiceNav = $(
    "#quick-service .container .nav > li > .btn-activate-modal-mode"
  );

  $btnListInRightWing.each((i, btn) => {
    $(btn).on("click", () => {
      $btnListInQuickServiceNav[i].click();
    });
  });
}

function initBtnToTop() {
  const $btnToTop = $("#right-wing .btn-to-top");

  $btnToTop.on("click", () => {
    $("html, body").animate({ scrollTop: 0 }, 400, "easeInOutQuad");
  });
}
