/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {

    grabCursor: false,
    slidesPerView: 'auto',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


let swiperFlashDeal = new Swiper('.flash-deal__swiper', {
    grabCursor: false,
    slidesPerView: 'auto',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination_sale",
        clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
    },

});


let swiperFreshFood = new Swiper('.banner__swiper', {
    loop: true,
    grabCursor: false,
    slidesPerView: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

let swiperProductRecommend= new Swiper('.products__recommend__swiper', {
    grabCursor: false,
    slidesPerView: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

function updateCountdown() {
   
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

   
    let hours = parseInt(hoursElement.textContent);
    let minutes = parseInt(minutesElement.textContent);
    let seconds = parseInt(secondsElement.textContent);

   
    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
      if (minutes > 0) {
        minutes--;
      } else {
        minutes = 59;
        if (hours > 0) {
          hours--;
        } else {
         
          clearInterval(countdownInterval);
          alert('Countdown has ended!');
        }
      }
    }

  
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
  }


  const countdownInterval = setInterval(updateCountdown, 1000);