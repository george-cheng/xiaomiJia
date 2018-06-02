$(function(){
	
//	轮播图开始
           var n=0;
	       var num =0;
//	设置定时器
	var timers = setInterval(runs,2000);

	function runs(){
		num++;
		
		if(num==7){
			num=0;
		}
	
		$('.lunbotu .GDzuo .img').eq(num).fadeIn(500).siblings('.GDzuo .img').fadeOut(500);	
			
		$('.lunbotu .GDzuo .bjul .lis').eq(num).css({'background':'red','border':'1px solid black'}).siblings().css({'background':'black','border':'none'})
	}
	
//	给轮播图添加移入移除事件
	$(' .lunbotu').hover(function(){
		clearInterval(timers);
	},function(){
		timers = setInterval(runs,2000);
	})
	
//	给左箭头添加点击事件
	$('#zuo').click(function(){
		num--;
		if(num==-1){
			num=6;
		}
		$('.lunbotu .GDzuo .img').eq(num).fadeIn(500).siblings('.GDzuo .img').fadeOut(500);
//		让小点变色
		$('.lunbotu .GDzuo .bjul .lis').eq(num).css({'background':'red','border':'1px solid black'}).siblings().css({'background':'black','border':'none'})
	})
	
//	添加右点击事件
	$('#you').click(function(){
		num++;
		if(num==7){
			num=0;
		}
		$('.lunbotu .GDzuo .img').eq(num).fadeIn(500).siblings('.GDzuo .img').fadeOut(500);
		
				$('.lunbotu .GDzuo .bjul .lis').eq(num).css({'background':'red','border':'1px solid black'}).siblings().css({'background':'black','border':'none'})
	})
//	给小点添加点击事件
		$('.lunbotu .GDzuo .bjul .lis').click(function(){
			num=$(this).index();
			
					$('.lunbotu .GDzuo .img').eq(num).fadeIn(500).siblings('.GDzuo .img').fadeOut(500);
		
				$('.lunbotu .GDzuo .bjul .lis').eq(num).css({'background':'red','border':'1px solid black'}).siblings().css({'background':'black','border':'none'})
		})
//		轮播图结束
//				设置定时器
			var timer=setInterval(run,3000)
//				谁知一个公用类
				function public(){
			    $('.baokuang').stop().animate({'left':-1226*n+'px'},500);
				if(n==1){
						$('.XMX .tab').eq(0).find('strong').addClass('active')
						$('.XMX .tab').eq(0).siblings('.tab').find('strong').removeClass('active');
					}else if(n==0){
						$('.XMX .tab ').eq(1).find('strong').addClass('active')
						$('.XMX .tab ').eq(1).siblings('.tab').find('strong').removeClass('active');
					}	
				}
				function run(){
//					大宗管变量自增
					n++;
					if(n==2){
						n=0;
					}
					
				     public();
			}
				$('#left').click(function(){
					 $('.baokuang').stop().animate({'left':-1226+'px'},500);
					 $('.XMX .tab ').eq(0).find('strong').addClass('active')
					 $('.XMX .tab ').eq(0).siblings('.tab').find('strong').removeClass('active');
				})
				$('#right').click(function(){
					 $('.baokuang').stop().animate({'left':0+'px'},500);
					 $('.XMX .tab').eq(1).find('strong').addClass('active')
					 $('.XMX .tab').eq(1).siblings('.tab').find('strong').removeClass('active');
				})
				
				$('.XMX').hover(function(){
					clearInterval(timer);
				},function(){
					timer=setInterval(run,3000)
				})
		
//				循环每个box元素
				$('.NRX').each(function(){
					
//					获得js的原生对象
					var jsthis = $(this)[0];

//					为了防止this的指向发生变化我们将他存到一个变量里
					var jqthis = $(this);
					
//					设置变量
//					相当于向每个box对象添加一个属性
					jsthis.n = 0;
//					给左侧按钮添加点击事件						
			        $(jqthis).siblings('.left1').click(function(){
//			        	alert(jsthis.n)
//						让大总管变量自增
						jsthis.n--;		

//						设置left值,500毫秒变化
//						animate()改变css样式
//						.stop()表示让之前的动作停止,然后开始下一个动作 
						if(jsthis.n==-1){
//							让瞬间跳到0这个位置
							jsthis.n=0;		
						}
					jqthis.find('.NRXul').stop().animate({'left':-298*jsthis.n+'px'},500);
		        	jqthis.find('.dian .xiao').eq(jsthis.n).addClass('active1').siblings('.xiao').removeClass('active1')
						
						})
				
			
//					给侧按钮添加点击事件
					$(jqthis).siblings('.right1').click(function(){
//						让大总管变量自增
						jsthis.n++;
//						设置left值,500毫秒变化
//						animate()改变css样式
//						.stop()表示让之前的动作停止,然后开始下一个动作
//                      alert(jsthis.n);
						if(jsthis.n==jqthis.find('.NRXul .NRXli').length){
							jsthis.n=jqthis.find('.NRXul .NRXli').length-1;		
						}
					jqthis.find('.NRXul').stop().animate({'left':-298*jsthis.n+'px'},500);	
		        	jqthis.find('.dian .xiao').eq(jsthis.n).addClass('active1').siblings('.xiao').removeClass('active1')
						
					})
//					给小点添加点击事件
			$(jsthis).find('.dian .xiao').click(function(){
//			让当前对象的属性值赋值为当前点击对象的下标值
			jsthis.n=$(this).index()
//			alert(jsthis.n);
			
//			让当前对象的子级元素.dian .xiao的子级元素.xiao的left值跟随jsthis.n值的变化而达到移动效果
			jqthis.find('.NRXul').stop().animate({'left':-298*jsthis.n+'px'},500)

//			让当前对象的子级元素.dian .xiao的子级元素.xiao的下标值为jsthis.n的添加属性active让其兄弟元素xiao的属性删除active，来达到改变圆点样式的效果
			$(jsthis).find('.dian .xiao').eq(jsthis.n).addClass('active1').siblings('.xiao').removeClass('active1')
					
					})

				})
//				获得body的可见宽度
					var seeW = $('body').width();
				$('.naverji').css({'width':seeW+'px','margin-left':-seeW/2+'px'})
				
				$(window).resize(function(){
					var seeW = $('body').width();
					$('.naverji').css({'width':seeW+'px','margin-left':-seeW/2+'px'})
				})
				
//				移入让二级菜单显示
				$('.navli').mouseenter(function(){
					$(this).find('.naverji').show().stop().animate({'height':'230px'},200);
					$(this).siblings('.navli').find('.naverji').css({'height':'230px'}).hide();
				})
			
//			移除鼠标让二级菜单隐藏
				$('.navul').mouseleave(function(){
//				
					$(this).find('.naverji').stop().animate({'height':'0px'},200);
				})
//				当文本框获得焦点时让热词隐藏 让关键词显示 同时让文本框变颜色
				$("#text").focus(function(){
                    $('.hotword').hide();
                    $('.keyword').show();
                    $("input").css("border-color","#FF6700");
 		    	 });
// 		    	 当text失去焦点时让热词显示 让关键词隐藏 同时让文本框显示颜色
			    $("#text").blur(function(){
 		   		    $('.hotword').show();
                    $('.keyword').hide();
                    $("input").css("border-color","#E0E0E0");
			    });

				
//				智能给他们添加点击事件
				$('.jiadian .JDYzi .tab').mouseenter(function(){

//						eq()表示下标  show()显示siblings()兄弟元素  .hide()表示隐藏
					$(this).addClass('active2').siblings('.tab').removeClass('active2');
		        	$(this).parents('.JD').find('.JDyuo').eq($(this).index()).show().siblings('.JDtu .JDyuo').hide();
//		

				})
		})

			
			
		
	
							
			