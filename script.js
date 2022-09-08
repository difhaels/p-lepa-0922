const openButton1 = document.getElementById("project1");
const dialog1 = document.getElementById("dialog1");
const closeButton1 = document.getElementById("close1");
const overlay1 = document.getElementById("overlay1");

// show the overlay and the dialog
openButton1.addEventListener("click", function () {
  dialog1.classList.remove("hidden");
  overlay1.classList.remove("hidden");
});

// hide the overlay and the dialog
closeButton1.addEventListener("click", function () {
  dialog1.classList.add("hidden");
  overlay1.classList.add("hidden");
});
const openButton2 = document.getElementById("project2");
const dialog2 = document.getElementById("dialog2");
const closeButton2 = document.getElementById("close2");
const overlay2 = document.getElementById("overlay2");

// show the overlay and the dialog
openButton2.addEventListener("click", function () {
  dialog2.classList.remove("hidden");
  overlay2.classList.remove("hidden");
});

// hide the overlay and the dialog
closeButton2.addEventListener("click", function () {
  dialog2.classList.add("hidden");
  overlay2.classList.add("hidden");
});
