"use strict";
jQuery(document).ready(function ($) {

    $('#about').css('display', 'none');
    $('#why_us').css('display', 'none');
    $('#services').css('display', 'none');
    $('#portfolio').css('display', 'none');
    $('#contact_form').css('display', 'none');
    $('footer').css('display', 'none');

//==========================================
// MOBAILE MENU
//=========================================

    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 0)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });


//==========================================
//ScrollUp
//=========================================

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#scrollUp').fadeIn('slow');
        } else {
            $('#scrollUp]').fadeOut('slow');
        }
    });

    $('#scrollUp').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });



//==========================================
// For fancybox active
//=========================================

    $('.fancybox').fancybox();
    
    

//==========================================
// Loading
//=========================================

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });

//==========================================
// Nav
//=========================================

$('#nav-about').click(function(){
    $('#about').fadeIn(500);
    $('#home').css('display', 'none');
    $('#why_us').css('display', 'none');
    $('#services').css('display', 'none');
    $('#portfolio').css('display', 'none');
    $('#contact_form').css('display', 'none');
    $('footer').css('display', 'none');

})

$('#nav-services').click(function(){
    $('#why_us').fadeIn(500);
    $('#services').fadeIn(500);
    $('#home').css('display', 'none');
    $('#about').css('display', 'none');
    $('#portfolio').css('display', 'none');
    $('#contact_form').css('display', 'none');
    $('footer').css('display', 'none');

})

$('#nav-portfolio').click(function(){
    $('#portfolio').fadeIn(500);
    $('#home').css('display', 'none');
    $('#about').css('display', 'none');
    $('#why_us').css('display', 'none');
    $('#services').css('display', 'none');
    $('#contact_form').css('display', 'none');
    $('footer').css('display', 'none');

})

$('#nav-contact-form').click(function(){
    $('#contact_form').fadeIn(500);
    $('footer').fadeIn(500);
    $('#home').css('display', 'none');
    $('#about').css('display', 'none');
    $('#why_us').css('display', 'none');
    $('#services').css('display', 'none');
    $('#portfolio').css('display', 'none');

})

});