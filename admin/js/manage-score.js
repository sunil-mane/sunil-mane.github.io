
/* 
    Created on  : Jan 18, 2016, 10:44:04 AM
    Author      : Prakasam Mathaiyan
    Email       : prakasamm@virtusa.com
*/


var ManageScores = function() {
    
    var handleDataBgColor = function () {
        $(".dataBgColor").each(function () {
            var bg_color = $(this).attr('data-bg-color');            
            $(this).css('background-color', bg_color);
        });
    };      //  Function to handle data-bg-color    
    
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
    
    var handelSelect2 = function() {
        
        if (!jQuery().select2) {
            return;
        }
        
        $('.select2').select2({minimumResultsForSearch: -1 });
        
    };         //  Function to handel  Sclect2    
    
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
     
    var handleViews = function() {                
        
        $('.btn-create-score').click(function () {
            $('.panel-score-list').hide();
            $('.panel-score-edit').hide();
            $('.panel-score-create').show();
        }); 
        
        $('.btn-edit-score').click(function () {
            $('.panel-score-list').hide();
            $('.panel-score-create').hide();
            $('.panel-score-edit').show();
        }); 
        
        $('.btn-cancel-score').click(function () {
            $('.panel-score-create').hide();
            $('.panel-score-edit').hide();
            $('.panel-score-list').show();
        }); 
        
    };   //  
    
    var handelAddLastBeforeNewRule = function() {
        
        $('.tblRelusAdd tr:last').before('\
        <tr>\n\
            <td><select class="select2"> <option>AND</option><option>OR</option><option>ELSE IF</option> </select></td> \n\
            <td><select class="select2"> <option>KPI01</option><option>KPI02</option><option>KPI03</option><option>KPI04</option><option>KPI05</option><option>KPI06</option> </select></td> \n\
            <td><select class="select2"> <option>=</option><option>!=</option><option><</option><option><=</option><option>></option><option>>=</option> </select></td>\n\
            <td><input class="form-control" type="text" ></td><\n\
            <td><a href="javascript:;" class="badge-kpi dataBgColor ttT" data-bg-color="#ffd600" title="First call resolution"><i class="fa fa-check-circle"></i><span>KPI01 = 40%</span></a></td>\n\
            <td>\n\
                <a class="btn btn-danger btn-xs del-scr-rul" href="javascript:;"><i class="ti-trash"></i></a> \n\
            </td>\n\
        </tr>');
        
    };         //  Function to handel  Sclect2
    
    var handelAddLastBeforeExistingRule = function() {
        
        $('.tblRelusEdit tr:last').before('\
        <tr>\n\
            <td><select class="select2"> <option>AND</option><option>OR</option><option>ELSE IF</option> </select></td> \n\
            <td><select class="select2"> <option>KPI01</option><option>KPI02</option><option>KPI03</option><option>KPI04</option><option>KPI05</option><option>KPI06</option> </select></td> \n\
            <td><select class="select2"> <option>=</option><option>!=</option><option><</option><option><=</option><option>></option><option>>=</option> </select></td>\n\
            <td><input class="form-control" type="text" ></td><\n\
            <td><a href="javascript:;" class="badge-kpi dataBgColor ttT" data-bg-color="#ffd600" title="First call resolution"><i class="fa fa-check-circle"></i><span>KPI01 = 40%</span></a></td>\n\
            <td>\n\
                <a class="btn btn-danger btn-xs del-scr-rul" href="javascript:;"><i class="ti-trash"></i></a> \n\
            </td>\n\
        </tr>');
        
    };         //  Function to handel  Sclect2
    
    var handelDeleteCurrentTR = function() {
        
        $('.del-scr-rul').click(function(){
            $(this).closest('tr').remove();
        });
        
    };         //  Function to handel  Sclect2
    
    var handleAddingRowNew = function () {
        
        $('a.add-new-scr-rul').click(function (){            
            handelAddLastBeforeNewRule();
            handleDataBgColor();
            handelTooltip();
            handelSelect2();
            handelDeleteCurrentTR();
        });                        
    };   
    
    var handleAddingRowExisting = function () {
        
        $('a.add-ext-scr-rul').click(function (){            
            handelAddLastBeforeExistingRule();
            handleDataBgColor();
            handelTooltip();
            handelSelect2();
            handelDeleteCurrentTR();
        });                        
    };   
    
          

    return {
        init: function() {

            handleViews();
            handleColorSelecter();
            handleIconSelecter();
            handleAddingRowNew();
            handleAddingRowExisting();
            handelDeleteCurrentTR();
            
        }

    };
}();    // Handel Redeem Page

