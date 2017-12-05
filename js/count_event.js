$(function(){
	initMap();
});

/*事件来源统计-柱状图start*/
var event_source_bar_dom = document.getElementById("event_source_bar_echart");
var event_source_bar_chart=echarts.init(event_source_bar_dom);
event_source_bar_option=null;
function event_source_bar_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            event_source_bar_categories:event_source_bar_bycount_sourceType,
            event_source_bar_sourceData: event_source_bar_bycount_sourceData
        });
    },0);
}
// 初始 option
event_source_bar_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
        {name:"事件来源",textStyle:{color:"#fff",fontSize:16}}
        ]
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: false, readOnly: true},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        },
        left:0
    },
    calculable : true,
    grid: { 
    	left: '0%',
    	right: '1%',
    	bottom: '2%',
    	containLabel: true
    },
    xAxis: {
    	 axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 },
    	 data: []
    	 },
    yAxis: {
    	axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 }},
    series: []
};
event_source_bar_fetchData(function (data) {
    event_source_bar_chart.setOption({
        xAxis: {
            data: data.event_source_bar_categories
        },
        series: [
        {
            name: "事件来源",
            type: "bar", 
            data: data.event_source_bar_sourceData,
            barWidth:40,
            itemStyle:{normal: {color:'#EEEE00',label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (event_source_bar_option && typeof event_source_bar_option === "object") {
    event_source_bar_chart.setOption(event_source_bar_option, true);
}
/*事件来源统计-柱状图end*/

/*事件发生地区-柱状图start*/
var event_deal_bar_dom = document.getElementById("event_deal_bar_echart");
var event_deal_bar_chart=echarts.init(event_deal_bar_dom);
event_deal_bar_option=null;
function  event_deal_bar_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            event_deal_bar_categories:event_deal_bar_bycount_areaType,
            event_deal_bar_data: event_deal_bar_bycount_Data
        });
    },0);
}
// 初始 option
event_deal_bar_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
        {name:"事件数量",textStyle:{color:"#fff",fontSize:16}}
        ]
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: false, readOnly: true},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        },
        left:0
    },
    calculable : true,
    grid: { 
    	left: '0%',
    	right: '1%',
    	bottom: '2%',
    	containLabel: true
    },
    xAxis: {
    	 axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 },
    	 data: []
    	 },
    yAxis: {
    	axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 }},
    series: []
};
event_deal_bar_fetchData(function (data) {
    event_deal_bar_chart.setOption({
        xAxis: {
            data: data.event_deal_bar_categories
        },
        series: [
        {
            name: "事件数量",
            type: "bar", 
            data: data.event_deal_bar_data,
            barWidth:30,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (event_deal_bar_option && typeof event_deal_bar_option === "object") {
//	数据穿透
//  myChart.on('click', function (params) {
//  if(params.seriesName=="在办案件"&&params.data>0){}
//  });
    event_deal_bar_chart.setOption(event_deal_bar_option, true);
}
/*事件发生地区-柱状图end*/

/*事件统计-仪表盘start*/
var event_count_board_all_dom = document.getElementById("event_count_board_all_echart");
var event_count_board_all_chart=echarts.init(event_count_board_all_dom);
event_count_board_all_option=null;
event_count_board_all_option = {
    tooltip : {
    },
    toolbox: {
    	show : false,
    	feature: {
    		restore: {},
    		saveAsImage: {}
    		}
    },
    series: [
        {
        	startAngle: 225,
        	endAngle: -45,
        	name: '事件总数',
        	type: 'gauge',
        	center : ['50%', '50%'],
        	min:0,
        	max:1000,
        	data: [{value: 0, name: '事件总数'}]
        	}
    ]
};
event_count_board_all_option.series[0].data[0].value = event_count_board_all_bycount_alldata;
event_count_board_all_chart.setOption(event_count_board_all_option, true);
/*事件统计-仪表盘end*/

/*事件来源趋势-折线图start*/
var event_source_line_dom = document.getElementById("event_source_line_echart");
var event_source_line_chart=echarts.init(event_source_line_dom);
event_source_line_option=null;
function event_source_line_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            event_source_line_categories:event_source_line_bycount_sourceType,
            event_source_line_source_web_Data: event_source_line_source_bycount_webData,
            event_source_line_source_app_Data: event_source_line_source_bycount_appData,
            event_source_line_source_wechat_Data: event_source_line_source_bycount_wechatData,
            event_source_line_source_other_Data: event_source_line_source_bycount_otherData
        });
    },0);
}
// 初始 option
event_source_line_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
        {name:"Web",textStyle:{color:"#fff",fontSize:16}},
        {name:"App",textStyle:{color:"#fff",fontSize:16}},
        {name:"微信",textStyle:{color:"#fff",fontSize:16}},
        {name:"其它",textStyle:{color:"#fff",fontSize:16}}
        ]
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: false, readOnly: true},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        },
        left:0
    },
    calculable : true,
    grid: { 
    	left: '0%',
    	right: '1%',
    	bottom: '2%',
    	containLabel: true
    },
    xAxis: {
    	 axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 },
    	 data: []
    	 },
    yAxis: {
    	axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 }},
    series: []
};
event_source_line_fetchData(function (data) {
    event_source_line_chart.setOption({
        xAxis: {
            data: data.event_source_line_categories
        },
        series: [
        {
            name: "Web",
            type: "line", 
            data: data.event_source_line_source_web_Data,
            barWidth:40,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        },
        {
            name: "App",
            type: "line", 
            data: data.event_source_line_source_app_Data,
            barWidth:40,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        },
        {
            name: "微信",
            type: "line", 
            data: data.event_source_line_source_wechat_Data,
            barWidth:40,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        },
        {
            name: "其它",
            type: "line", 
            data: data.event_source_line_source_other_Data,
            barWidth:40,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (event_source_line_option && typeof event_source_line_option === "object") {
    event_source_line_chart.setOption(event_source_line_option, true);
}
/*事件来源趋势-折线图end*/

/*事件类别统计-饼图start*/
var event_type_pie_dom = document.getElementById("event_type_pie_echart");
var event_type_pie_myChart = echarts.init(event_type_pie_dom);
event_type_pie_option = null;
event_type_pie_option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	    	x:'right',
	        orient:'vertical',
	        top:'30',
	        left:'80%',
	        textStyle:{color: '#fff',fontSize:16},
	        data: event_type_pie_legenddata
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            mark : {show: true},
	            dataView : {show: false, readOnly: false},
	            magicType : {
	                show: true,
	                type: ['pie', 'funnel']
	            },
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    series : [
	        {
	            name:'面积模式',
	            type:'pie',
	            radius : [30, 110],
	            center : ['50%', '50%'],
	            roseType : 'area',
	            data:event_type_pie_bycount_seriesdata,
	            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{fontSize:16}}}}
	        }
	    ]
	};
if (event_type_pie_option && typeof event_type_pie_option === "object") {
    event_type_pie_myChart.setOption(event_type_pie_option, true);
}
/*事件类别统计-饼图end*/

/*年度事件趋势-折线图start*/
var event_source_line_year_dom = document.getElementById("event_source_line_year_echart");
var event_source_line_year_chart=echarts.init(event_source_line_year_dom);
event_source_line_year_option=null;
function event_source_line_year_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            event_source_line_year_categories:event_source_line_year_bycount_sourceType,
            event_source_line_year_source_year_Data: event_source_line_year_source_bycount_Data,
            event_source_line_year_source_year_divine_Data: event_source_line_year_source_divine_bycount_Data
        });
    },0);
}
// 初始 option
event_source_line_year_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
        {name:"年度事件",textStyle:{color:"#fff",fontSize:16}},
        {name:"预测事件",textStyle:{color:"#fff",fontSize:16}}
        ]
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: false, readOnly: true},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        },
        left:0
    },
    calculable : true,
    grid: { 
    	left: '0%',
    	right: '1%',
    	bottom: '2%',
    	containLabel: true
    },
    xAxis: {
    	 axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 },
    	 data: []
    	 },
    yAxis: {
    	axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 }},
    series: []
};
event_source_line_year_fetchData(function (data) {
    event_source_line_year_chart.setOption({
        xAxis: {
            data: data.event_source_line_year_categories
        },
        series: [
        {
            name: "年度事件",
            type: "line", 
            data: data.event_source_line_year_source_year_Data,
            barWidth:40,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        },
        {
            name: "预测事件",
            type: "line", 
            data: data.event_source_line_year_source_year_divine_Data,
            barWidth:40,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (event_source_line_year_option && typeof event_source_line_year_option === "object") {
    event_source_line_year_chart.setOption(event_source_line_year_option, true);
}
/*年度事件趋势-折线图end*/

/*事件发生地区趋势-折线图start*/
var event_source_line_area_dom = document.getElementById("event_source_line_area_echart");
var event_source_line_area_chart=echarts.init(event_source_line_area_dom);
event_source_line_area_option=null;
function event_source_line_area_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            event_source_line_area_categories:event_source_line_area_bycount_sourceType,
            event_source_line_area_xiangzhou_Data: event_source_line_area_xiangzhou_bycount_Data,
            event_source_line_area_jinwan_Data: event_source_line_area_jinwan_bycount_Data,
            event_source_line_area_doumeng_Data: event_source_line_area_doumeng_bycount_Data,
            event_source_line_area_hengqing_Data: event_source_line_area_hengqing_bycount_Data
        });
    },0);
}
// 初始 option
event_source_line_area_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
        {name:"香洲区",textStyle:{color:"#fff",fontSize:16}},
        {name:"金湾区",textStyle:{color:"#fff",fontSize:16}},
        {name:"斗门区",textStyle:{color:"#fff",fontSize:16}},
        {name:"横琴新区",textStyle:{color:"#fff",fontSize:16}}
        ]
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: false, readOnly: true},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        },
        left:0
    },
    calculable : true,
    grid: { 
    	left: '0%',
    	right: '1%',
    	bottom: '2%',
    	containLabel: true
    },
    xAxis: {
    	 axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 },
    	 data: []
    	 },
    yAxis: {
    	axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 }},
    series: []
};
event_source_line_area_fetchData(function (data) {
    event_source_line_area_chart.setOption({
        xAxis: {
            data: data.event_source_line_area_categories
        },
        series: [
        {
            name: "香洲区",
            type: "line", 
            data: data.event_source_line_area_xiangzhou_Data,
            barWidth:40,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        },
        {
            name: "金湾区",
            type: "line", 
            data: data.event_source_line_area_jinwan_Data,
            barWidth:40,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        },
        {
            name: "斗门区",
            type: "line", 
            data: data.event_source_line_area_doumeng_Data,
            barWidth:40,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        },
        {
            name: "横琴新区",
            type: "line", 
            data: data.event_source_line_area_hengqing_Data,
            barWidth:40,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (event_source_line_area_option && typeof event_source_line_area_option === "object") {
    event_source_line_area_chart.setOption(event_source_line_area_option, true);
}
/*事件发生地区趋势-折线图end*/

/*信访形式概况start*/
var letter_visit_dom = document.getElementById("letter_visit_echart");
var letter_visit_chart=echarts.init(letter_visit_dom);
letter_visit_option=null;
function letter_visit_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            letter_visit_categories:letter_visit_bycount_sourceType,
            letter_visit_sourceData: letter_visit_bycount_sourceData
        });
    },0);
}
// 初始 option
letter_visit_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
        {name:"访问形式",textStyle:{color:"#fff",fontSize:16}}
        ]
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: false, readOnly: true},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        },
        left:0
    },
    calculable : true,
    grid: { 
    	left: '0%',
    	right: '1%',
    	bottom: '2%',
    	containLabel: true
    },
    xAxis: {
    	 axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 },
    	 data: []
    	 },
    yAxis: {
    	axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 }},
    series: []
};
letter_visit_fetchData(function (data) {
    letter_visit_chart.setOption({
        xAxis: {
            data: data.letter_visit_categories
        },
        series: [
        {
            name: "访问形式",
            type: "bar", 
            data: data.letter_visit_sourceData,
            barWidth:40,
            itemStyle:{normal: {color:'#B92C28',label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (letter_visit_option && typeof letter_visit_option === "object") {
    letter_visit_chart.setOption(letter_visit_option, true);
}
/*信访形式概况end*/

/*热点问题概况start*/
var hotspot_question_dom = document.getElementById("hotspot_question_echart");
var hotspot_question_chart=echarts.init(hotspot_question_dom);
hotspot_question_option=null;
function hotspot_question_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            hotspot_question_categories:hotspot_question_bycount_sourceType,
            hotspot_question_sourceData: hotspot_question_bycount_sourceData
        });
    },0);
}
// 初始 option
hotspot_question_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
        {name:"热点问题",textStyle:{color:"#fff",fontSize:16}}
        ]
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: false, readOnly: true},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        },
        left:0
    },
    calculable : true,
    grid: { 
    	left: '0%',
    	right: '1%',
    	bottom: '2%',
    	containLabel: true
    },
    xAxis: {
    	 axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 },
    	 data: []
    	 },
    yAxis: {
    	axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 }},
    series: []
};
hotspot_question_fetchData(function (data) {
    hotspot_question_chart.setOption({
        xAxis: {
            data: data.hotspot_question_categories
        },
        series: [
        {
            name: "热点问题",
            type: "bar", 
            data: data.hotspot_question_sourceData,
            barWidth:40,
            itemStyle:{normal: {color:'#D58512',label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (hotspot_question_option && typeof hotspot_question_option === "object") {
    hotspot_question_chart.setOption(hotspot_question_option, true);
}
/*热点问题概况end*/

/*问题发生地区概况start*/
var question_happen_region_dom = document.getElementById("question_happen_region_echart");
var question_happen_region_chart=echarts.init(question_happen_region_dom);
question_happen_region_option=null;
function question_happen_region_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            question_happen_region_categories:question_happen_region_bycount_sourceType,
            question_happen_region_sourceData: question_happen_region_bycount_sourceData
        });
    },0);
}
// 初始 option
question_happen_region_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
        {name:"问题发生地区",textStyle:{color:"#fff",fontSize:16}}
        ]
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: false, readOnly: true},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        },
        left:0
    },
    calculable : true,
    grid: { 
    	left: '0%',
    	right: '1%',
    	bottom: '2%',
    	containLabel: true
    },
    xAxis: {
    	 axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 },
    	 data: []
    	 },
    yAxis: {
    	axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 }},
    series: []
};
question_happen_region_fetchData(function (data) {
    question_happen_region_chart.setOption({
        xAxis: {
            data: data.question_happen_region_categories
        },
        series: [
        {
            name: "问题发生地区",
            type: "bar", 
            data: data.question_happen_region_sourceData,
            barWidth:40,
            itemStyle:{normal: {color:'#255625',label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (question_happen_region_option && typeof question_happen_region_option === "object") {
    question_happen_region_chart.setOption(question_happen_region_option, true);
}
/*问题发生地区概况end*/

/*信访内容类型概况start*/
var letter_content_type_dom = document.getElementById("letter_content_type_echart");
var letter_content_type_chart=echarts.init(letter_content_type_dom);
letter_content_type_option=null;
function letter_content_type_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            letter_content_type_categories:letter_content_type_bycount_sourceType,
            letter_content_type_sourceData: letter_content_type_bycount_sourceData
        });
    },0);
}
// 初始 option
letter_content_type_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
        {name:"信访内容类型",textStyle:{color:"#fff",fontSize:16}}
        ]
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: false, readOnly: true},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        },
        left:0
    },
    calculable : true,
    grid: { 
    	left: '0%',
    	right: '1%',
    	bottom: '2%',
    	containLabel: true
    },
    xAxis: {
    	 axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 },
    	 data: []
    	 },
    yAxis: {
    	axisLabel : {
    	 	show:true,
    	 	interval: 0,
    	 	rotate: 0,
    	 	margin: 0,
    	 	textStyle:{color: '#fff',fontSize:16}
    	 }},
    series: []
};
letter_content_type_fetchData(function (data) {
    letter_content_type_chart.setOption({
        xAxis: {
            data: data.letter_content_type_categories
        },
        series: [
        {
            name: "信访内容类型",
            type: "bar", 
            data: data.letter_content_type_sourceData,
            barWidth:40,
            itemStyle:{normal: {color:'#C7254E',label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (letter_content_type_option && typeof letter_content_type_option === "object") {
    letter_content_type_chart.setOption(letter_content_type_option, true);
}
/*信访内容类型概况end*/

/*集体访与普通话访占比start*/
var team_common_proportion_dom = document.getElementById("team_common_proportion_echart");
var team_common_proportion_myChart = echarts.init(team_common_proportion_dom);
team_common_proportion_option = null;
team_common_proportion_option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	    	x:'right',
	        orient:'vertical',
	        top:'30',
	        left:'80%',
	        textStyle:{color: '#fff',fontSize:16},
	        data: team_common_proportion_legenddata
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            mark : {show: true},
	            dataView : {show: false, readOnly: false},
	            magicType : {
	                show: true,
	                type: ['pie', 'funnel']
	            },
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    series : [
	        {
	            name:'面积模式',
	            type:'pie',
	            radius : [30, 110],
	            center : ['50%', '50%'],
	            roseType : 'area',
	            data:team_common_proportion_bycount_seriesdata,
	            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{fontSize:16}}}}
	        }
	    ]
	};
if (team_common_proportion_option && typeof team_common_proportion_option === "object") {
    team_common_proportion_myChart.setOption(team_common_proportion_option, true);
}
/*集体访与普通话访占比end*/
/*信访目的占比start*/
var letter_target_proportion_dom = document.getElementById("letter_target_proportion_echart");
var letter_target_proportion_myChart = echarts.init(letter_target_proportion_dom);
letter_target_proportion_option = null;
letter_target_proportion_option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	    	x:'right',
	        orient:'vertical',
	        top:'30',
	        left:'80%',
	        textStyle:{color: '#fff',fontSize:16},
	        data: letter_target_proportion_legenddata
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            mark : {show: true},
	            dataView : {show: false, readOnly: false},
	            magicType : {
	                show: true,
	                type: ['pie', 'funnel']
	            },
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    series : [
	        {
	            name:'面积模式',
	            type:'pie',
	            radius : [30, 110],
	            center : ['50%', '50%'],
	            roseType : 'area',
	            data:letter_target_proportion_bycount_seriesdata,
	            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{fontSize:16}}}}
	        }
	    ]
	};
if (letter_target_proportion_option && typeof letter_target_proportion_option === "object") {
    letter_target_proportion_myChart.setOption(letter_target_proportion_option, true);
}
/*信访目的占比end*/
/*百度地图start*/
var map = new BMap.Map("mapID");    // 创建Map实例
function initMap(){
	var point=new BMap.Point(113.580298,22.377444);
	map.centerAndZoom(point, 18);        // 初始化地图,设置中心点坐标和地图级别
	mapTypeControl();                    //添加地图类型控件
	mapMarker(point);                    //添加地图标注
	typeControl();
	map.setCurrentCity("珠海");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	//设置地图样式
	map.setMapStyle({
  		styleJson:mapstyle
	});
}
function mapTypeControl(){
	var mapType=new Array(BMAP_NORMAL_MAP,BMAP_HYBRID_MAP);
	var mapTypeControl=new BMap.MapTypeControl({mapType});
	map.addControl(mapTypeControl);
}
function mapMarker(point){
	var iconUrl="http://api.map.baidu.com/img/markers.png";
	var size=new BMap.Size(23, 25);
	var options={offset: new BMap.Size(10, 25),imageOffset: new BMap.Size(0, 0 - 10 * 25)};
	var myIcon = new BMap.Icon(iconUrl, size,options);  
	var icon={icon:myIcon};
	var marker = new BMap.Marker(point,icon);
	marker.addEventListener("click", function(){
		var infoWin = new BMap.InfoWindow("地址");//定义显示信息
		this.openInfoWindow(infoWin);});
    map.addOverlay(marker);
}
function typeControl(){
	StaticsControl.prototype = new BMap.Control();       // 通过JavaScript的prototype属性继承于BMap.Control
    StaticsControl.prototype.initialize = function (map) {
    	var div = document.createElement("div");     // 创建一个DOM元素  
    	var zblabel = document.createElement("label");
    zblabel.innerHTML = "在办"; 
    	zblabel.onclick = function () {zaiban();}
    div.appendChild(zblabel);
    	var bjlabel = document.createElement("label");
    bjlabel.innerHTML = "办结"; 
    	bjlabel.onclick = function () {banjie();}
    div.appendChild(bjlabel);
    	map.getContainer().appendChild(div);   // 添加DOM元素到地图中
    	return div;                          // 将DOM元素返回
    }
    var staticsCtrl = new StaticsControl();   // 创建控件实例
    map.addControl(staticsCtrl);     // 添加到地图当中  
}
function StaticsControl() {
	this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
	this.defaultOffset = new BMap.Size(10, 10);
}
function zaiban() {
	alert("在办");
}
function banjie() {
	alert("办结");
}
/*百度地图end*/

   