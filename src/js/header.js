const megMenuList = document.querySelectorAll("header li.mega-menu");

(function initNav() {
  const megaMenuContentBg = document.querySelector(".mega-menu-content-bg");
  const megaMenuContentList = document.querySelectorAll("header li.mega-menu div.mega-menu-content");

  megMenuList.forEach((megaMenu, i) => {
    const currentMegaMenuContent = megaMenuContentList[i];

    megaMenu.addEventListener("mouseover", () => {
      megaMenuContentBg.style.transition = "height 0.3s cubic-bezier(0, 1, 1, 1)";
      currentMegaMenuContent.style.transition = "max-height 0.3s cubic-bezier(0, 1, 1, 1)";

      megaMenuContentList.forEach((megaMenuContent) => {
        if (megaMenuContent === currentMegaMenuContent) {
          megaMenuContent.style.visibility = "visible";
        }
        megaMenuContent.style.maxHeight = `${currentMegaMenuContent.scrollHeight}px`;
      });

      megaMenuContentBg.style.height = `${currentMegaMenuContent.scrollHeight}px`;
    });

    megaMenu.addEventListener("mouseleave", () => {
      megaMenuContentBg.style.transition = null;
      currentMegaMenuContent.style.transition = null;

      megaMenuContentList.forEach((megaMenuContent) => {
        megaMenuContent.style.maxHeight = null;
      });
      currentMegaMenuContent.style.visibility = null;

      megaMenuContentBg.style.height = null;
    });
  });
})();

(function initSlidingUnderline() {
  const slidingUnderline = document.querySelector("header .container .sliding-underline");
  const slidingUnderlineWidth = parseInt(window.getComputedStyle(slidingUnderline).width);
  let offset = 0;

  megMenuList.forEach((megaMenu) => {
    megaMenu.addEventListener("mouseover", () => {
      slidingUnderline.style.display = "block";

      const navXInScreen = document.querySelector("nav").getBoundingClientRect().x;
      const rect = megaMenu.getBoundingClientRect();

      if (rect.width > slidingUnderlineWidth) {
        offset = (rect.width - slidingUnderlineWidth) / 2;
      } else {
        offset = 0;
      }

      slidingUnderline.style.left = `${rect.x - navXInScreen + offset}px`;
    });

    megaMenu.addEventListener("mouseleave", () => {
      slidingUnderline.style.display = null;
    });
  });
})();

(function initDropdownSearch() {
  const btnDropdown = document.querySelector("header .util .search > a");
  const dropdownContent = document.querySelector("header .util .search .dropdown-content");
  const inputText = dropdownContent.querySelector("input[type='text']");
  const btnSubmit = dropdownContent.querySelector(".btn-submit");

  btnDropdown.addEventListener("click", () => {
    if (dropdownContent.style.maxHeight) {
      btnDropdown.classList.remove("on");
      dropdownContent.style.maxHeight = null;
    } else {
      btnDropdown.classList.add("on");
      dropdownContent.style.maxHeight = `${dropdownContent.scrollHeight}px`;
    }
  });

  dropdownContent.querySelector(".btn-close-x").addEventListener("click", () => {
    btnDropdown.classList.remove("on");
    dropdownContent.style.maxHeight = null;
  });

  dropdownContent.addEventListener("transitionend", () => {
    if (dropdownContent.clientHeight != 0) {
      setTimeout(() => {
        inputText.focus();
      }, 230);
    }
  });

  inputText.addEventListener("keyup", () => {
    if (inputText.value.length > 0) {
      btnSubmit.classList.add("on");
    } else {
      btnSubmit.classList.remove("on");
    }
  });
})();
