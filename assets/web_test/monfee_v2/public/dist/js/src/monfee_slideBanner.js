// monfee_slideBanner.js
(function($) {
//----------------------------------------------------
//  버튼
	var lBtn         = $('.l_btn');
	var rBtn         = $('.r_btn');
// 설명영역
	var explainWrap  = $('.explain_wrap');
	var explainList  = explainWrap.children();
// 인디케이트
	var indicator    = $('.indicator').children('ol');
	var indicatorLi  = indicator.children();
// 배경 이미지
  var adBanner     = $('#adBanner');
	var bgBanner     = $('.banner_wrap');
	var bgBannerList = bgBanner.children();
// 기타 설정
	var i            = 0;
	var timed        = 7000;
	var autoMove;
// ---------------------------------------------------

// indicator 클릭 
indicatorLi.on('click',function(e) {
	e.preventDefault() ;

	var _this        = $(this);
	i                = _this.index();
	// console.log(index);

	BannerAll(i);
});
// ---------------------------------------------------
// 사용 기능 함수처리
function BannerAll(index){
	// indicator 선택 체크 

	indicatorLi.eq(index).addClass('active');
	indicatorLi.eq(index).siblings().removeClass('active');

	// 배경 이미지 나타나게 만들기
	bgBannerList.eq(index).siblings().animate({opacity:0},function() {
		bgBannerList.eq(index).addClass('active');
		bgBannerList.eq(index).siblings().removeClass('active').css({opacity:1});
	});

	// explain 이동처리
	explainWrap.animate({marginLeft: index * -100 + '%'});
}
// ---------------------------------------------------

// setInterval(반복실행함수, 시간)  : 일정 시간마다 반복 처리하는 기능
// clearInterval(setInterval변수명) : setInterval기능을 상쇄시키는 기능
// test
	// var setIn = setInterval( function(){console.log(++i)} , timed);
	// $('h1').on('mouseenter',function() {
	// 	clearInterval(setIn);
	// });
// 위 코드의 단점! 
// clearInterval을 통해 setIn값을 상쇄(삭제)처리 했기 때문에 더이상 
// setInterval을 구동할 수 없다.

// -----------------------------------------------------
function SetIn(){
	autoMove = setInterval( 
		function(){ 
			++i;
			if(i >= 5){
				i = 0;
			}
			console.log(i);
			BannerAll(i); 
		} , timed);
	
}

function ClearIn(){
	// autoMove = clearInterval(); 
	clearInterval(autoMove);
}

SetIn();

adBanner.on({'mouseenter': ClearIn,'mouseleave':SetIn });
// -------------------------------------------------------
// 좌,우 클릭시 연속으로 띠형태로 취해서 무한히 도는 것 같은 형태

// // (해당하는 자식요소)의 (첫번째)를 (복제)하여 (부모요소의 마지막에 담기)
// explainList.first().clone().appendTo(explainWrap);
// indicatorLi.first().clone().appendTo(indicator);
// bgBannerList.first().clone().appendTo(bgBanner);

// // 마지막요소 추가하여 크기값(css) 수정
// explainWrap.css({width:600+'%'});
// explainList.css({width:100 / 6 +'%'});
// indicator.css({width:330 + 'px',width:330 / 16 + 'rem'});


// -------------------------------------------------------
// 왼쪽 버튼 클릭

lBtn.on('click',function(e) {
	e.preventDefault();
	// console.log(i);
	--i;
	if(i < 0){ i = 4 }
	BannerAll(i);
});
// -------------------------------------------------------
// 오른쪽 버튼 클릭

rBtn.on('click',function(e){
	e.preventDefault();
	++i;
	if(i >= 5){ i = 0 }
	BannerAll(i);
});
// -------------------------------------------------------

})(this.jQuery);



















