$(document).ready(function () {
 /************ owl carousel *************/
 $(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
   0: {
    items: 1,
   },
  },
  rtl: true,
 });

 /************ jQuery validation *************/
 $("#contactForm").validate();
});
