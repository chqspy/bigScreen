$(function(){
	initMap();
	buildeventtable();
	init_event_detail_li();
});

/*事件处理情况-柱状图start*/
var event_deal_bar_dom = document.getElementById("event_deal_bar_echart");
var event_deal_bar_chart=echarts.init(event_deal_bar_dom);
event_deal_bar_option=null;
function  event_deal_bar_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            event_deal_bar_categories:event_deal_bar_areaType,
            event_deal_bar_zbdata: event_deal_bar_zbData,
            event_deal_bar_bjdata:event_deal_bar_bjData
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
        {name:"在办案件",textStyle:{color:"#fff",fontSize:16}},
        {name:"办结案件",textStyle:{color:"#fff",fontSize:16}}
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
            name: "在办案件",
            type: "bar", 
            data: data.event_deal_bar_zbdata,
            barWidth:30,
            itemStyle:{normal: {color:'#EEEE00',label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        },
        {
            name: "办结案件",
            type: "bar", 
            data: data.event_deal_bar_bjdata,
            barWidth:30,
            itemStyle:{normal: {color:'#7CCD7C',label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
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
/*事件处理情况-柱状图end*/

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
event_count_board_all_option.series[0].data[0].value = event_count_board_all_alldata;
event_count_board_all_chart.setOption(event_count_board_all_option, true);
/*事件统计-仪表盘end*/

/*事件来源统计-柱状图start*/
var event_source_bar_dom = document.getElementById("event_source_bar_echart");
var event_source_bar_chart=echarts.init(event_source_bar_dom);
event_source_bar_option=null;
function event_source_bar_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            event_source_bar_categories:event_source_bar_sourceType,
            event_source_bar_sourceData: event_source_bar_sourceData
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
	            data:event_type_pie_seriesdata,
	            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{fontSize:16}}}}
	        }
	    ]
	};
if (event_type_pie_option && typeof event_type_pie_option === "object") {
    event_type_pie_myChart.setOption(event_type_pie_option, true);
}
/*事件类别统计-饼图end*/

/*事件处理情况-饼图start*/
var event_deal_pie_dom = document.getElementById("event_deal_pie_echart");
var event_deal_pie_myChart = echarts.init(event_deal_pie_dom);
event_deal_pie_option = null;
event_deal_pie_option = {
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
		        data: event_deal_pie_legenddata
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
	            radius : [30, 90],
	            center : ['50%', '50%'],
	            roseType : 'area',
	            data:event_deal_pie_seriesdata,
	            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{fontSize:16}}}}
	        }
	    ]
	};
if (event_deal_pie_option && typeof event_deal_pie_option === "object") {
    event_deal_pie_myChart.setOption(event_deal_pie_option, true);
}
/*事件处理情况-饼图end*/

/*事件处理记录表格-start*/
function buildeventtable() {
    var event_deal_table_jsonData=JSON.parse(event_deal_table_jsonstr);
    var columnlg = event_deal_table_columnname.length,rowlg = event_deal_table_jsonData.length,i,j,row,columns=[],data=[];
    for (i = 0; i < columnlg; i++) {
        columns.push({
        title: event_deal_table_columnname[i]
        });
    }
    for (i = 0; i < rowlg; i++) {
        row = {};
        row[0] = event_deal_table_jsonData[i].id;
        row[1] = event_deal_table_jsonData[i].name;
        row[2] = event_deal_table_jsonData[i].sex;
        row[3] = event_deal_table_jsonData[i].address;
        data.push(row);
    }
    $('#event_table').bootstrapTable('destroy').bootstrapTable({
        columns: columns,
        data: data
    });
    $("#event_table").find("tr").each(function(num){
        $(this).bind("click",function(){
        var id=$(this).children().eq(0).text();
        $("#event_table_detail_ul").empty();
        showDetail(num);
        });
    });
}
function init_event_detail_li(){
	$("#event_table").find("tr").eq(0).find("th").each(function(i){
		var li="<li>"+$(this).text()+":空"+"</li>";
		$("#event_table_detail_ul").append(li);
	});
}
function showDetail(i){
	$("#event_table").find("tr").eq(i).find("td").each(function(j){
		var thvalue=$("#event_table").find("tr").eq(0).find("th").eq(j).text();
		var li="<li>"+thvalue+":"+$(this).text()+"</li>";
		$("#event_table_detail_ul").append(li);
	});
}
/*事件处理记录表格-end*/

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
