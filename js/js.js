
/*$(document).ready(function () {
    $('nav ul li> a').on('click',function () {
        var x = $(this).data('list');
        $('html,body').animate({
                scrollTop: $("."+x).offset().top
            },
            500);
    })
});*/

$ (".nav-icon").on('click', function () {

    if($('nav').hasClass('menu-open')){
        $('nav').removeClass('menu-open')
    }else{
        $('nav').addClass('menu-open')
    }
});