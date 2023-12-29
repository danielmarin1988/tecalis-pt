$(document).ready(function () {
    $('.content2, .content3').hide();

    $('.tab1, .tab2, .tab3').click(function () {
        var tabIndex = $(this).attr('class').replace('tab', '');

        if (!$('.content' + tabIndex).is(':visible')) {
            $('.content1, .content2, .content3').hide();
            $('.tab1, .tab2, .tab3').removeClass('selected');

            $('.content' + tabIndex).show();
            $(this).addClass('selected');
        } else {
            $('.content' + tabIndex).hide();
            $(this).removeClass('selected');
        }
    });

    $('.content1').show();
    $('.tab1').addClass('selected');

    $('.js-tab-show-1, .js-tab-show-2, .js-tab-show-3').on('click', function () {
        var index = $(this).attr('class').replace('js-tab-show-', '');

        $('.js-tab-show-1, .js-tab-show-2, .js-tab-show-3').removeClass('selected');

        $(this).addClass('selected');

        $('.content1, .content2, .content3').hide();
        $('.tab1, .tab2, .tab3').removeClass('selected');

        $('.content' + index).show();
        $('.tab' + index).addClass('selected');
    });
});

