var link = document.querySelector(".find-hotel");
var popup = document.querySelector(".form-hotels");
var dateArrival = popup.querySelector("[name=date-arrival]");
var inputs = popup.querySelectorAll("input[type=text]");
var btnSubmit = popup.querySelector(".search-button");



link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-remove");
  dateArrival.focus();
});

if (typeof(btnSubmit) != "undefined" && btnSubmit !== null) {
  var counter = 0;
  btnSubmit.addEventListener("click", function(evt) {
    if (counter === inputs.length) {
        if (popup.classList.contains("submit-error")) {
        popup.classList.remove("submit-error");
      }
      } else {
          evt.preventDefault();
          popup.classList.add("submit-error");
      }
  });
}








