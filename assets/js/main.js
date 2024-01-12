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