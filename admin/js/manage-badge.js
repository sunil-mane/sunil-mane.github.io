
/* 
    Created on  : Jan 18, 2016, 10:44:04 AM
    Author      : Prakasam Mathaiyan
    Email       : prakasamm@virtusa.com
*/


var ManageBadge = function() {
    
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
        
        $('.btn-badgeBG-select').click(function () {
            $('.panel-kpi-color-seleter').addClass('show');
        }); 
        
        $('.list-badge-colors li').click(function () {            
            var bgImg = $(this).attr('data-bg-image');            
            $('.txt-kpi-color').val(bgImg);
            $('.img-badgeBG-pre').attr('src', bgImg);
            
            $('.panel-kpi-color-seleter').removeClass('show');
            $('.divBadgeBg').css('background-image', 'url(' + bgImg + ')');
        });                 
        
    };   //  Function for Badge BG Selecter
    
    var handleIconSelecter = function() {                
        
        $('.btn-kpi-icon-select').click(function () {
            $('.panel-kpi-icon-seleter').addClass('show');
        }); 
        
        $('.list-kpi-icons li').click(function () {            
            var attr = $(this).attr('data-icon');            
            $('.txt-kpi-icon').val(attr);
            $('.panel-kpi-icon-seleter').removeClass('show');
            $('.kpi-seleted-icon').html('<i class="fa '+attr+'"></i>');
            $('.divBadgeBg').html('<i class="fa '+attr+'"></i>');
        });                 
        
    };   //  Function for Badge ICON Select
     
    var handleViews = function() {                
        
        $('.btn-create-badge').click(function () {
            $('.panel-badge-list').hide();
            $('.panel-badge-edit').hide();
            $('.panel-badge-create').show();
        }); 
        
        $('.btn-edit-badge').click(function () {
            $('.panel-badge-list').hide();
            $('.panel-badge-create').hide();
            $('.panel-badge-edit').show();
        }); 
        
        $('.btn-cancel-badge').click(function () {
            $('.panel-badge-create').hide();
            $('.panel-badge-edit').hide();
            $('.panel-badge-list').show();
        }); 
        
    };   //  
    
    
    var handelAddLastBeforeNewRule = function() {
        
        $('.tblRelusAdd tr:last').before('\
        <tr>\n\
            <td><select class="select2"> <option>AND</option><option>OR</option><option>ELSE IF</option> </select></td> \n\
            <td><select class="select2"> <option>SCORE01</option><option>SCORE02</option><option>SCORE03</option><option>SCORE04</option><option>SCORE05</option><option>SCORE06</option> </select></td> \n\
            <td><select class="select2"> <option>=</option><option>!=</option><option><</option><option><=</option><option>></option><option>>=</option> </select></td>\n\
            <td><input class="form-control" type="text" ></td><\n\
            <td><a href="javascript:;" class="badge-kpi dataBgColor ttT" data-bg-color="#ffd600" title="First call resolution"><i class="fa fa-check-circle"></i><span>SCORE01 = 40</span></a></td>\n\
            <td>\n\
                <a class="btn btn-danger btn-xs del-scr-rul" href="javascript:;"><i class="ti-trash"></i></a> \n\
            </td>\n\
        </tr>');
        
    };         //  Function to handel  Add New rule in New Rules
    
    var handelAddLastBeforeExistingRule = function() {
        
        $('.tblRelusEdit tr:last').before('\
        <tr>\n\
            <td><select class="select2"> <option>AND</option><option>OR</option><option>ELSE IF</option> </select></td> \n\
            <td><select class="select2"> <option>SCORE01</option><option>SCORE03</option><option>SCORE02</option><option>SCORE04</option><option>SCORE05</option><option>SCORE06</option> </select></td> \n\
            <td><select class="select2"> <option>=</option><option>!=</option><option><</option><option><=</option><option>></option><option>>=</option> </select></td>\n\
            <td><input class="form-control" type="text" ></td><\n\
            <td><a href="javascript:;" class="badge-kpi dataBgColor ttT" data-bg-color="#ffd600" title="First call resolution"><i class="fa fa-check-circle"></i><span>SCORE01 = 40</span></a></td>\n\
            <td>\n\
                <a class="btn btn-danger btn-xs del-scr-rul" href="javascript:;"><i class="ti-trash"></i></a> \n\
            </td>\n\
        </tr>');
        
    };         //  Function to handel  Add New rule in Existing Rules
    
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

