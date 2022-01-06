import initClickDropdown from "./dropdown";
import gsap from "./gsap";

initClickDropdown({
  btnDropdown: ".quick-services .flight-booking .interest-route > button",
  dropdownContent: ".quick-services .flight-booking .interest-route .dropdown-content",
  btnClose: ".quick-services .flight-booking .interest-route .dropdown-content .btn-close-x",
});

(function initQuickServices() {
  function activateQuickServicesModal() {
    quickServices.classList.add("on");
    document.body.classList.add("quick-service-on");
    gsap.to(window, { duration: 0.4, scrollTo: 0 });
    btnClose.style.display = "block";
  }

  function deactivateQuickServicesModal() {
    btnClose.style.display = null;
    quickServices.classList.remove("on");
    document.body.classList.remove("quick-service-on");
    currentBtn.classList.remove("on");
    currentBtn.nextElementSibling.style.display = null;
    btnMenuList[0].classList.add("on");
    btnMenuList[0].nextElementSibling.style.display = "block";
    currentBtn = btnMenuList[0];
  }

  const quickServices = document.querySelector(".quick-services");
  const btnMenuList = document.querySelectorAll(".quick-services > ul > li > button");
  const btnClose = document.querySelector(".quick-services > .btn-modal-close");
  let currentBtn;

  currentBtn = btnMenuList[0];
  currentBtn.classList.add("on");
  currentBtn.nextElementSibling.style.display = "block";

  btnMenuList.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentBtn.classList.remove("on");
      currentBtn.nextElementSibling.style.display = null;

      currentBtn = btn;
      currentBtn.classList.add("on");
      currentBtn.nextElementSibling.style.display = "block";
      activateQuickServicesModal();
    });
  });

  btnClose.addEventListener("click", () => {
    deactivateQuickServicesModal();
  });

  window.addEventListener("click", (e) => {
    if (e.target === document.body && document.body.classList.contains("quick-service-on")) {
      deactivateQuickServicesModal();
    }
  });
})();

(function initCouponModal() {
  const btnOpen = document.querySelector(".quick-services > ul > li.flight-booking > div > div > div.coupon > button");
  const modal = document.querySelector("#modal-coupon");
  const btnClose = modal.querySelector(".btn-close-x");
  const btnCloseX = modal.querySelector(".btn-close");

  btnOpen.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.classList.add("modal-on");
  });

  btnClose.addEventListener("click", () => {
    modal.style.display = null;
    document.body.classList.remove("modal-on");
  });

  btnCloseX.addEventListener("click", () => {
    modal.style.display = null;
    document.body.classList.remove("modal-on");
  });
})();
