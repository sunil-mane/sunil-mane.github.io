
/* 
    Created on  : Jan 18, 2016, 10:44:04 AM
    Author      : Prakasam Mathaiyan
    Email       : prakasamm@virtusa.com
*/


var ManageGame = function() {
    
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
    
    var handleSelectUser = function() {
       
       $('.btn-add-sers').click( function(){
           $('.panel-kpi-color-seleter').addClass('show');
       });
        
    };   //  KPI Heading / KPI Select   
    
    var handleDraggable = function() {                
        
        $(".list-usersList li").draggable({
            appendTo: "body",
            helper: "clone"
        });
        
        $(".gamSeletedUsers ul").droppable({
            activeClass: "liDragging",
            hoverClass: "liDragging",
            accept: ":not(.ui-sortable-helper)",
            drop: function (event, ui) {
                $(this).find(".placeholder").remove();
                $("<li></li>").html(ui.draggable.html()+'<a href="javascript:;" class="ti-close"></a>').appendTo(this);
                $('.gamSeletedUsers').css("border", "none");
            }
        }).sortable({
            items: "li:not(.placeholder)",
            sort: function () {
                // gets added unintentionally by droppable interacting with sortable
                // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
                $(this).removeClass("ui-state-default");
            }
        }); 
        
    };   //  
    
    var handleRemoveUser = function() {
       
       $('a.ti-close').click( function(){
            alert("hello World");
       });
        
    };   //  KPI Heading / KPI Select   

    return {
        init: function() {

            handleViews();
            handleSelectUser();
            handleDraggable();
            handleRemoveUser();
            $(function () {
              $('#datetimepicker1').datetimepicker();
              $('#datetimepicker2').datetimepicker();
              $('#datetimepicker3').datetimepicker();
              $('#datetimepicker4').datetimepicker();
          });
            
        }

    };
}();    // Handel Redeem Page

