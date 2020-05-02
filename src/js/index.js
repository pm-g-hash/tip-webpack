import $ from "jquery";
import Swiper from './swiper.js';

$(function() {

    // Главный слайдер
    let intSlideMainCount = $('.slider-main__slide').length;

    let sliderMain = new Swiper('.slider-main__slider', {
        loop: true,
        navigation: {
            prevEl: '.slider-main__prev',
            nextEl: '.slider-main__next',
        },
        pagination: {
            clickable: true,
            el: '.slider-main__pagination',
            bulletClass: 'slider-pagination__point',
            bulletActiveClass: 'slider-pagination__point_active',
        },
    });

    $('.slider-main__count-prev').text(intSlideMainCount + ' / ' + intSlideMainCount);
    $('.slider-main__count-next').text('2 / ' + intSlideMainCount);

    sliderMain.on('slideChange', function () {

        let intActive = sliderMain.activeIndex;

        if (intActive > intSlideMainCount) intActive = intActive - intSlideMainCount;
        
        let intPrev = intActive - 1;
        let intNext = intActive + 1;

        console.log(intActive + ';' + intPrev);

        if (intPrev < 1) intPrev = intSlideMainCount + intPrev;
        if (intNext > intSlideMainCount) intNext = intNext - intSlideMainCount;

        $('.slider-main__count-prev').text(intPrev + ' / ' + intSlideMainCount);
        $('.slider-main__count-next').text(intNext + ' / ' + intSlideMainCount);
    });

    // Слайдер отзывы
    new Swiper('.review-slider__slider', {
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 2,
        spaceBetween: 40,
        navigation: {
            prevEl: '.review-slider__prev',
            nextEl: '.review-slider__next',
        },
        pagination: {
            clickable: true,
            el: '.review-slider__pagination',
            bulletClass: 'slider-pagination__point',
            bulletActiveClass: 'slider-pagination__point_active',
        },
    });

    // Слайдер клиенты
    new Swiper('.client-slider__slider', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 10,
        pagination: {
            clickable: true,
            el: '.client-slider__pagination',
            bulletClass: 'slider-pagination__point',
            bulletActiveClass: 'slider-pagination__point_active',
        },
    });

    // Слайдер новостей
    let intSliderNewsCount = $('.news-slider__slide').length / 3;

    let sliderNews = new Swiper('.news-slider__slider', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 25,
        navigation: {
            prevEl: '.news-slider__prev',
            nextEl: '.news-slider__next',
            disabledClass: 'str-disabled'
        },
    });

    $('.news-slider__count').text('1 / ' + intSliderNewsCount);

    sliderNews.on('slideChange', function () {

        $('.news-slider__count').text((sliderNews.activeIndex / 3 + 1) + ' / ' + intSliderNewsCount);
    });

//    let intSliderNewsElemHeight = 0;
//
//    $('.news-slider__item').each(function(){
//
//        if ($(this).height() > intSliderNewsElemHeight)
//        {
//            intSliderNewsElemHeight = $(this).height();
//        }
//    });
//
//    $('.news-slider__item').height(intSliderNewsElemHeight);
});