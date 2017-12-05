$(function(){
	initMap();	
	createResource_distribution_all_dz(region_check_evaluate_icon,region_check_evaluate_title,region_check_evaluate_value);
});

/*区域考核评价start*/
function createResource_distribution_all_dz(icon,title,value){
	for(var i=0;i<icon.length;i++){
		creatResourceDiv_all_dz(icon[i],title[i],value[i]);
	}
}
function creatResourceDiv_all_dz(icon,title,value){
	var resource_distribution_all_content_div=$("<div></div>").appendTo("#region_check_evaluate_echart");
	var resource_distribution_all_icon_div=$("<div><img src='"+icon+"'></img></div>").appendTo(resource_distribution_all_content_div);
	var resource_distribution_all_title_div=$("<div>"+title+"</div>").appendTo(resource_distribution_all_content_div);
	var resource_distribution_all_value_div=$("<div>&nbsp;"+value+"</div>").appendTo(resource_distribution_all_content_div);
	resource_distribution_all_content_div.addClass("resource_distribution_all_content_div");
	resource_distribution_all_icon_div.addClass("resource_distribution_all_icon_div");
	resource_distribution_all_title_div.addClass("resource_distribution_all_title_div");
	resource_distribution_all_value_div.addClass("resource_distribution_all_value_div");
}
/*区域考核评价-柱状图end*/

/*总体评分-仪表盘start*/
var total_score_dom = document.getElementById("total_score_echart");
var total_score_chart=echarts.init(total_score_dom);
total_score_option=null;
total_score_option = {
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
        	name: '总体评分',
        	type: 'gauge',
        	center : ['50%', '50%'],
        	min:0,
        	max:100,
        	data: [{value: 0, name: '总体评分'}]
        	}
    ]
};
total_score_option.series[0].data[0].value = total_score_value;
total_score_chart.setOption(total_score_option, true);
/*总体评分-仪表盘end*/

/*评分统计-饼状图start*/
var score_count_dom = document.getElementById("score_count_echart");
var score_count_chart=echarts.init(score_count_dom);
score_count_option=null;
// 初始 option
score_count_option = {
   tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        x : 'center',
	        y : 'bottom'
	    },
	    legend: {
	    		x:'right',
	        orient:'vertical',
	        top:'30',
	        left:'80%',
	        textStyle:{color: '#fff',fontSize:16},
	        data: score_count_option_pie_legend
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
	            data:score_count_option_pie_seriesdata,
	            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{fontSize:16}}}}
	        }
	    ]
};
if (score_count_option && typeof score_count_option === "object") {
    score_count_chart.setOption(score_count_option, true);
}
/*评分统计-饼状图end*/

/*镇/街级单位的考核评价评分排名-柱状图start*/
var region_unit_score_dom = document.getElementById("region_unit_score_echart");
var region_unit_score_chart=echarts.init(region_unit_score_dom);
region_unit_score_option=null;
function  region_unit_score_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            region_unit_score_categories:region_unit_score_areaType,
            region_unit_score_data: region_unit_score_Data
        });
    },1000);
}
// 初始 option
region_unit_score_option = {
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
region_unit_score_fetchData(function (data) {
    region_unit_score_chart.setOption({
        xAxis: {
            data: data.region_unit_score_categories
        },
        series: [
        {
            name: "评分排名",
            type: "bar", 
            data: data.region_unit_score_data,
            barWidth:30,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (region_unit_score_option && typeof region_unit_score_option === "object") {
//	数据穿透
//  myChart.on('click', function (params) {
//  if(params.seriesName=="在办案件"&&params.data>0){}
//  });
    region_unit_score_chart.setOption(region_unit_score_option, true);
}
/*镇/街级单位的考核评价评分排名-柱状图end*/

/*区域行政能力-雷达图start*/
var region_administration_ability_dom = document.getElementById("region_administration_ability_echart");
var region_administration_ability_myChart = echarts.init(region_administration_ability_dom);

var lineStyle = {
    normal: {
        width: 2,
        opacity: 0.5
    }
};

region_administration_ability_option = null;
region_administration_ability_option = {
   /* backgroundColor: '#161627',*/
    /* title: {
       text: 'AQI - 雷达图',
        left: 'center',
        textStyle: {
            color: '#eee'
        }
    },*/
    legend: {
        bottom: 5,
        data: ['香洲区','金湾区','斗门区','横琴新区'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        selectedMode: 'single'
    },
    // visualMap: {
    //     show: true,
    //     min: 0,
    //     max: 20,
    //     dimension: 6,
    //     inRange: {
    //         colorLightness: [0.5, 0.8]
    //     }
    // },
    radar: {
        indicator: [
            {name: '处理案件平均时间', max: 100},
            {name: '超时处理率', max: 100},
            {name: '结案率', max: 100},
            {name: '结案总数', max: 100},
            {name: '群众满意度', max: 100}
        ],
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                /*color: 'rgb(238, 197, 102)'*/
               color: 'rgb(238, 197, 102)'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '香洲区',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataXZQ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#F9713C'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
        {
            name: '金湾区',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataJWQ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#B3E4A1'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.05
                }
            }
        },
        {
            name: '斗门区',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataDMQ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: 'rgb(238, 197, 102)'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.05
                }
            }
        },
        {
            name: '横琴新区',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataHQXQ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: 'rgb(238, 197, 102)'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.05
                }
            }
        }
    ]
};
if (region_administration_ability_option && typeof region_administration_ability_option === "object") {
    region_administration_ability_myChart.setOption(region_administration_ability_option, true);
}
/*区域行政能力-雷达图end*/

/*群众满意度-start*/
var masses_satisfied_dom = document.getElementById("masses_satisfied_echart");
var masses_satisfied_myChart = echarts.init(masses_satisfied_dom);
masses_satisfied_option = null;
masses_satisfied_option = {
	   tooltip : {
	        trigger: 'axis'
	    },
	    grid: {
            x:'3%',  
            y:30,  
            x2:100,  
            y2:10,
            containLabel: true
        },
	    legend: {
	        orient:'vertical',
	        x:'right',
	        y:'center',
	        //padding:[0,0,0,0],
	        itemGap:5,
	        itemWidth: 13,
	        itemHeight: 8,
	        /*data:['香洲区','金湾区','斗门区','横琴新区']*/
	        data:masses_satisfied_legend_data
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
	            axisTick : false,
	            axisLine : {
	            	lineStyle : { width: 0}
	            },
	            axisLabel:{
	            	//rotate:-35,
	            	interval:0
	            },
	            splitLine: {
	            	show:true,
					lineStyle:{
					    width: 1,
					    type: 'solid'
					}
				},
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisTick : false,
	            splitLine: {
	            	show:true,
					lineStyle:{
					    width: 1,
					    type: 'solid'
					}
				},
	            axisLine : {
	            	lineStyle : { width: 0}
	            }
	        }
	    ],
	    series : masses_satisfied_series
	};
if (masses_satisfied_option && typeof masses_satisfied_option === "object") {
    masses_satisfied_myChart.setOption(masses_satisfied_option, true);
}
/*群众满意度-end*/

/*岗位考核评分排名-柱状图start*/
var station_examine_rank_dom = document.getElementById("station_examine_rank_echart");
var station_examine_rank_chart=echarts.init(station_examine_rank_dom);
station_examine_rank_option=null;
function  station_examine_rank_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            station_examine_rank_categories:station_examine_rank_areaType,
            station_examine_rank_data: station_examine_rank_Data
        });
    },1000);
}
// 初始 option
station_examine_rank_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
        {name:"评分排名",textStyle:{color:"#fff",fontSize:16}}
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
station_examine_rank_fetchData(function (data) {
    station_examine_rank_chart.setOption({
        xAxis: {
            data: data.station_examine_rank_categories
        },
        series: [
        {
            name: "评分排名",
            type: "bar", 
            data: data.station_examine_rank_data,
            barWidth:30,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (station_examine_rank_option && typeof station_examine_rank_option === "object") {
//	数据穿透
//  myChart.on('click', function (params) {
//  if(params.seriesName=="在办案件"&&params.data>0){}
//  });
    station_examine_rank_chart.setOption(station_examine_rank_option, true);
}
/*岗位考核评分排名-柱状图end*/

/*岗位考核评分统计-饼图start*/
var station_examine_count_dom = document.getElementById("station_examine_count_echart");
var station_examine_count_chart=echarts.init(station_examine_count_dom);
station_examine_count_option=null;
// 初始 option
station_examine_count_option = {
   tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        x : 'center',
	        y : 'bottom'
	    },
	    legend: {
	    		x:'right',
	        orient:'vertical',
	        top:'30',
	        left:'80%',
	        textStyle:{color: '#fff',fontSize:16},
	        data: station_examine_count_option_pie_legend
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
	            data:station_examine_count_option_pie_seriesdata,
	            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{fontSize:16}}}}
	        }
	    ]
};
if (station_examine_count_option && typeof station_examine_count_option === "object") {
    station_examine_count_chart.setOption(station_examine_count_option, true);
}
/*岗位考核评分统计-饼图end*/

/*岗位行政能力-雷达图start*/
var station_administration_ability_dom = document.getElementById("station_administration_ability_echart");
var station_administration_ability_myChart = echarts.init(station_administration_ability_dom);

var lineStyle = {
    normal: {
        width: 2,
        opacity: 0.5
    }
};

station_administration_ability_option = null;
station_administration_ability_option = {
   
    legend: {
        bottom: 5,
        data: ['岗位行政能力'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        selectedMode: 'single'
    },
    radar: {
        indicator: [
            {name: '岗位间协调配合', max: 100},
            {name: '工作效率', max: 100},
            {name: '工作质量', max: 100},
            {name: '工作纪律', max: 100},
            {name: '工作执行力', max: 100},
            {name: '工作创新与拓展', max: 100},
            {name: '业务量', max: 100}
        ],
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                /*color: 'rgb(238, 197, 102)'*/
               color: 'rgb(238, 197, 102)'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '岗位行政能力',
            type: 'radar',
            lineStyle: lineStyle,
            data: GWXZNL,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#F9713C'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        }
    ]
};
if (station_administration_ability_option && typeof station_administration_ability_option === "object") {
    station_administration_ability_myChart.setOption(station_administration_ability_option, true);
}
/*岗位行政能力-雷达图end*/

/*岗位工作效率-折线图start*/
var station_work_efficiency_dom = document.getElementById("station_work_efficiency_echart");
var station_work_efficiency_myChart = echarts.init(station_work_efficiency_dom);
station_work_efficiency_option = null;
station_work_efficiency_option = {
	   tooltip : {
	        trigger: 'axis'
	    },
	    grid: {
            x:'3%',  
            y:30,  
            x2:100,  
            y2:10,
            containLabel: true
        },
	    legend: {
	        orient:'vertical',
	        x:'right',
	        y:'center',
	        //padding:[0,0,0,0],
	        itemGap:5,
	        itemWidth: 13,
	        itemHeight: 8,
	        /*data:['香洲区','金湾区','斗门区','横琴新区']*/
	        data:station_work_efficiency_legend_data
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
	            axisTick : false,
	            axisLine : {
	            	lineStyle : { width: 0}
	            },
	            axisLabel:{
	            	//rotate:-35,
	            	interval:0
	            },
	            splitLine: {
	            	show:true,
					lineStyle:{
					    width: 1,
					    type: 'solid'
					}
				},
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisTick : false,
	            splitLine: {
	            	show:true,
					lineStyle:{
					    width: 1,
					    type: 'solid'
					}
				},
	            axisLine : {
	            	lineStyle : { width: 0}
	            }
	        }
	    ],
	    series : station_work_efficiency_series
	};
if (station_work_efficiency_option && typeof station_work_efficiency_option === "object") {
    station_work_efficiency_myChart.setOption(station_work_efficiency_option, true);
}
/*岗位工作效率-折线图end*/

/*岗位业务量-柱状图start*/
var station_business_amount_dom = document.getElementById("station_business_amount_echart");
var station_business_amount_chart=echarts.init(station_business_amount_dom);
station_business_amount_option=null;
function  station_business_amount_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            station_business_amount_categories:station_business_amount_areaType,
            station_business_amount_data: station_business_amount_Data
        });
    },1000);
}
// 初始 option
station_business_amount_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
        {name:"岗位业务量",textStyle:{color:"#fff",fontSize:16}}
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
station_business_amount_fetchData(function (data) {
    station_business_amount_chart.setOption({
        xAxis: {
            data: data.station_business_amount_categories
        },
        series: [
        {
            name: "岗位业务量",
            type: "bar", 
            data: data.station_business_amount_data,
            barWidth:30,
            itemStyle:{normal: {color:'#E38D13',label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (station_business_amount_option && typeof station_business_amount_option === "object") {
//	数据穿透
//  myChart.on('click', function (params) {
//  if(params.seriesName=="在办案件"&&params.data>0){}
//  });
    station_business_amount_chart.setOption(station_business_amount_option, true);
}
/*岗位业务量-柱状图end*/

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

   