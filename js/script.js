document.addEventListener('DOMContentLoaded', function() {
  const swiperOb = document.querySelector(".evenemang")
  if (swiperOb) { 
  let evenemangSlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".slider__section .slider-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".slider-btn_next",
      prevEl: ".slider-btn_prev"
    },
  
    breakpoints: {
      555: {
        slidesPerView: 1,
        grid: {
          rows: 1
        },
        spaceBetween: 20
      },
      800: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 20
      },
      
      1279: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 20
      },
      
      1439: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 20
      }
    }
  
  });
  }; 
});





