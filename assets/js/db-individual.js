
/* 
    Created on  : Jan 13, 2016, 10:44:04 AM
    Author      : Prakasam Mathaiyan
    Email       : prakasamm@virtusa.com
*/


var DBIndividual = function() {
    
    var handleKPIHeading = function() {
                
        $('.panel-heading .dropdown-menu li a').click(function (){
            var selText = $(this).text();            
            $txtButton = $(this).closest("div.dropdown").find("h3");
            $txtButton.html(selText + ' <i class="fa fa-angle-down"></i>');
        });
        
        $('.panel-kpi-chart .panel-filter li').click( function () {
            $('.panel-kpi-chart .panel-filter li').removeClass('current');
            $(this).addClass('current');
        });
        
        $('.panel-scores-chart .panel-filter li').click( function () {
            $('.panel-scores-chart .panel-filter li').removeClass('current');
            $(this).addClass('current');
        });
        
    };   //  KPI Heading / KPI Select
    
    var handleKPIchart = function() {
        
        if (!jQuery.plot) { return; }
        
        var kpi1All = [
            [new Date("2016/01/03"), 13], 
            [new Date("2016/01/04"), 10], 
            [new Date("2016/01/05"), 14], 
            [new Date("2016/01/06"), 12], 
            [new Date("2016/01/07"), 15],
            [new Date("2016/01/08"), 14],
            [new Date("2016/01/09"), 16],
            [new Date("2016/01/10"), 15],
            [new Date("2016/01/11"), 16],
            [new Date("2016/01/12"), 13],
            [new Date("2016/01/13"), 17]
        ];
        
        var kpi1Week = [
            [new Date("2016/01/03"), 13], 
            [new Date("2016/01/04"), 10], 
            [new Date("2016/01/05"), 14], 
            [new Date("2016/01/06"), 12], 
            [new Date("2016/01/07"), 15],
            [new Date("2016/01/08"), 14],
            [new Date("2016/01/09"), 16]
        ];
        
        //flot options
        var options = {
            series: {
                curvedLines: {active: true}
            },
            grid: {
                hoverable: true,
                borderWidth: {
                    top: 1,
                    right: 0,
                    bottom: 2,
                    left: 0
                },
                borderColor: {
                    top: 'rgba(255,255,255,.1)', 
                    bottom: 'rgba(255,255,255,.1)', 
                    left: 'rgba(255,255,255,.1)',
                    right: "#FFF"
                }
            },
            yaxis: {
                color: '#2695a6',
                tickColor: '#bfbfbf'                
            }, 
            xaxis: {
                color: "#2695a6",
                mode: "time",
                tickSize: [1, "day"],
                tickLength: 0,
                timeformat: "%d/%m",
                axisLabel: "Date"
            },            
            tooltip: true,
            tooltipOpts: {
                content: "%x/2016 : %y"
            }
        };
        
        var kpiData = kpi1Week;
        
        $('.KPIAll').click(function (){
            var kpiData = kpi1All;
            
            //plotting
            $.plot($("#KPIChart"), [
                {
                    data: kpiData, color: '#00b2e5',
                    lines: { show: true, lineWidth: 3 },
                    curvedLines: { apply: true, tension: 1}
                }, 
                {
                    data: kpiData, color: '#00b2e5',
                    points: { show: true }
                }
            ], options);
        });
        
        $('.KPIWeek').click(function (){
            var kpiData = kpi1Week;
            
            //plotting
            $.plot($("#KPIChart"), [
                {
                    data: kpiData, color: '#00b2e5',
                    lines: { show: true, lineWidth: 3 },
                    curvedLines: { apply: true, tension: 1}
                }, 
                {
                    data: kpiData, color: '#00b2e5',
                    points: { show: true }
                }
            ], options);
        });
        
        
        // START: Plotting Default
        $.plot($("#KPIChart"), [
            {
                data: kpiData, color: '#00b2e5',
                lines: { show: true, lineWidth: 3 },
                curvedLines: { apply: true, tension: 1}
            }, 
            {
                data: kpiData, color: '#00b2e5',
                points: { show: true }
            }
        ], options);
        // END: Plotting Default
                
    };   // KPI Line Chart
    
    var handleEasyPie = function() {
        
        if (!jQuery().easyPieChart) {
            return;
        }
        
        $('.easy-pie-chart').easyPieChart({
            barColor    : '#00b2e5',
            trackColor  : '#f2f2f2',
            scaleColor	: '#ffffff',
            lineCap	: 'round',
            lineWidth	: 10,
            size	: 180
        });
        
    };   //  Easy PIE Chart
    
    var handelScoreChart = function () {
        
        var score1Week = [
            [new Date("2016/01/03"), 10], 
            [new Date("2016/01/04"), 7], 
            [new Date("2016/01/05"), 9], 
            [new Date("2016/01/06"), 11], 
            [new Date("2016/01/07"), 8],
            [new Date("2016/01/08"), 11],
            [new Date("2016/01/09"), 16]
        ];
        
        var score1All = [
            [new Date("2016/01/03"), 10], 
            [new Date("2016/01/04"), 7], 
            [new Date("2016/01/05"), 9], 
            [new Date("2016/01/06"), 11], 
            [new Date("2016/01/07"), 8],
            [new Date("2016/01/08"), 12],
            [new Date("2016/01/09"), 16],
            [new Date("2016/01/10"), 10],
            [new Date("2016/01/11"), 14],
            [new Date("2016/01/12"), 9],
            [new Date("2016/01/13"), 14]
        ];
        
        var score2Week = [
            [new Date("2016/01/03"), 14], 
            [new Date("2016/01/04"), 11], 
            [new Date("2016/01/05"), 13], 
            [new Date("2016/01/06"), 12], 
            [new Date("2016/01/07"), 14],
            [new Date("2016/01/08"), 13],
            [new Date("2016/01/09"), 15]
        ];
        
        var score2All = [
            [new Date("2016/01/03"), 14], 
            [new Date("2016/01/04"), 11], 
            [new Date("2016/01/05"), 10], 
            [new Date("2016/01/06"), 12], 
            [new Date("2016/01/07"), 14],
            [new Date("2016/01/08"), 11],
            [new Date("2016/01/09"), 8],
            [new Date("2016/01/10"), 11],
            [new Date("2016/01/11"), 15],
            [new Date("2016/01/12"), 10],
            [new Date("2016/01/13"), 16]
        ];
        
        var score3Week = [
            [new Date("2016/01/03"), 18], 
            [new Date("2016/01/04"), 9], 
            [new Date("2016/01/05"), 13], 
            [new Date("2016/01/06"), 11], 
            [new Date("2016/01/07"), 15],
            [new Date("2016/01/08"), 12],
            [new Date("2016/01/09"), 18]
        ];
        
        var score3All = [
            [new Date("2016/01/03"), 18], 
            [new Date("2016/01/04"), 9], 
            [new Date("2016/01/05"), 13], 
            [new Date("2016/01/06"), 11], 
            [new Date("2016/01/07"), 15],
            [new Date("2016/01/08"), 12],
            [new Date("2016/01/09"), 9],
            [new Date("2016/01/10"), 11],
            [new Date("2016/01/11"), 8],
            [new Date("2016/01/12"), 13],
            [new Date("2016/01/13"), 14]
        ];
        
        //flot options
        var options = {
                
            series: {
                curvedLines: {
                    apply: true,
                    active: true,
                    monotonicFit: true
                }                
            },
            legend:{
                show: false
            },
            grid: {
                hoverable: true,
                borderWidth: {
                    top: 1,
                    right: 0,
                    bottom: 2,
                    left: 1
                },
                borderColor: {
                    top: 'rgba(0,0,0,.1)', 
                    bottom: 'rgba(0,0,0,.1)', 
                    left: 'rgba(0,0,0,.1)',
                    right: 'rgba(0,0,0,.1)'
                }
            },
            yaxis: {
                color: '#2695a6',
                tickColor: 'rgba(0,0,0,.1)'               
            }, 
            xaxis: {
                show: true,
                color: '#f5f5f5',
                mode: "time",
                tickSize: [1, "day"],
                tickLength: 0,
                timeformat: "%d/%m",
                axisLabel: "Date"
            }, 
            tooltip: true,
            tooltipOpts: {
                content: "<strong>%s</strong><br> %x/16 : %y"
            },
            lines: {
                show: true,
                fill: .15,
                lineWidth: 1
            },
            stack: true,
            points: {
                show: false,
                lineWidth: 1.5,
                radius: 2,
                symbol: "circle",
                fill: true,
                fillColor: "#ffffff"
            }
            
        };
        
        var score1Data = score1Week;
        var score2Data = score2Week;
        var score3Data = score3Week;
        
        $('.ScoreAll').click(function (){
            var score1Data = score1All;
            var score2Data = score2All;
            var score3Data = score3All;
            
            // Default Setting
            $.plot($("#scoreChart"), [ 
                {            
                    data: score1Data,                
                    label: "RUNNING SCORE",
                    color: '#a7b74a'
                },
                {
                    data: score2Data,                 
                    label: "WALKING SCORE", 
                    color: '#f1614f'
                },
                {
                    data: score3Data,
                    label: "OVERALL SCORE",                                 
                    color: '#f7901d'
                }
            ], options);
            
        });
        
        $('.ScoreWeek').click(function (){
            var score1Data = score1Week;
            var score2Data = score2Week;
            var score3Data = score3Week;
            
            // Default Setting
            $.plot($("#scoreChart"), [ 
                {            
                    data: score1Data,                
                    label: "RUNNING SCORE",
                    color: '#a7b74a'
                },
                {
                    data: score2Data,                 
                    label: "WALKING SCORE", 
                    color: '#f1614f'
                },
                {
                    data: score3Data,
                    label: "OVERALL SCORE",                                 
                    color: '#f7901d'
                }
            ], options);

        });
        
        // Default Setting
        $.plot($("#scoreChart"), [ 
            {            
                data: score1Data,                
                label: "RUNNING SCORE",
                color: '#a7b74a'
            },
            {
                data: score2Data,                 
                label: "WALKING SCORE", 
                color: '#f1614f'
            },
            {
                data: score3Data,
                label: "OVERALL SCORE",                                 
                color: '#f7901d'
            }
        ], options);
        
    };      // Function For Area Curves
    
    
    return {
        init: function() {

            handleKPIHeading();
            handleKPIchart();
            handelScoreChart();
            handleEasyPie();
        }

    };
}();    // Handel Dashboard

