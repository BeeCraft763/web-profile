var swiper = new Swiper(".mySwiper", {
   breakpoints: {
         0: {
            slidesPerView: 1
         },
         620: {
            slidesPerView: 2 
         },
         1024: {
            slidesPerView: 3
         }
      },
      spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
     
  },
  });
  