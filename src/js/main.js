new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 4,
  perTouch: 1,
  autoplay: 2000,
  breakpoints: {
    768: {
      perView: 2
    },
    600: {
      perView: 1,
      focusAt: 'center',
      perTouch: 1
    }
  },
  focusAt: 'center',
  gap: 32
}).mount();


var menuBTN = document.getElementById('menuBTN');
var menu = document.getElementById('menuNav'); // or whatever triggers the toggle

menuBTN.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('active'); // or whatever your active class is
});
