var tabindex=1;
var map={
	"实时事件":"1-realtime_event.html",
	"事件统计":"2-count_event.html",
	"资源分布":"3-resource_distribution.html",
	"考核评价":"4-examination_evaluation.html",
	"人口查询":"5-population_query.html",
	"指挥部署":"6-command_deployment.html",
	"网格员分布":"7-gridmember_distribution.html",
}

$(function() {
	initTab();
	addclick();
	// ——————时间轴——————
	$('.dropdown-menu li').click(function(){
	  var txt=$(this).text();
	  $(this).parent().prev().find('span').eq(0).text(txt);
	})

	changeY();
	$('.dropdown-menu li').click(function(){
		var name=$('a',this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle span').text(name);
		changeY();
	})

	function changeY(){
		var year=$('#year').text().replace(/[^0-9]/ig,"")
		var month=$('#month').text().replace(/[^0-9]/ig,"")
		var days=totalDays(year, month);
		var dayArr=[];
		for(var i=1;i<=days;i++)
		{
			dayArr.push(i+'号');
		}
		var last=parseInt(dayArr[dayArr.length-1]);
		$('.demo').children().remove();
		var div='<input type="hidden" value="" class="single-slider none">';
		$('.demo').html(div)
		// 
		$('.single-slider').jRange({
		    from:1,
		    to:last,
		    step: 1,
		    scale: dayArr,
		    format: '%s',
		    width:850,
		    showLabels: true,
		    snap: true
		});
	}

	//一个月的总天数
	function totalDays(years,months){
		var d = new Date(years, months, 0);
		return d.getDate();
	}
	// ——————时间轴end——————
});

function initTab(){
	$("#frameid").attr("src","realtime_event.html");
	$("#tabid li").eq(1).addClass("active");
}

function addclick(){
	$('#tabid').on('click','li',function(){
		if(tabindex!=$(this).index()&&$(this).index()>0){
			tabindex=$(this).index();
			var liname=$(this).text();
			var valuecol=map[liname].split("-");
			$("#frameid").attr("src",valuecol[1]);
			$("#tabid").find("li").each(function(i){
				var screenNum=i;
				if(i==valuecol[0]){
					if(i<10){
						screenNum="0"+i;
					}
					$("#tabid li").eq(0).text(screenNum+"屏"+" "+liname);
					$("#tabid li").eq(i).addClass("active");
				}else{
					$("#tabid li").eq(i).removeClass("active");
				}
				});
		}
		});
}

