const radio = document.querySelectorAll(".radio");
const selectedRating = document.getElementById("selected-rating");
radio.forEach(item => item.addEventListener("click", selectItem));

function selectItem(e) {
    radio.forEach(item => item.classList.remove("selected-button"));
    this.classList.add("selected-button");

    const selectedNumber = this.textContent;
    selectedRating.textContent= selectedNumber;
}

document.getElementById("submit").addEventListener("click", submit);

function submit(e) {
    document.getElementById("rating").classList.add("hide");
    document.getElementById("thank-you").classList.remove("hide");
}