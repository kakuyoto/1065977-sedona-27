var link = document.querySelector(".find-hotel");
var popup = document.querySelector(".form-hotels");

var dateArrival = popup.querySelector("[name=date-arrival]");
var dateDeparture = popup.querySelector("[name=date-departure]");
var adults = popup.querySelector("[name=quantity-adults]");
var childrens = popup.querySelector("[name=quantity-children]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-remove");
  dateArrival.focus();
});

popup.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

popup.addEventListener("submit", function (evt) {
  if (!dateArrival.value || !dateDeparture.value || !adults.value || !childrens.value) {
    evt.preventDefault();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (link.classList.contains("form-hotels")) {
      link.classList.remove("form-hotels");
    }
  }
});



