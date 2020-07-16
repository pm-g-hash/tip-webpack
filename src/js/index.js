import $ from "jquery";
import Swiper from './swiper.js';

window.jQuery = $;
window.$ = $;

$(function() {

	// Прикрепляем шапку
    var headerOffsetTop = $(".main-header").offset().top;

    $(window).scroll(function () {

        var winTop = $(window).scrollTop();

        if (winTop > headerOffsetTop) $(".main-header").addClass("main-header_fixed");
		else $(".main-header").removeClass("main-header_fixed");
    });

    // Меню
    if ($(window).width() < 768)
    {
        $('.menu-main-btn').click(function(){

           // $('.menu-main').css('max-height', $(window).height() - 114);

            $('.menu-main').slideToggle();
        });   
    }

    if ($(window).width() < 992)
    {
        $('.menu-main__lvl1-link_parent').click(function(e){

            e.preventDefault();

            $(this).next('.menu-main__lvl2').slideToggle();
        });
    }

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

        if (intPrev < 1) intPrev = intSlideMainCount + intPrev;
        if (intNext > intSlideMainCount) intNext = intNext - intSlideMainCount;

        $('.slider-main__count-prev').text(intPrev + ' / ' + intSlideMainCount);
        $('.slider-main__count-next').text(intNext + ' / ' + intSlideMainCount);
    });

    // Слайдер как мы работаем
    if ($(window).width() < 992)
    {
        new Swiper('.we-working__slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
            },
            pagination: {
                clickable: true,
                el: '.we-working__pagination',
                bulletClass: 'slider-pagination__point',
                bulletActiveClass: 'slider-pagination__point_active',
            },
        });
    }

    // Слайдер отзывы
    new Swiper('.review-slider__slider', {
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 1,
        spaceBetween: 75,
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        },
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
        loopAdditionalSlides: 1,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
        },
        pagination: {
            clickable: true,
            el: '.client-slider__pagination',
            bulletClass: 'slider-pagination__point',
            bulletActiveClass: 'slider-pagination__point_active',
        },
    });

    // Слайдер новостей
    let intDelete = 3;

    if ($(window).width() < 576)
    {
        intDelete = 1;
    }
    else if ($(window).width() < 992)
    {
        intDelete = 2;
    }

    let intSliderNewsCount = Math.ceil($('.news-slider__slide').length / intDelete);

    $('.news-slider__count').text('1 / ' + intSliderNewsCount);

    let sliderNews = new Swiper('.news-slider__slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        breakpoints: {
            576: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 25,
            },
        },
        navigation: {
            prevEl: '.news-slider__prev',
            nextEl: '.news-slider__next',
            disabledClass: 'str-disabled'
        },
        on: {
            imagesReady: function () {

                let intSliderNewsElemHeight = 0;

                $('.news-slider__item').each(function(){

                    if ($(this).height() > intSliderNewsElemHeight)
                    {
                        intSliderNewsElemHeight = $(this).height();
                    }
                });

                $('.news-slider__item').height(intSliderNewsElemHeight);
            },
            slideChange: function () {

                $('.news-slider__count').text(Math.ceil(sliderNews.activeIndex / intDelete + 1) + ' / ' + intSliderNewsCount);
            },
        }
    });

    // Cлайдер страница Product
    let intSlideProductCount = $('.slider-product__slide').length;

    let sliderProduct = new Swiper('.slider-product__slider', {
        loop: true,
        navigation: {
            prevEl: '.slider-product__prev',
            nextEl: '.slider-product__next',
        },
        pagination: {
            clickable: true,
            el: '.slider-product__pagination',
            bulletClass: 'slider-pagination__point',
            bulletActiveClass: 'slider-pagination__point_active',
        },
    });

    $('.slider-product__count-prev').text(intSlideProductCount + ' / ' + intSlideProductCount);
    $('.slider-product__count-next').text('2 / ' + intSlideProductCount);

    sliderProduct.on('slideChange', function () {

        let intActive = sliderProduct.activeIndex;

        if (intActive > intSlideProductCount) intActive = intActive - intSlideProductCount;
        
        let intPrev = intActive - 1;
        let intNext = intActive + 1;

        if (intPrev < 1) intPrev = intSlideProductCount + intPrev;
        if (intNext > intSlideProductCount) intNext = intNext - intSlideProductCount;

        $('.slider-product__count-prev').text(intPrev + ' / ' + intSlideProductCount);
        $('.slider-product__count-next').text(intNext + ' / ' + intSlideProductCount);
    });
});