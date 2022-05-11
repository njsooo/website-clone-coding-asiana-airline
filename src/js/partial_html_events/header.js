import "jquery-ui/ui/effect";

initDropdownSelectLanguage();
initDropdownSearch();
initSlidingUnderline();
initAnimationMegaMenuContent();

function initDropdownSelectLanguage() {
  const $liSelectLanguage = $("#header .util .select-language");
  const $btnToggleDropdownSelectLanguage = $("#header .util .select-language > a");
  const $btnCloseDropdownSelectLanguage = $("#header .select-language .dropdown .btn-close");

  $btnToggleDropdownSelectLanguage.on("click", () => {
    $liSelectLanguage.toggleClass("on");
  });

  $btnCloseDropdownSelectLanguage.on("click", () => {
    $liSelectLanguage.removeClass("on");
  });
}

function initDropdownSearch() {
  const $liSearch = $("#header .main .actions .search");
  const $dropdownSearchContent = $("#header .main .actions .search .dropdown");
  const $btnToggleDropdownSearch = $("#header .main .actions .search > a");
  const $btnCloseDropdownSearch = $("#header .main .actions .search .dropdown .btn-close");
  const $btnSubmit = $("#header .main .actions .search .dropdown form .btn-submit");
  const $input = $("#header .main .actions .search .dropdown form input");

  $btnToggleDropdownSearch.on("click", () => {
    $liSearch.toggleClass("on");
    $dropdownSearchContent.slideToggle({
      duration: 300,
      easing: "easeOutQuad",
      complete() {
        if ($liSearch.hasClass("on")) {
          setTimeout(() => {
            $input.get(0).focus();
          }, 150);
        }
      },
    });
  });

  $btnCloseDropdownSearch.on("click", () => {
    $liSearch.removeClass("on");
    $dropdownSearchContent.slideUp({
      duration: 300,
      easing: "easeOutQuad",
    });
  });

  $input.on("input", () => {
    if ($input.val().length > 0) {
      $btnSubmit.addClass("red");
    } else {
      $btnSubmit.removeClass("red");
    }
  });
}

function initSlidingUnderline() {
  const $nav = $("#header .main nav");
  const $menuList = $("#header .main nav > ul > li");
  const $slidingUnderline = $("#header .main nav .sliding-underline");
  const slidingUnderlineWidth = $slidingUnderline.width();

  $menuList.on("mouseover", (e) => {
    const target = $(e.originalEvent.target).closest($menuList);
    const offset = (target.width() - slidingUnderlineWidth) / 2;

    $slidingUnderline.css({
      visibility: "visible",
      transform: `translateX(${target.offset().left - $nav.offset().left + offset}px)`,
    });
  });

  $menuList.on("mouseout", () => {
    $slidingUnderline.css({ visibility: "" });
  });
}

function initAnimationMegaMenuContent() {
  const $menuLiList = $("#header .main nav > ul > li");
  const $menuAList = $("#header .main nav > ul > li > a");
  const $contentList = $("#header .main nav > ul > li .mega-menu-content");
  const $contentBg = $("#header .main .mega-menu-content-bg");

  $menuAList.each((i, a) => {
    $(a).on("mouseover", () => {
      const $targetContent = $contentList.eq(i);
      const height = $targetContent.find("> .container").outerHeight();

      $targetContent.css({ visibility: "visible" });

      $contentBg.css({ height, transition: "0.3s height cubic-bezier(0.1, 1, 1, 1)" });
      $contentList.css({
        maxHeight: height,
        transition: "0.3s max-height cubic-bezier(0.1, 1, 1, 1)",
      });
    });
  });

  $menuLiList.each((i, li) => {
    const $targetContent = $contentList.eq(i);

    $(li).on("mouseleave", (e) => {
      for (let i = 0; i < $menuAList.length; i++) {
        if ($menuAList[i] === e.originalEvent.relatedTarget) {
          $targetContent.css({ visibility: "" });
          return;
        }
      }

      $contentBg.css({ height: "", transition: "" });
      $contentList.css({ maxHeight: "", visibility: "", transition: "" });
    });
  });
}
