$(document).ready(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      dots:false,
      autoplay:true,
      autoPlayTimeout: 5000,
    });
  });
  function rollOut() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }