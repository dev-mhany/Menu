$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  stagePadding: 50,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 7,
    },
  },
});
