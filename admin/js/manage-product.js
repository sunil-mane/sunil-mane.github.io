
/* 
    Created on  : Jan 18, 2016, 10:44:04 AM
    Author      : Prakasam Mathaiyan
    Email       : prakasamm@virtusa.com
*/


var ManageProduct = function() {
    
    var handleViews = function() {                
        
        $('.btn-create-product').click(function () {
            $('.panel-product-list').hide();
            $('.panel-product-edit').hide();
            $('.panel-product-create').show();
        }); 
        
        $('.btn-edit-product').click(function () {
            $('.panel-product-list').hide();
            $('.panel-product-create').hide();
            $('.panel-product-edit').show();
        }); 
        
        $('.btn-cancel-product').click(function () {
            $('.panel-product-create').hide();
            $('.panel-product-edit').hide();
            $('.panel-product-list').show();
        }); 
        
    };   //  


    return {
        init: function() {

            handleViews();
            
        }

    };
}();    // Handel Redeem Page

