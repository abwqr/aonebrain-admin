(function($) {
    "use strict";

    /*---------------------------------------
    On Click Section Switch
    --------------------------------------- */
    $('[data-type="section-switch"]').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length > 0) {

                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    /*-------------------------------------
    On Scroll 
    -------------------------------------*/
    $(window).on('scroll', function() {

        // Back Top Button
        if ($(window).scrollTop() > 700) {
            $('.scrollUp').addClass('back-top');
        } else {
            $('.scrollUp').removeClass('back-top');
        }
    });

    $(window).on('load', function() {
        // Onepage Nav on meanmenu
        $('.navOnePage').onePageNav({
            scrollOffset: 80,
            end: function() {
                $('.meanclose').trigger('click');
            }
        });
    });

    $('.left-menu').meanmenu({
        meanMenuContainer: '#meanmenu',
        meanScreenWidth: "767",
        siteLogo: '<div class="meanheader">Menu</div>'
    });

    $("#wrapper .col-left").mCustomScrollbar({
        theme:"dark"
    });
    
    
})(jQuery);