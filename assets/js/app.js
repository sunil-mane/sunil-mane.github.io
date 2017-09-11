
/* 
    Created on  : Jan 11, 2016, 11:00:04 AM
    Author      : Prakasam Mathaiyan
    Email       : prakasamm@virtusa.com
    Description : This JS file handles all the Application Level JS (*DONT EDIT)
*/


var App = function() {
    
    var handleHoverTouchDevice = function() {
        $('.image-wrapper').bind('touchstart', function(e) {
            $('.image-wrapper').removeClass('active');
            $(this).addClass('active');
        });
    };   // Hover effect on touch device
    
    var handleLayout = function() {
        
        $(".main-menu-clloapse").click(function() {
            $('.wrapper').toggleClass("no-sidebar");
        });
        
        $(".right-cllapse").click(function() {
            $('.wrapper').toggleClass("no-right-bar");;
        });
        
    };   //  Main Layout Options
    
    var handleAnimationDelay = function() {
        
        $(".animated").each(function () {
            $(this).css("animation-delay", $(this).attr("data-animation-delay"));
        });
        
    };   //  Handle Animation Delay
    
    var handleScrollToTop = function() {
        $("#scroll-to-top").click(function() {
            $("html, body").animate({scrollTop: 0}, 600);
            return false;
        });
    };   //  scroll to top of the page    

    var handelSlimScroll = function() {
        $(".scroller").each(function() {
            $(this).slimScroll({
                size: "5px",
                opacity: "0.6",
                position: $(this).attr("data-position"),
                height: $(this).attr("data-height"),
                alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
                railVisible: ($(this).attr("data-rail-visible") == "1" ? true : false),
                disableFadeOut: true
            });
        });
    };      // function to Handel Slim Scroll

    var handleSummernote = function() {
        if (!jQuery().summernote) {
            return;
        }

        $('.summernote').summernote({
            height: 150 //set editable area's height
        });
    };   // summernote Text Editor
    
    var handelTooltip = function() {
        $('.ttT').tooltip({
            placement: "top",
            animation: true
        });
        
        $('.ttB').tooltip({
            placement: "bottom",
            animation: true
        });
        
        $("[data-toggle=tooltip]").tooltip();        
    };        //  function to Handel Bootstrap Tooltip

    var handelPopovers = function() {
        $("[data-toggle=popover]").popover();
    };  //  function to Handel Bootstrap Popovers
    
    var handelSelect2 = function() {
        
        if (!jQuery().select2) {
            return;
        }
        
        $('.select2').select2({minimumResultsForSearch: -1 });
        
        $('.select2Search').select2();
    };         //  Function to handel  Sclect2

    var handleDatePickers = function() {
        if (!jQuery().datepicker) {
            return;
        }
        
        $('.date-picker').datepicker({
            autoclose: true
        });

    };  //  Function to handle Date Pickers
    
    var handleDataBgColor = function () {
        $(".dataBgColor").each(function () {
            var bg_color = $(this).attr('data-bg-color');            
            $(this).css('background-color', bg_color);
        });
    };      //  Function to handle data-bg-color
    
    var handleDataBgImage = function () {                
        
        $(".dataBgImage").each(function () {            
            var bg_image = $(this).attr('data-bg-image');            
            $(this).css('background-image', 'url(' + bg_image + ')');
        });
    };      //  Function to handle data-bg-image
    
    var handleDataColor = function () {
        $(".dataColor").each(function () {
            var color = $(this).attr('data-color');            
            $(this).css('color', color);
        });
    };      //  Function to handle data-bg-color

    return {
        init: function() {
            
            handleHoverTouchDevice();            
            handleLayout();
            handleAnimationDelay();
            handleScrollToTop();

            handelSlimScroll();            
            handleSummernote();
            handelTooltip();
            handelPopovers();  
            
            handelSelect2();
            handleDatePickers();            
            handleDataBgColor();
            handleDataBgImage();
            
            handleDataColor();

        }

    };
}();    // Handel Application

$(window).scroll(function() {

    var position = $(window).scrollTop();

    //Display a scroll to top button
    if (position >= 200) {
        $('#scroll-to-top').attr('style', 'bottom:0px;');
    }
    else {
        $('#scroll-to-top').removeAttr('style');
    }
});

