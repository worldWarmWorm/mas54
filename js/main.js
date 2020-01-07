$(function () {

    // $('.slider1').slick({
    //     prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
    //     nextArrow: '<button type="button" class="slick-next slick-btn"></button>'
    // });

    // $('.menu ul li').hover(
    //     function () {
    //         $(this).find('.sub-menu').fadeIn(300).css('display', 'flex');
    //         $(this).children('a.to-sub-menu').css('background-color', '#91C53C');
    //     },
    //     function () {
    //         $(this).find('.sub-menu').fadeOut(300).css('display', 'flex');
    //         $(this).children('a.to-sub-menu').css('background-color', 'transparent');
    //     }
    // );
    
    $("#my-mmenu").mmenu({
        "extensions": [
        "position-left",
        "fx-menu-slide",
        ]
    },{
        "language":"ru"
    });

});