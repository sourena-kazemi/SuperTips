function handleDropdownClick(dropdownClass) {
  document.querySelector(`.${dropdownClass}`).classList.toggle("dropdown-open")
}

let reviews = document.querySelectorAll(".review")
let reviewSelectorButtons = document.querySelectorAll(".selector-button")
function handleReviewSelectorClick(reviewId) {
  reviews.forEach((review, index) => {
    if (index + 1 === reviewId) {
      review.classList.remove("review-hide")
      reviewSelectorButtons[index].classList.add("selector-button-active")
    } else {
      review.classList.add("review-hide")
      reviewSelectorButtons[index].classList.remove("selector-button-active")
    }
  })
}
