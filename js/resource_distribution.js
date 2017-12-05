$(function(){
	initMap();
	createResource_distribution_dz(resource_distribution_dz_legend,resource_distribution_dz_type,resource_distribution_dz_value1,resource_distribution_dz_value2,resource_distribution_dz_value3);
	createResource_distribution_all_dz(resource_distribution_all_dz_icon,resource_distribution_all_dz_title,resource_distribution_all_dz_value);
	createResource_distribution_device_dz(resource_distribution_device_dz_icon,resource_distribution_device_dz_title,resource_distribution_device_dz_value);
	createResource_distribution_population_sum_dz(resource_distribution_population_sum_dz_icon,resource_distribution_population_sum_dz_title,resource_distribution_population_sum_dz_value);
});

/*资源分布情况-单轴统计start*/
function createResource_distribution_dz(legend,type,value1,value2,value3){
	creatResourceBottomDiv_dz(legend);
	for(var i=0;i<type.length;i++){
		creatResourceDiv_dz(type[i],value1[i],value2[i],value3[i]);
	}
}
function creatResourceDiv_dz(title,value1,value2,value3){
	var resource_distribution_content_div=$("<div></div>").appendTo("#resource_distribution_div_echart");
	var resource_distribution_content_ul=$("<ul></ul>").appendTo(resource_distribution_content_div);
	var resource_distribution_title_li=$("<li></li>").appendTo(resource_distribution_content_ul);
	var resource_distribution_title_div=$("<div><div>"+title+"&nbsp;</div></div>").appendTo(resource_distribution_title_li);
	var resource_distribution_value_li=$("<li></li>").appendTo(resource_distribution_content_ul);
	var resource_distribution_value_div=$("<div><div style='color:green;'>"+value1+"</div><div style='color:yellow;'>"+value2+"</div><div style='color:red;'>"+value3+"</div></div>").appendTo(resource_distribution_value_li);
	resource_distribution_content_div.addClass("resource_distribution_contentdiv");
	resource_distribution_title_div.addClass("resource_distribution_title_div");
	resource_distribution_value_div.addClass("resource_distribution_value_div");
}
function creatResourceBottomDiv_dz(legend){
	$("<div style='background-color:green;width:3%;height:100%;'></div>").appendTo("#resource_distribution_bottom_div");
	$("<div style='width:10%;height:100%;color:snow;'>&nbsp;&nbsp;"+legend[0]+"</div>").appendTo("#resource_distribution_bottom_div");
	$("<div style='background-color:yellow;width:3%;height:100%;'></div>").appendTo("#resource_distribution_bottom_div");
	$("<div style='width:10%;height:100%;color:snow;'>&nbsp;&nbsp;"+legend[1]+"</div>").appendTo("#resource_distribution_bottom_div");
	$("<div style='background-color:red;width:3%;height:100%;'></div>").appendTo("#resource_distribution_bottom_div");
	$("<div style='width:10%;height:100%;color:snow;'>&nbsp;&nbsp;"+legend[2]+"</div>").appendTo("#resource_distribution_bottom_div");
}
/*资源分布情况-单轴统计end*/

/*资源概括-单轴统计start*/
function createResource_distribution_all_dz(icon,title,value){
	for(var i=0;i<icon.length;i++){
		creatResourceDiv_all_dz(icon[i],title[i],value[i]);
	}
}
function creatResourceDiv_all_dz(icon,title,value){
	var resource_distribution_all_content_div=$("<div></div>").appendTo("#resource_distribution_all_div_echart");
	var resource_distribution_all_icon_div=$("<div><img src='"+icon+"'></img></div>").appendTo(resource_distribution_all_content_div);
	var resource_distribution_all_title_div=$("<div>"+title+"</div>").appendTo(resource_distribution_all_content_div);
	var resource_distribution_all_value_div=$("<div>&nbsp;"+value+"</div>").appendTo(resource_distribution_all_content_div);
	resource_distribution_all_content_div.addClass("resource_distribution_all_content_div");
	resource_distribution_all_icon_div.addClass("resource_distribution_all_icon_div");
	resource_distribution_all_title_div.addClass("resource_distribution_all_title_div");
	resource_distribution_all_value_div.addClass("resource_distribution_all_value_div");
}
/*资源概括-单轴统计end*/

/*资源状态占比-饼图start*/
var resource_distribution_status_pie_dom = document.getElementById("resource_distribution_status_pie_echart");
var resource_distribution_status_pie_myChart = echarts.init(resource_distribution_status_pie_dom);
resource_distribution_status_pie_option = null;
resource_distribution_status_pie_option = {
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
	        data: resource_distribution_status_pie_legend
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
	            center : ['35%', '50%'],
	            roseType : 'area',
	            data:resource_distribution_status_pie_seriesdata,
	            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{fontSize:16}}}}
	        }
	    ]
	};
if (resource_distribution_status_pie_option && typeof resource_distribution_status_pie_option === "object") {
    resource_distribution_status_pie_myChart.setOption(resource_distribution_status_pie_option, true);
}
/*资源状态占比-饼图end*/

/*地区镇街人口分布-柱状图start*/
var area_people_distribution_bar_dom = document.getElementById("area_people_distribution_bar_echart");
var area_people_distribution_bar_chart=echarts.init(area_people_distribution_bar_dom);
area_people_distribution_bar_option=null;
function area_people_distribution_bar_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            area_people_distribution_bar_categories:area_people_distribution_bar_sourceType,
            area_people_distribution_bar_Data: area_people_distribution_bar_Data
        });
    },0);
}
// 初始 option
area_people_distribution_bar_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
        {name:"人口数量",textStyle:{color:"#fff",fontSize:16}}
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
area_people_distribution_bar_fetchData(function (data) {
    area_people_distribution_bar_chart.setOption({
        xAxis: {
            data: data.area_people_distribution_bar_categories
        },
        series: [
        {
            name: "人口数量",
            type: "bar", 
            data: data.area_people_distribution_bar_Data,
            barWidth:40,
            itemStyle:{normal: {color:'#43CD80',label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (area_people_distribution_bar_option && typeof area_people_distribution_bar_option === "object") {
    area_people_distribution_bar_chart.setOption(area_people_distribution_bar_option, true);
}
/*地区镇街人口分布-柱状图end*/

/*设备概括-单轴统计start*/
function createResource_distribution_device_dz(icon,title,value){
	for(var i=0;i<icon.length;i++){
		creatResourceDiv_device_dz(icon[i],title[i],value[i]);
	}
}
function creatResourceDiv_device_dz(icon,title,value){
	var resource_distribution_device_content_div=$("<div></div>").appendTo("#resource_distribution_device_echart");
	var resource_distribution_device_icon_div=$("<div><img src='"+icon+"'></img></div>").appendTo(resource_distribution_device_content_div);
	var resource_distribution_device_title_div=$("<div>"+title+"</div>").appendTo(resource_distribution_device_content_div);
	var resource_distribution_device_value_div=$("<div>&nbsp;"+value+"</div>").appendTo(resource_distribution_device_content_div);
	resource_distribution_device_content_div.addClass("resource_distribution_all_content_div");
	resource_distribution_device_icon_div.addClass("resource_distribution_all_icon_div");
	resource_distribution_device_title_div.addClass("resource_distribution_all_title_div");
	resource_distribution_device_value_div.addClass("resource_distribution_all_value_div");
}
/*设备概括-单轴统计end*/

/*常驻人口比-饼图start*/
var resident_population_proportion_pie_dom = document.getElementById("resident_population_proportion_pie_echart");
var resident_population_proportion_pie_myChart = echarts.init(resident_population_proportion_pie_dom);
resident_population_proportion_pie_option = null;
resident_population_proportion_pie_option = {
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
	        data: resident_population_proportion_pie_legend
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
	            center : ['35%', '50%'],
	            data:resident_population_proportion_pie_seriesdata,
	            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{fontSize:16}}}}
	        }
	    ]
	};
if (resident_population_proportion_pie_option && typeof resident_population_proportion_pie_option === "object") {
    resident_population_proportion_pie_myChart.setOption(resident_population_proportion_pie_option, true);
}
/*常驻人口比-饼图end*/

/*人口年龄比例-饼图start*/
var population_age_proportion_pie_dom = document.getElementById("population_age_proportion_pie_echart");
var population_age_proportion_pie_myChart = echarts.init(population_age_proportion_pie_dom);
population_age_proportion_pie_option = null;
population_age_proportion_pie_option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	    		x:'right',
	        orient:'vertical',
	        top:'30',
	        left:'82%',
	        textStyle:{color: '#fff',fontSize:16},
	        data: population_age_proportion_pie_legend
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
	            center : ['35%', '50%'],
	            data:population_age_proportion_pie_seriesdata,
	            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{fontSize:16}}}}
	        }
	    ]
	};
if (population_age_proportion_pie_option && typeof population_age_proportion_pie_option === "object") {
    population_age_proportion_pie_myChart.setOption(population_age_proportion_pie_option, true);
}
/*人口年龄比例-饼图end*/

/*人口总数-单轴统计start*/
function createResource_distribution_population_sum_dz(icon,title,value){
	for(var i=0;i<icon.length;i++){
		creatResourceDiv_population_sum_dz(icon[i],title[i],value[i]);
	}
}
function creatResourceDiv_population_sum_dz(icon,title,value){
	var resource_distribution_population_sum_content_div=$("<div></div>").appendTo("#population_sum_div");
	var resource_distribution_population_sum_icon_div=$("<div><img src='"+icon+"'></img></div>").appendTo(resource_distribution_population_sum_content_div);
	var resource_distribution_population_sum_title_div=$("<div>"+title+"</div>").appendTo(resource_distribution_population_sum_content_div);
	var resource_distribution_population_sum_value_div=$("<div>&nbsp;"+value+"</div>").appendTo(resource_distribution_population_sum_content_div);
	resource_distribution_population_sum_content_div.addClass("resource_distribution_all_content_div");
	resource_distribution_population_sum_icon_div.addClass("resource_distribution_all_icon_div");
	resource_distribution_population_sum_title_div.addClass("resource_distribution_all_title_div");
	resource_distribution_population_sum_value_div.addClass("resource_distribution_all_value_div");
}
/*人口总数-单轴统计end*/

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
	//设置地图样式为夜视
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

   