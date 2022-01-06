export default function initClickDropdown(selector, options) {
  const btnDropdown = document.querySelector(`${selector.btnDropdown}`);
  const dropdownContent = document.querySelector(`${selector.dropdownContent}`);
  const btnClose = document.querySelector(`${selector.btnClose}`);

  if (options == null) {
    options = {
      className: "on",
    };
  }

  btnDropdown.addEventListener("click", () => {
    if (dropdownContent.style.display) {
      dropdownContent.style.display = null;
      btnDropdown.classList.remove(`${options.className}`);
    } else {
      btnDropdown.classList.add(`${options.className}`);
      dropdownContent.style.display = "block";
    }
  });

  btnClose.addEventListener("click", () => {
    dropdownContent.style.display = null;
    btnDropdown.classList.remove(`${options.className}`);
  });
}
