$(function(){
	var map = new BMap.Map("mapID");
	initMap(map);
	show_gridmember(gridmember_list);
	/*全部*/
	$("#all_gridmember").click(function(){
		show_gridmember(gridmember_list);
	});
	/*搜索*/
	$("#search_gridmember").click(function(){
		var search_content = $("#search_gridmember_input").val();
		if(search_content==""){
			show_gridmember(gridmember_list);
		}else{
			var newlist = [];
			for(var g=0;g<gridmember_list.length;g++){
				if(gridmember_list[g].name.startsWith(search_content)){
					var newmap = {"name":gridmember_list[g].name,"id":gridmember_list[g].id};
					newlist.push(newmap);
				}
			}
			show_gridmember(newlist);
		}
	});
});
	function show_gridmember(gridmember_lists){
		var gridmember_list_html = "<tr>";
		for(var g=0;g<gridmember_lists.length;g++){
			gridmember_list_html += "<td><div id='"+gridmember_lists[g].id+"' onmouseover='mousein(this)'; onmouseout='mouseout(this)'><img src='../images/user_head.png'/><span>"+gridmember_lists[g].name+"</span></div></td>";
			if(g!=0 && (g+1)%10==0){
			gridmember_list_html += "</tr><tr>";
			}
		}
		$(".gridmember_table").html(gridmember_list_html+"</tr>");
	}
	function mousein(obj){
		$(obj).css("backgroundColor","#269ABC");
	}
	function mouseout(obj){
		$(obj).css("backgroundColor","#204D74");
	}
/*百度地图start*/
function initMap(map){
	var point=new BMap.Point(113.580298,22.377444);
	map.centerAndZoom(point, 18);        // 初始化地图,设置中心点坐标和地图级别
	mapTypeControl(map);                    //添加地图类型控件
	mapMarker(point,map);                    //添加地图标注
	typeControl(map);
	map.setCurrentCity("珠海");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	//设置地图样式
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