/*实时事件-realtime_event.html start*/
/*事件处理情况-柱状图*/
var event_deal_bar_areaType=['香洲区','金湾区','斗门区','横琴新区'];
var event_deal_bar_zbData=[20,13,22,5];
var event_deal_bar_bjData=[36,20,14,30]; 

/*事件统计-仪表盘*/
var event_count_board_all_alldata=100;

/*事件来源统计-柱状图*/
var event_source_bar_sourceType=['Web','App','微信','其它'];
var event_source_bar_sourceData=[20,13,22,5];

/*事件类别统计-饼图*/
var event_type_pie_seriesdata=[{value:16, name:'安监'},{value:30, name:'消防'},{value:2, name:'公安'},{value:12, name:'文体'}];
var event_type_pie_legenddata=['安监','消防','公安','文体'];
/*事件处理情况-饼图*/
var event_deal_pie_seriesdata=[{value:15, name:'在办'},{value:30, name:'办结'}];
var event_deal_pie_legenddata=['在办','办结'];
/*事件处理记录表格*/
var event_deal_table_columnname=['编号','姓名','性别','户籍'];
var event_deal_table_jsonstr='[{"id":"01","name":"张三","sex":"男","address":"珠海"},{"id":"02","name":"李四","sex":"女","address":"香洲"},{"id":"01","name":"张三","sex":"男","address":"珠海"},{"id":"01","name":"张三","sex":"男","address":"珠海"},{"id":"01","name":"张三","sex":"男","address":"珠海"},{"id":"01","name":"张三","sex":"男","address":"珠海"},{"id":"01","name":"张三","sex":"男","address":"珠海"},{"id":"02","name":"李四","sex":"女","address":"香洲"},{"id":"01","name":"张三","sex":"男","address":"珠海"},{"id":"01","name":"张三","sex":"男","address":"珠海"},{"id":"01","name":"张三","sex":"男","address":"珠海"},{"id":"01","name":"张三","sex":"男","address":"珠海"}]';
/*实时事件-realtime_event.html end*/

/*事件统计-count_event.html start*/
/*事件来源统计-柱状图*/
var event_source_bar_bycount_sourceType=['Web','App','微信','其它'];
var event_source_bar_bycount_sourceData=[20,13,22,5];

/*事件发生地区-柱状图*/
var event_deal_bar_bycount_areaType=['香洲区','金湾区','斗门区','横琴新区'];
var event_deal_bar_bycount_Data=[20,13,22,5];

/*事件统计-仪表盘*/
var event_count_board_all_bycount_alldata=222;

/*事件来源趋势-折线图*/
var event_source_line_bycount_sourceType=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
var event_source_line_source_bycount_webData=[20,13,22,5,2,6,9,2,50,20,13,23];
var event_source_line_source_bycount_appData=[10,12,21,2,4,23,5,1,20,10,3,12];
var event_source_line_source_bycount_wechatData=[15,16,23,2,21,16,2,8,33,21,23,13];
var event_source_line_source_bycount_otherData=[2,12,26,5,3,25,13,21,22,21,12,17];

/*事件类别统计-饼图*/
var event_type_pie_bycount_seriesdata=[{value:16, name:'安监'},{value:30, name:'消防'},{value:2, name:'公安'},{value:12, name:'文体'}];

/*年度事件趋势-折线图*/
var event_source_line_year_bycount_sourceType=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
var event_source_line_year_source_bycount_Data=[20,13,22,5,2,6,9,2,50,20,13,23];
var event_source_line_year_source_divine_bycount_Data=[10,2,12,1,0,3,2,1,22,13,11,20];

/*事件发生地区趋势-折线图*/
var event_source_line_area_bycount_sourceType=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
var event_source_line_area_xiangzhou_bycount_Data=[20,13,22,5,2,6,9,2,50,20,13,23];
var event_source_line_area_jinwan_bycount_Data=[10,12,21,2,4,23,5,1,20,10,3,12];
var event_source_line_area_doumeng_bycount_Data=[15,16,23,2,21,16,2,8,33,21,23,13];
var event_source_line_area_hengqing_bycount_Data=[2,12,26,5,3,25,13,21,22,21,12,17];

/*信访形式概况-柱状图*/
var letter_visit_bycount_sourceType=['来信','来访','电话信访','网上投诉'];
var letter_visit_bycount_sourceData=[30,23,32,15];

/*热点问题概况-柱状图*/
var hotspot_question_bycount_sourceType=['环境保护','复原退伍军人'];
var hotspot_question_bycount_sourceData=[50,43];

/*问题发生地区概况-柱状图*/
var question_happen_region_bycount_sourceType=['香洲区','金湾区','斗门区','横琴新区'];
var question_happen_region_bycount_sourceData=[50,43,34,63];

/*信访内容类型概况-柱状图*/
var letter_content_type_bycount_sourceType=['农业','国土','城建','社保','卫生','教育'];
var letter_content_type_bycount_sourceData=[50,43,34,63,33,25];

/*集体访与普通话访占比*/
var team_common_proportion_bycount_seriesdata=[{value:16, name:'普通'},{value:30, name:'集体'}];
var team_common_proportion_legenddata=['普通','集体'];

/*信访目的占比*/
var letter_target_proportion_bycount_seriesdata=[{value:16, name:'求决'},{value:30, name:'申诉'},{value:43, name:'其他'},{value:30, name:'意见建议'}];
var letter_target_proportion_legenddata=['求决','申诉','其他','意见建议'];
/*事件统计-count_event.html end*/

/*资源分布-resource_distribution.html start*/
/*资源分布情况-单轴统计*/
var resource_distribution_dz_legend=['正常使用','损坏','丢失'];
var resource_distribution_dz_type=['监控电子眼','变压箱','路灯'];
var resource_distribution_dz_value1=['2000','1000','500'];
var resource_distribution_dz_value2=['1000','500','250'];
var resource_distribution_dz_value3=['500','250','125'];

/*资源概括-单轴统计*/
var resource_distribution_all_dz_icon=['../images/approvaled.png','../images/approvaled.png','../images/approvaled.png'];
var resource_distribution_all_dz_title=['总资源','正常率','损坏率','丢失率'];
var resource_distribution_all_dz_value=['5000','87.5%','2.5%','10%'];

/*资源状态占比-饼图*/
var resource_distribution_status_pie_legend=['正常率','损坏率','丢失率'];
var resource_distribution_status_pie_seriesdata=[{value:3000, name:'正常率'},{value:1000, name:'损坏率'},{value:500, name:'丢失率'}];

/*地区镇街人口分布-柱状图*/
var area_people_distribution_bar_sourceType=['香洲区','金湾区','斗门区','横琴新区'];
var area_people_distribution_bar_Data=[830302,634521,746732,532214];

/*设备概括-单轴统计*/
var resource_distribution_device_dz_icon=['../images/approvaled.png','../images/approvaled.png','../images/approvaled.png'];
var resource_distribution_device_dz_title=['摄像头','危险源','消防车','消防栓'];
var resource_distribution_device_dz_value=['15682','125','300','2456'];

/*常驻人口比-饼图*/
var resident_population_proportion_pie_legend=['常驻人口','流动人口'];
var resident_population_proportion_pie_seriesdata=[{value:92010, name:'常驻人口'},{value:502141, name:'流动人口'}];

/*人口年龄比例-饼图*/
var population_age_proportion_pie_legend=['18岁以下','18-28岁','29-39岁','40-60岁','60岁以上','不详'];
var population_age_proportion_pie_seriesdata=[{value:234613, name:'18岁以下'},{value:490246, name:'18-28岁'},{value:557020, name:'29-39岁'},{value:357150, name:'40-60岁'},{value:390201, name:'60岁以上'},{value:5750, name:'不详'}];

/*人口总数-单轴统计*/
var resource_distribution_population_sum_dz_icon=['../images/approvaled.png','../images/approvaled.png','../images/approvaled.png'];
var resource_distribution_population_sum_dz_title=['总人口','常驻人口','流动人口','男性','女性'];
var resource_distribution_population_sum_dz_value=['6232042','6000000','232042','3232890','2999152'];
/*资源分布-resource_distribution.html end*/

/*考核评价-examination_evaluation.html start*/
/*总体评分*/
var total_score_value = 66;
/*评分统计*/
var score_count_option_pie_seriesdata=[{value:30, name:'大于80'},{value:25, name:'80-70'},{value:25, name:'70-60'},{value:20, name:'小于60'}];
var score_count_option_pie_legend=['大于80','80-70','70-60','小于60'];
/*镇/街级单位的考核评价评分排名*/
var region_unit_score_areaType=['香洲区','金湾区','斗门区','横琴新区'];
var region_unit_score_Data=[88,89,90,92];

/*区域考核评价*/
var region_check_evaluate_icon=['../images/approvaled.png','../images/approvaled.png','../images/approvaled.png','../images/approvaled.png'];
var region_check_evaluate_title=['香洲区','金湾区','斗门区','横琴新区'];
var region_check_evaluate_value=[88,89,90,92];
/*群众满意度*/
var masses_satisfied_legend_data = ['香洲区','金湾区','斗门区','横琴新区'];
var masses_satisfied_series = [
	        {
	            name:'香洲区',
	            type:'line',
	            data:[63, 72, 66, 69, 60, 69, 63, 70,,,,,]
	        },
	        {
	            name:'金湾区',
	            type:'line',
	            data:[79, 86, 73, 75, 80, 79, 83, 90,,,,,]
	        },
	        {
	            name:'斗门区',
	            type:'line',
	            data:[73, 74, 72, 75, 67, 73, 67, 72,,,,,]
	        },
	        {
	            name:'横琴新区',
	            type:'line',
	            data:[83, 88, 81, 75, 80, 74, 75, 79,,,,,]
	        }
	    ];
/*区域行政能力*/
var dataXZQ = [
    [67,26,80,48,58,64,79]
];
var dataJWQ = [
    [90,68,87,96,74,29,52]
];

var dataDMQ = [
    [67,81,74,63,45,44,51]
];

var dataHQXQ = [
    [77,61,84,76,55,54,41]
];

/*岗位考核评分排名*/
var station_examine_rank_areaType=['交通','公用','城管','安监','工商','建设','消防','环保'];
var station_examine_rank_Data=[88,89,90,92,82,63,73,82];

/*岗位考核评分统计*/
var station_examine_count_option_pie_seriesdata=[{value:30, name:'优秀'},{value:25, name:'合格'},{value:25, name:'不合格'}];
var station_examine_count_option_pie_legend=['优秀','合格','不合格'];

/*岗位行政能力*/
var GWXZNL = [
    [67,26,80,48,58,64,79]
];
/*岗位工作效率*/
var station_work_efficiency_legend_data = ['交通','公用','城管','安监','工商','建设','消防','环保'];
var station_work_efficiency_series = [
	        {
	            name:'交通',
	            type:'line',
	            data:[63, 32, 46, 89, 70, 69, 23, 70,45,23,24,52,25]
	        },
	        {
	            name:'公用',
	            type:'line',
	            data:[79, 56, 73, 55, 80, 69, 83, 40,34,27,38,16,22]
	        },
	        {
	            name:'城管',
	            type:'line',
	            data:[73, 54, 32, 75, 77, 63, 27, 72,23,46,24,72,74]
	        },
	        {
	            name:'安监',
	            type:'line',
	            data:[83, 88, 81, 75, 80, 74, 75, 79,24,74,45,27,43]
	        },{
	            name:'工商',
	            type:'line',
	            data:[63, 72, 66, 69, 60, 69, 63, 70,27,28,59,35,25]
	        },
	        {
	            name:'建设',
	            type:'line',
	            data:[79, 86, 73, 75, 80, 79, 83, 90,62,72,24,72,23]
	        },
	        {
	            name:'消防',
	            type:'line',
	            data:[73, 74, 72, 75, 67, 73, 67, 72,28,21,27,38,29]
	        },
	        {
	            name:'环保',
	            type:'line',
	            data:[83, 88, 81, 75, 80, 74, 75, 79,16,83,35,23,53]
	        }
	    ];
	    
/*岗位业务量*/
var station_business_amount_areaType=['交通','公用','城管','安监','工商','建设','消防','环保'];
var station_business_amount_Data=[88,89,90,92,82,63,73,82];
/*考核评价-examination_evaluation.html end*/


/*人口查询-population_query.html start*/
/*民族分布*/
var nation_areaType=['汉族','壮族','土家族','苗族','瑶族','回族','侗族','满族','满族','汉族','壮族','土家族','苗族','瑶族','回族','侗族','满族','满族'];
var nation_Data=[388,289,190,92,83,75,66,54,54,88,89,90,92,83,75,66,54,54];
/*户籍地分布*/
var register_areaType=['广东','广西','安徽','四川','河南','浙江','湖南','山东','江西','云南','湖北','上海','吉林'];
var register_Data=[388,289,190,92,83,75,66,54,34,57,74,42,85];
/*人口查询-population_query.html end*/

/*指挥部署-command_deployment.html start*/
/*活动方案*/
/*var activity_scheme = ['2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游'];
var activity_scheme_id = ['activity_scheme_1','activity_scheme_2','activity_scheme_3','activity_scheme_4','activity_scheme_5','activity_scheme_6','activity_scheme_7','activity_scheme_8','activity_scheme_9','activity_scheme_10','activity_scheme_11','activity_scheme_12'];
*/

var activity_scheme = [{name:'2017秋季巡游活动1',id:'activity_scheme_1'},{name:'2017秋季巡游活动2',id:'activity_scheme_2'},{name:'2017秋季巡游活动3',id:'activity_scheme_3'},{name:'2017秋季巡游活动4',id:'activity_scheme_4'},{name:'2017秋季巡游活动5',id:'activity_scheme_5'},{name:'2017秋季巡游活动6',id:'activity_scheme_6'},{name:'2017秋季巡游活动7',id:'activity_scheme_7'},{name:'2017秋季巡游活动8',id:'activity_scheme_8'},{name:'2017秋季巡游活动9',id:'activity_scheme_9'},{name:'2017秋季巡游活动10',id:'activity_scheme_10'},{name:'2017秋季巡游活动11',id:'activity_scheme_11'},{name:'2017秋季巡游活动12',id:'activity_scheme_12'}];
/*var activity_scheme = ['2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游','2017秋季巡游活动','2017秋季巡游'];
*/
/*指挥部署-command_deployment.html end*/

/*网格员分布-gridmember_distribution.html start*/
var gridmember_list = [{name:'王XX',id:'gridmember_1'},{name:'黄XX',id:'gridmember_2'},{name:'李XX',id:'gridmember_3'},{name:'冼XX',id:'gridmember_4'},{name:'乌XX',id:'gridmember_5'},{name:'乔XX',id:'gridmember_6'},{name:'罗XX',id:'gridmember_7'},{name:'费XX',id:'gridmember_8'},{name:'贾XX',id:'gridmember_9'},{name:'沈XX',id:'gridmember_10'},{name:'韩XX',id:'gridmember_11'},{name:'单XX',id:'gridmember_12'},];
/*网格员分布-gridmember_distribution.html end*/

/*地图样式*/
var mapstyle = [
          {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                              "color": "#021019"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#147a92"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#0b3d51"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                              "color": "#08304b"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#08304b"
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -70
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#857f7f"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#022338"
                    }
          },
          {
                    "featureType": "green",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#062032"
                    }
          },
          {
                    "featureType": "boundary",
                    "elementType": "all",
                    "stylers": {
                              "color": "#1e1c1c"
                    }
          },
          {
                    "featureType": "manmade",
                    "elementType": "all",
                    "stylers": {
                              "color": "#022338"
                    }
          }
];

