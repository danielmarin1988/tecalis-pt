$('.js-show-menu').click(function() {
    $('.header ul').addClass('show');
    $('body').addClass('u-overflow-hidden');
});

$('.js-close-menu').click(function() {
    $('.header ul').removeClass('show');
    $('body').removeClass('u-overflow-hidden');
}); 