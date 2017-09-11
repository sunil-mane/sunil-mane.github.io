
/* 
    Created on  : Jan 18, 2016, 10:44:04 AM
    Author      : Prakasam Mathaiyan
    Email       : prakasamm@virtusa.com
*/


var ManageKPI = function() {
    
    var handleViews = function() {                
        
        $('.btn-create-kpi').click(function () {
            $('.panel-KPI-list').hide();
            $('.panel-KPI-edit').hide();
            $('.panel-KPI-create').show();
        }); 
        
        $('.btn-edit-kpi').click(function () {
            $('.panel-KPI-list').hide();
            $('.panel-KPI-create').hide();
            $('.panel-KPI-edit').show();
        }); 
        
        $('.btn-cancel-kpi').click(function () {
            $('.panel-KPI-create').hide();
            $('.panel-KPI-edit').hide();
            $('.panel-KPI-list').show();
        }); 
        
    };   //  
    
    var handleColorSelecter = function() {                
        
        $('.btn-kpi-color-select').click(function () {
            $('.panel-kpi-color-seleter').addClass('show');
        }); 
        
        $('.list-kpi-colors li').click(function () {            
            var attr = $(this).attr('data-color');            
            $('.txt-kpi-color').val(attr);
            $('.panel-kpi-color-seleter').removeClass('show');
            $('.kpi-seleted-color i').css("color", attr);
        });                 
        
    };   //  
    
    var handleIconSelecter = function() {                
        
        $('.btn-kpi-icon-select').click(function () {
            $('.panel-kpi-icon-seleter').addClass('show');
        }); 
        
        $('.list-kpi-icons li').click(function () {            
            var attr = $(this).attr('data-icon');            
            $('.txt-kpi-icon').val(attr);
            $('.panel-kpi-icon-seleter').removeClass('show');
            $('.kpi-seleted-icon').html('<i class="fa '+attr+'"></i>')
        });                 
        
    };   //  Product Background


    return {
        init: function() {

            handleViews();
            handleColorSelecter();
            handleIconSelecter();
            
        }

    };
}();    // Handel Redeem Page

