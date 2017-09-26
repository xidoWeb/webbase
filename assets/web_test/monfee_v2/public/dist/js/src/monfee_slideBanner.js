// monfee_slideBanner.js
(function($) {
//----------------------------------------------------
  var adBanner            = $('#adBanner');
//  버튼
	var lBtn                = $('.l_btn');
	var rBtn                = $('.r_btn');
// 설명영역
	var explain             = $('.explain_wrap');
	var explainList         = explain.children();
	var explainListCount    = explainList.length;
// 인디케이트
	var indicator           = $('.indicator').children('ol');
	var indicatorList       = indicator.children();
	var indicatorLiWidth    = indicatorList.first().outerWidth(true);
	var indicatorListCount  = indicatorList.length;
// 배경 이미지
	var bgBanner            = $('.banner_wrap');
	var bgBannerList        = bgBanner.children();
	var bgBannerListCount   = bgBannerList.length;
// 기타 설정
	var i                   = 0;
	var timed               = 7000;
	var autoMove;
// ---------------------------------------------------

// indicator 클릭 
indicatorList.on('click',function(e) {
	e.preventDefault() ;

	var _this        = $(this);
	i                = _this.index();
	// console.log(index);

	BannerAll(i);
});
// ---------------------------------------------------

// 좌,우 클릭시 연속으로 띠형태로 취해서 무한히 도는 것 같은 형태

// (해당하는 자식요소)의 (첫번째)를 (복제)하여 (부모요소의 마지막에 담기)
explainList.first().clone().appendTo(explain);
// indicatorList.first().clone().appendTo(indicator);
// bgBannerList.first().clone().appendTo(bgBanner);

explainList         = explain.children();
explainListCount    += 1;
indicatorListCount  += 1;
// bgBannerListCount += 1;

// 마지막요소 추가하여 크기값(css) 수정
explain.css({width:explainListCount * 100 + '%'});
explainList.css({width:(100 / explainListCount) + '%'});
// -------------------------------------------------------
// 배경이미지 정리
bgBannerList.css({opacity:0});
bgBanner.find('.active').css({opacity:1});
// -------------------------------------------------------
// 사용 기능 함수처리
function BannerAll(index){
	// indicator 선택 체크 
	// console.log(i);
	// console.log(explainListCount);

if(i < 0 ){
	i = explainListCount - 1;
	explain.css({marginLeft: -i * 100 +'%' },function(){})
	       .stop(true,false).animate({marginLeft: -(explainListCount - 2) * 100 +'%' });


	i= explainListCount - 2;
	indicatorList.eq(i).addClass('active');
	indicatorList.eq(i).siblings().removeClass('active');

	BgBanner(i);

}else if(i >= explainListCount -1){
	i = explainListCount - 1;
	explain.stop(true,false).animate({marginLeft: -i * 100 + '%' }, function() {  
		explain.css({marginLeft:0});
	});
		i=0;
		// console.log(i);
		indicatorList.eq(i).addClass('active');
		indicatorList.eq(i).siblings().removeClass('active');

		BgBanner(i);
		



	}else{
		explain.stop(true,false).animate({marginLeft: -index * 100 + '%'});
		indicatorList.eq(index).addClass('active');
		indicatorList.eq(index).siblings().removeClass('active');
		BgBanner(i);


	}
}

// 배경이미지 설정
function BgBanner(i){
	bgBannerList.eq(i).css({opacity:1});
	bgBanner.find('.active').stop(true,false).animate({opacity:0},function() {
		bgBannerList.eq(i).addClass('active');
		bgBannerList.eq(i).siblings().removeClass('active').css({opacity:0});
	});
}
// ---------------------------------------------------
// setInterval, clearInterval


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
// 일정 시간마다 움직이게하기, 마우스올리면 멈추기
function SetIn(){
	autoMove = setInterval( 
		function(){ 
			++i;
			// if(i >= 5){	i = 0; }
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
// 왼쪽 버튼 클릭

lBtn.on('click',function(e) {
	e.preventDefault();
	// console.log(i);
	i-=1;
	BannerAll(i);
});
// -------------------------------------------------------
// 오른쪽 버튼 클릭

rBtn.on('click',function(e){
	e.preventDefault();
	i+=1;
	BannerAll(i);
});
// -------------------------------------------------------

$('h1').on('mouseenter', function() {
	$(this).animate({marginTop:'20px'}, function(){
		$(this).animate({marginLeft:'20px'}, function(){
			$(this).css({margin:0});
		});
	});
});

})(this.jQuery);



















