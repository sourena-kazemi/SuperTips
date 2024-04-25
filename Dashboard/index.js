function handleChangeFilterButtonClick() {
  document
    .querySelector(".sidebar-menu")
    .classList.toggle("sidebar-menu-active")
}
function handleDropdownClick(dropdownClass) {
  document.querySelector(`.${dropdownClass}`).classList.toggle("dropdown-open")
}
