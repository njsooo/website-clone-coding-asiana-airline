import gsap from "./gsap";

(function initBtnScrollDown() {
  const btnScrollDown = document.getElementById("btn-scroll-down");
  const sectionSpecialPrices = document.querySelector(".special-prices");

  btnScrollDown.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1.2,
      ease: "power2.easeIn",
      scrollTo: parseInt(sectionSpecialPrices.clientHeight) + 100,
    });
  });
})();

(function initRightWingScrollTrigger() {
  const elRightWing = document.getElementById("right-wing");
  const btnOpen = document.querySelector("#right-wing .quick-menu .btn-open");
  const ul = btnOpen.nextElementSibling;

  let timer;
  window.addEventListener("scroll", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (window.pageYOffset > 850) {
        elRightWing.classList.add("on");
      } else {
        elRightWing.classList.remove("on");
        btnOpen.classList.remove("on");
        ul.classList.remove("on");
      }
    }, 100);
  });
})();

(function initRightWingQuickMenu() {
  const btnOpen = document.querySelector("#right-wing .quick-menu .btn-open");
  const ul = btnOpen.nextElementSibling;

  btnOpen.addEventListener("click", () => {
    btnOpen.classList.toggle("on");
    ul.classList.toggle("on");
  });

  const quickServicesMenuBtnList = document.querySelectorAll(".quick-services > ul > li > button");
  const quickBtnList = document.querySelectorAll("#right-wing .quick-menu > ul > li > button");

  quickBtnList.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      btnOpen.classList.remove("on");
      ul.classList.remove("on");
      quickServicesMenuBtnList[i].click();
    });
  });
})();

(function initRightWingToTop() {
  document.querySelector("#right-wing .to-top").addEventListener("click", () => {
    gsap.to(window, { duration: 0.4, scrollTo: 0 });
  });
})();
