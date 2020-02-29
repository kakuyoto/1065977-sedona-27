var link = document.querySelector(".find-hotel");
var popup = document.querySelector(".form-hotels");
// var form = popup.querySelector("form");
// var dateArrival = popup.querySelector("[name=date-arrival]");
// var dateDeparture = popup.querySelector("[name=date-departure]");
// var adults = popup.querySelector("[name=quantity-adults]");
// var childrens = popup.querySelector("[name=quantity-children]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-show");
  // dateArrival.focus();
});

// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();
// });

// form.addEventListener("submit", function (evt) {
//   if (!dateArrival.value || !dateDeparture.value || !adults.value || !childrens.value) {
//     evt.preventDefault();
//   }
// });

// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     evt.preventDefault();
//     if (popup.classList.contains("form-show")) {
//       popup.classList.remove("form-show");
//     }
//   }
// });
