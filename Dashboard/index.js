function handleSidebarButtonClick() {
  document
    .querySelector(".sidebar-menu")
    .classList.toggle("sidebar-menu-active")
  document
    .querySelector(".sidebar-filter")
    .classList.toggle("sidebar-filter-hidden")
}
function handleDropdownClick(dropdownClass) {
  document.querySelector(`.${dropdownClass}`).classList.toggle("dropdown-open")
}
let currentItem = { sport: "soccer", id: 4 }
function handleDropdownItemClick(itemSport, itemId) {
  document
    .querySelectorAll(`.${currentItem.sport}-league`)
    [currentItem.id - 1].classList.remove("selected-item")
  document
    .querySelectorAll(`.${itemSport}-league`)
    [itemId - 1].classList.add("selected-item")
  currentItem.sport = itemSport
  currentItem.id = itemId
  document.querySelector(".selected-sport").innerHTML = currentItem.sport
  document.querySelector(".selected-league").innerHTML =
    document.querySelectorAll(`.${currentItem.sport}-league`)[
      currentItem.id - 1
    ].innerHTML
  handleSidebarButtonClick()
}
