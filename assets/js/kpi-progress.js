
/* 
    Created on  : Jan 13, 2016, 10:44:04 AM
    Author      : Prakasam Mathaiyan
    Email       : prakasamm@virtusa.com
*/


var KPI = function() {
    
    var handleBarPie = function() {
                
        $('.icon-progress').click(function (){
            
            $current_progress_div = $(this).closest("div.panel").find("div.kpi-progress-bar");
            $current_pie_div = $(this).closest("div.panel").find("div.kpi-easy-pie");
            $current_paneltool_li = $(this).closest("div.panel-tools").find('ul.panel-filter li');
            
            $current_pie_div.hide();
            $current_progress_div.show();
            
            $current_paneltool_li.removeClass('current');
            $(this).addClass('current');
        });
                
        $('.icon-pie').click(function (){
            
            $current_progress_div = $(this).closest("div.panel").find("div.kpi-progress-bar");
            $current_pie_div = $(this).closest("div.panel").find("div.kpi-easy-pie");
            $current_paneltool_li = $(this).closest("div.panel-tools").find('ul.panel-filter li');
            
            $current_pie_div.show();
            $current_progress_div.hide();
            
            $current_paneltool_li.removeClass('current');
            $(this).addClass('current');
        });
        
    };   //  
    
    var handleKPI1pie = function() {
                
        if (!jQuery().easyPieChart) { return; }
        
        var barcolor = '#00aaff';
        
        $('.chart-kpi1').easyPieChart({
            barColor    : barcolor,
            trackColor  : '#f2f2f2',
            scaleColor	: '#dddddd',
            lineCap	: 'round',
            lineWidth	: 10,
            size	: 150
        });
        
    };   //  
    
    var handleKPI2pie = function() {
                
        if (!jQuery().easyPieChart) { return; }
        
        var barcolor = '#008296';
        
        $('.chart-kpi2').easyPieChart({
            barColor    : barcolor,
            trackColor  : '#f2f2f2',
            scaleColor	: '#dddddd',
            lineCap	: 'round',
            lineWidth	: 10,
            size	: 150
        });
        
    };   //  
    
    var handleKPI3pie = function() {
                
        if (!jQuery().easyPieChart) { return; }
        
        var barcolor = '#d72323';
        
        $('.chart-kpi3').easyPieChart({
            barColor    : barcolor,
            trackColor  : '#f2f2f2',
            scaleColor	: '#dddddd',
            lineCap	: 'round',
            lineWidth	: 10,
            size	: 150
        });
        
    };   //  
    
    
    return {
        init: function() {

            handleBarPie();
            handleKPI1pie();
            handleKPI2pie();
            handleKPI3pie();
            
        }

    };
}();    // Handel Dashboard



