$('[name="phone"]').mask('+7 (999) 999-99-99');

// slick 
$('.brand-slider').slick({
  slidesToShow: 1,
  fade: true,
  dots: true,
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>'
});


// Fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});