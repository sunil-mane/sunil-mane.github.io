
/* 
    Created on  : Jan 18, 2016, 10:44:04 AM
    Author      : Prakasam Mathaiyan
    Email       : prakasamm@virtusa.com
*/


var Redeem = function() {
    
    var handleProductImage = function() {                
        $(".img-product").each(function () {
            var attr = $(this).attr('data-imgurl');            
            $(this).css('background-image', 'url(' + attr + ')');
        });        
    };   //  Product Background
    
    var handleIsotope = function() {
        
        $('.list-wished').hide();
        var $container = $('.izotope-container');
        
        /*$container.isotope({
            filter: '*',
            animationOptions: {
                duration: 400,
                easing: 'linear',
                queue: false
            }
        }); */
        
        // list-all
        $('.list-all a').click(function () {                        
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.list-all').hide();
            $('.list-wished').show();
        });
        
        
        // list-wished
        $('.list-wished a').click(function () {                        
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.list-all').show();
            $('.list-wished').hide();
        });        

    };   //  Isotope
    
    var handleWishlist = function() {
        
        $('.list-wished').hide();
        
        // list-all
        $('.list-all a').click(function () {                        
            $('.izotope-container .col-md-3').fadeOut();
            $('.wished').fadeIn();
            
            $('.list-all').hide();
            $('.list-wished').show();
        });
        
        
        // list-wished
        $('.list-wished a').click(function () {                        
            $('.izotope-container .col-md-3').fadeIn();
            $('.list-all').show();
            $('.list-wished').hide();
        });        

    };   //  scroll to top of the page


    return {
        init: function() {

            handleProductImage();
            //handleIsotope();
            handleWishlist();
            
        }

    };
}();    // Handel Redeem Page

