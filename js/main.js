var mySwiper = new Swiper('.swiper-container', {
   // Optional parameters
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   autoHeight: true,
   autoplay: {
      delay: 10000,
      stopOnLastSlide: true,
      disableOnInteraction: false
   },
   speed: 2000,
})