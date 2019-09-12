$( document ).ready(function() {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    function makeMeTwoDigits(n){
        return (n < 10 ? "0" : "") + n;
    }

    let countDown = new Date('Sep 20, 2019 00:00:00').getTime(),
    x = setInterval(function() {
        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = makeMeTwoDigits(Math.floor(distance / (day))),
        document.getElementById('hours').innerText = makeMeTwoDigits(Math.floor((distance % (day)) / (hour))),
        document.getElementById('minutes').innerText = makeMeTwoDigits(Math.floor((distance % (hour)) / (minute))),
        document.getElementById('seconds').innerText = makeMeTwoDigits(Math.floor((distance % (minute)) / second));
    }, second)

    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav',
        prevArrow: '<div class="left"><span class="fa fa-angle-left"></span></div>',
        nextArrow: '<div class="right"><span class="fa fa-angle-right"></span></div>'
    });
    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-single',
        prevArrow: '<div class="left"><span class="fas fa-sort-up"></span></div>',
        nextArrow: '<div class="right"><span class="fas fa-sort-up"></span></div>',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 370,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
});