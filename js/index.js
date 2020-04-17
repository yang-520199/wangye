$(function(){
	document.oncontextmenu = function(){ 
		return false 
	};
	
	//导航
	$(".navs ul li #nav").hide();
	
	$("li.mainmenu").hover(function(){
		$(this).find("#nav").stop(true,true);
		$(this).find("#nav").slideDown();
	},function(){
		$(this).find("#nav").stop(true,true);
		$(this).find("#nav").slideUp();
	});
	$(document).ready(function(){
		$(".navs ul li").hover(function(){
			$(this).addClass('cur').siblings().removeClass('cur');
		});
	});	
	
	
	$(document).ready(function(){
		$dragBln = false;
		
		$(".main_image").touchSlider({
			flexible : true,
			speed : 200,
			btn_prev : $("#btn_prev"),
			btn_next : $("#btn_next"),
			paging : $(".flicking_con a"),
			counter : function (e){
				$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
			}
		});
		
		$(".main_image").bind("mousedown", function() {
			$dragBln = false;
		});
		
		$(".main_image").bind("dragstart", function() {
			$dragBln = true;
		});
		
		$(".main_image a").click(function(){
			if($dragBln) {
				return false;
			}
		});
		
		timer = setInterval(function(){
			$("#btn_next").click();
		}, 5000);
		
		$(".main_visual").hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
				$("#btn_next").click();
			},5000);
		});
		
		$(".main_image").bind("touchstart",function(){
			clearInterval(timer);
		}).bind("touchend", function(){
			timer = setInterval(function(){
				$("#btn_next").click();
			}, 5000);
		});
		
	});
	
	//内页nav
	$(".tea_menu").click(function(){
        $(".teachl_con").slideToggle()
    });

	$(document).ready(function(){
		var $tab_li = $('#tab .tab_menu li');
		$tab_li.hover(function(){
			$(this).addClass('selected').siblings().removeClass('selected');
			var index = $tab_li.index(this);
			$('div.tab_box > div').eq(index).show().siblings().hide();
		});	
	});
	
	//下拉选框
	$(function(){
		$(".select").each(function(){
			var s=$(this);
			var z=parseInt(s.css("z-index"));
			var dt=$(this).children("dt");
			var dd=$(this).children("dd");
			var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
			var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
			dt.click(function(){dd.is(":hidden")?_show():_hide();});
			dd.find("a").click(function(){dt.html($(this).html());_hide();});     //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
			$("body").click(function(i){ !$(i.target).parents(".select").first().is(s) ? _hide():"";});
		})
	});
	
});

