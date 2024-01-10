/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',

    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
});


let swiperFlashDeal = new Swiper('.flash-deal__swiper', {
    loop: true,
    grabCursor: false,
    slidesPerView: 5,

});


let swiperFreshFood = new Swiper('.banner__swiper', {
    loop: true,
    grabCursor: false,
    slidesPerView: 1,

});

let swiperProductRecommend= new Swiper('.products__recommend__swiper', {
    loop: true,
    grabCursor: false,
    slidesPerView: 1,

});