$(window).scroll(function() {
    var scrollPosition = $(this).scrollTop();

    if (scrollPosition >= 70) {
        $('.header__content').addClass('fill');
    } else {
        $('.header__content').removeClass('fill');
    }
});