$(function(){
	var map = new BMap.Map("mapID");
	initMap(map);
	
	//添民族分布表、户籍地分布表数据
	var add_nation_html = "";
	for(var m=0;m<nation_areaType.length;m++){
		add_nation_html += "<td style='align:center;'><ul onmouseover='mousein(this)'; onmouseout='mouseout(this)';><li>"+nation_areaType[m]+"</li><li>("+nation_Data[m]+")</li></ul></td>";
		if(m!=0 && (m+1)%10==0){
			add_nation_html += "</tr><tr>";
		}
	}
	$("#table_nation").html("<tr>"+add_nation_html+"</tr>");
	var add_register_html = "";
	for(var r=0;r<register_areaType.length;r++){
		add_register_html += "<td><ul onmouseover='mousein(this)'; onmouseout='mouseout(this)';><li>"+register_areaType[r]+"</li><li>("+register_Data[r]+")</li></ul></td>";
		if(r!=0 && (r+1)%10==0){
			add_register_html += "</tr><tr>";
		}
	}
	$("#table_register").html("<tr>"+add_register_html+"</tr>");
	
	
	
	$("#popolation_analysis").click(function(){
		$("#popolation_analysis").css("background-color","#204D74");
		$("#popolation_list").css("background-color","");
		$("#senior_search").css("background-color","");
		
		$("#popolation_analysis_div").css("display","");
		$("#senior_search_div").css("display","none");
	});
	$("#popolation_list").click(function(){
		$("#popolation_analysis").css("background-color","");
		$("#popolation_list").css("background-color","#204D74");
		$("#senior_search").css("background-color","");
		
		$("#popolation_analysis_div").css("display","none");
		$("#senior_search_div").css("display","none");
	});
	$("#senior_search").click(function(){
		$("#popolation_analysis").css("background-color","");
		$("#popolation_list").css("background-color","");
		$("#senior_search").css("background-color","#204D74");
		
		$("#senior_search_div").css("display","");
		$("#popolation_analysis_div").css("display","none");
	});
	
	/*设置高级查询td的class属性*/
	$(".senior_search_div_table").find("tr").each(function(i){
		$(this).find("td").each(function(i){
			if(i==0){
				$(this).addClass("left_td");
			}else if(i==1){
				$(this).addClass("center_td");
			}else if(i==2){
				$(this).addClass("right_td");
			}
		});
	});
});

	function mousein(obj){
		obj.style.backgroundColor = '#269ABC';
	}
	function mouseout(obj){
		obj.style.backgroundColor = '#204D74';
	}

/*民族柱状图start*/
var nation_dom = document.getElementById("nation_echart");
var nation_chart=echarts.init(nation_dom);
nation_option=null;
function  nation_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            nation_categories:nation_areaType,
            nation_data: nation_Data
        });
    },0);
}
// 初始 option
nation_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
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
    	right: '0%',
    	bottom: '0%',
    	top: '5%',
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
nation_fetchData(function (data) {
    nation_chart.setOption({
        xAxis: {
            data: data.nation_categories
        },
        series: [
        {
            name: "民族",
            type: "bar", 
            data: data.nation_data,
            barWidth:30,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (nation_option && typeof nation_option === "object") {
//	数据穿透
//  myChart.on('click', function (params) {
//  if(params.seriesName=="在办案件"&&params.data>0){}
//  });
    nation_chart.setOption(nation_option, true);
}
/*民族柱状图end*/
/*户籍地柱状图start*/
var register_dom = document.getElementById("register_echart");
var register_chart=echarts.init(register_dom);
register_option=null;
function  register_fetchData(cb) {
    setTimeout(function () {
    	       cb({
            register_categories:register_areaType,
            register_data: register_Data
        });
    },0);
}
// 初始 option
register_option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis'
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
    	right: '0%',
    	bottom: '0%',
    	top: '5%',
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
register_fetchData(function (data) {
    register_chart.setOption({
        xAxis: {
            data: data.register_categories
        },
        series: [
        {
            name: "民族",
            type: "bar", 
            data: data.register_data,
            barWidth:30,
            itemStyle:{normal: {label:{show: true, position: 'top',textStyle:{color:'#fff'}}}}
        }]
    });
});
if (register_option && typeof register_option === "object") {
//	数据穿透
//  myChart.on('click', function (params) {
//  if(params.seriesName=="在办案件"&&params.data>0){}
//  });
    register_chart.setOption(register_option, true);
}
/*户籍地柱状图end*/
/*百度地图start*/    // 创建Map实例
function initMap(map){
	var point=new BMap.Point(113.580298,22.377444);
	map.centerAndZoom(point, 18);        // 初始化地图,设置中心点坐标和地图级别
	mapTypeControl(map);                    //添加地图类型控件
	mapMarker(point,map);                    //添加地图标注
	typeControl(map);
	map.setCurrentCity("珠海");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	//设置地图样式为夜视
	map.setMapStyle({
  		styleJson:mapstyle
	});
}
function mapTypeControl(map){
	var mapType=new Array(BMAP_NORMAL_MAP,BMAP_HYBRID_MAP);
	var mapTypeControl=new BMap.MapTypeControl({mapType});
	map.addControl(mapTypeControl);
}
function mapMarker(point,map){
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
function typeControl(map){
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