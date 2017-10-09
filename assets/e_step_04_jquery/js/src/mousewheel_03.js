// mousewheel_02.js

(function($) {
// 최초에 브라우저 위치를 상단으로 이동
$('html,body').stop().animate({scrollTop:0});
	
var body =  $('html');
// ---------------------------------------------
// .view 갯수를 파악
var view = $('.view');
var viewLength = view.length;
var timed = 700;
var viewList = [];
var i =0;
var vTop;
for(; i<viewLength; i++){
	vTop = view.eq(i).offset().top;
	// console.log(vTop);
	viewList[i] = vTop;
}
	console.log(viewList);

// ---------------------------------------------
// mousewheel사용
	var wheelnumber = 0;
	// var d = false;
	body.on('mousewheel DOMMouseScroll', function(event){
		// 마우스 휠 기능 만들어서 불러오기(복잡한 계산을 하지 않아도 된다)
	var nowScrollTop = $(window).scrollTop();
	var mywheel = WheelEvent(event);

	function wl(n){
		// console.log(n);
		wheelnumber -= n;
		if(wheelnumber < 0){ 
			wheelnumber = 0; 
		}else if(wheelnumber >= viewLength){ 
			wheelnumber = viewLength -1; 
		}
		body.stop().animate({scrollTop:viewList[wheelnumber]},timed,'easeInOutBounce');
	}
	// 마우스휠 사용시 애니메이션으로 이동	
		console.log(wheelnumber);
		if(mywheel == -1 && nowScrollTop >= viewList[wheelnumber]){ wl(mywheel); } 
		else if(mywheel == 1 && nowScrollTop <= viewList[wheelnumber]){ wl(mywheel); }
	});// mousewheel 
 
})(this.jQuery);














