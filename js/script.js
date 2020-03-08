var link = document.querySelector(".find-hotel");
var popup = document.querySelector(".form-hotels");
var close = document.querySelector(".form-map");
var form = popup.querySelector(".serch-form");
var dateArrival = popup.querySelector("[name=date-arrival]");
var dateDeparture = popup.querySelector("[name=date-departure]");



link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-remove");
  dateArrival.focus();
});

close.addEventListener("click", function (evt) {
  if (!popup.classList.contains(".form-remove")) {
     popup.classList.add(".form-remove");
  }
});

// popup.addEventListener("submit", function (evt) {
//   evt.preventDefault();
// });






