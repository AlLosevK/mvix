new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 4,
  focusAt: 'center',
  gap: 32
}).mount();

function showNav() {
  var menuBtn = document.getElementById("menuBTN");
  var menu = document.getElementById("menuNav");
  menu.classList.add("active");
}
