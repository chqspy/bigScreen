$(function(){
	var map = new BMap.Map("mapID");
	initMap(map);
	/*添加按钮*/
	$("#add_activity_scheme").click(function(){
		/*$("#show_activity_scheme_div").css("display","none");
		$("#creat_new_activity_scheme_div").css("display","");*/
		
		$("#scheme_id").val("");
		$("#scheme_name").val("");
		$("#scheme_content").val("");
		$("#scheme_cost").val("");
		$("#join_personnum").val("");
		showlayer();
		
	});
		//close layer
		/*$("#pop").click(function(){
		    $("#layer,#pop").hide();
		})*/
		$("#layer").click(function(){
		    $("#layer,#pop").hide();
		})
		
		
	/*返回*/
	$("#returnbutton").click(function(){
		$("#layer,#pop").hide();
	});
	/*保存*/
	$("#savebutton").click(function(){
		var scheme_name = $("#scheme_name").val();
		var scheme_id = $("#scheme_id").val();
		var newmap = {};
		for(var c=0;c<activity_scheme.length;c++){
			if(scheme_id==activity_scheme[c].id){
				activity_scheme[c].name = scheme_name;
				newmap = null;
				break;
			}else{
				newmap = {"name":scheme_name,"id":scheme_id};
			}
		}
		if(newmap != null){
			activity_scheme.push(newmap);
		}
		show_activity_scheme(activity_scheme);
		alert("保存新方案成功");
		setTimeout(function(){$("#layer,#pop").hide();},100);
		
	});
	/*编辑*/
	$("#savebutton").click(function(){
		/*$("#show_activity_scheme_div").css("display","");
		$("#creat_new_activity_scheme_div").css("display","none");*/
		showlayer();
	});
	show_activity_scheme(activity_scheme);
});
	function mousein(obj){
		$(obj).css("backgroundColor","#269ABC");
		$(obj).find(".activity_scheme_tool_div").each(function(i){
			$(this).css("display","");
		});
		
	}
	function mouseout(obj){
		$(obj).css("backgroundColor","#204D74");
		$(obj).find(".activity_scheme_tool_div").each(function(i){
			$(this).css("display","none");
		});
	}
	function edit_as(activity_id){
		/*$("#show_activity_scheme_div").css("display","none");
		$("#creat_new_activity_scheme_div").css("display","");*/
		showlayer();
		$("#scheme_id").val(activity_id);
		var newstr = [];
		for(var b=0;b<activity_scheme.length;b++){
			if(activity_id==activity_scheme[b].id){
				$("#scheme_name").val(activity_scheme[b].name);
			}
		}
	};
	function delete_as(activity_id){
		var newstr = [];
		for(var b=0;b<activity_scheme.length;b++){
			if(activity_id==activity_scheme[b].id){
				
			}else{
				var newmap = {"name":activity_scheme[b].name,"id":activity_scheme[b].id};
				newstr.push(newmap);
			}
		}
		activity_scheme = newstr;
		show_activity_scheme(activity_scheme);
	};
	/*显示活动方案*/
	function show_activity_scheme(activity_scheme_list){
		var activity_scheme_html = "<tr>";
	for(var a=0;a<activity_scheme_list.length;a++){
		activity_scheme_html += "<td class='activity_scheme_table_td'>"
								+"<div class='activity_scheme_table_td_div' onmouseover='mousein(this)'; onmouseout='mouseout(this)';>"
								+"<div class='activity_scheme_table_td_span'>"
								+"<span>"+activity_scheme_list[a].name+"</span>"
								+"</div>"
								+"<div class='activity_scheme_tool_div' style='display: none;'>"
								+"<ul class='tool_ul'>"
								+"<li class='tool_ul_li' onclick='edit_as(\""+activity_scheme_list[a].id+"\")'>编辑</li><li class='tool_ul_li' onclick='delete_as(\""+activity_scheme_list[a].id+"\")'>删除</li>"
								+"</ul>"
								+"</div>"
								+"</div>"
								+"</td>";
								
		if(a!=0 && (a+1)%10==0){
			activity_scheme_html += "</tr><tr>";
		}
	}
		$("#activity_scheme_table").html(activity_scheme_html+"</tr>");
	}

	function showlayer(){
		var bh=$(window.top).height();//获取屏幕高度
	   	var bw=$(window.top).width();//获取屏幕宽度
	    $("#layer").css({
	        height:bh,
	        width:bw,
	        display:"block"
	    });
	    $("#pop").show();
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