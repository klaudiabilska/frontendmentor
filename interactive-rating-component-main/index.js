const mainContainer = document.querySelector(".content-one")
const thanksContainer = document.querySelector(".content-two")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating-number")
const rates = document.querySelectorAll(".rating-btn")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display ="none"
})

rates.forEach((rate) => {
   rate.addEventListener ("click", () => {
    rating.innerHTML = rate.innerHTML
   })
})