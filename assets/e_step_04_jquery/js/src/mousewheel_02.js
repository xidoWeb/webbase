// mousewheel_02.js

(function($) {
// 최초에 브라우저 위치를 상단으로 이동
$('html,body').stop().animate({scrollTop:0});
	
var body =  $('html');
// ---------------------------------------------
// .view 갯수를 파악
var view = $('.view');
var viewLength = view.length;
// console.log(viewLength);

// 각각의 offset().top 위치를 파악
	// 3번째위치 테스트
	// var v1_top = view.eq(3).offset().top;
	// console.log(v1_top);

// 각각의 내용을 배열로 저장
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
	body.on('mousewheel DOMMouseScroll', function(event){
		// 마우스 휠 기능 만들어서 불러오기(복잡한 계산을 하지 않아도 된다)
		var mywheel = WheelEvent(event);
		// console.log(mywheel);

		// 스크롤 움직일때 사용된 값에 의해 페이지 리동처리 test
		// var myScroll = body.scrollTop(viewList[1]);

		// 마우스 휠 처리시 숫자 카운트 변경처리
		wheelnumber -= mywheel;
		

// 0보다 작아지는 경우
	if(wheelnumber < 0){
		wheelnumber = 0;
	}
// 화면에 보여줄 갯수의 숫자보다 클경우
	else if(wheelnumber >= viewLength){
		wheelnumber = viewLength -1;
	}
	
	// 마우스휠 사용시 해당위치로 이동
	// $('html,body').scrollTop(viewList[wheelnumber]);

	// 마우스휠 사용시 애니메이션으로 이동
	var d = false;
	if(!d){
		$('html,body').stop().animate({scrollTop:viewList[wheelnumber]});
	}



	console.log(wheelnumber);

	});// mousewheel 
 	




})(this.jQuery);














