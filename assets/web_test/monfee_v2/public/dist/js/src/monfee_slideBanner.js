// monfee_slideBanner.js
(function($) {
//----------------------------------------------------
//  버튼
	var lBtn = $('.l_btn');
	var rBtn = $('.r_btn');
// 설명영역
	var explainWrap = $('.explain_wrap');
	var explainList = explainWrap.children();
// 인디케이트
	var indicator = $('.indicator').children('ol');
	var indicatorLi = indicator.children();
// 배경 이미지
	var bgBanner = $('.banner_wrap');
	var bgBannerList = bgBanner.children();
// 기타 설정
// ---------------------------------------------------

// indicator 클릭 
indicatorLi.on('click',function(e) {
	e.preventDefault() ;

	var _this = $(this);
	var index = _this.index();
	// console.log(index);

	// indicator 선택 체크 
	indicatorLi.eq(index).addClass('active');
	indicatorLi.eq(index).siblings().removeClass('active');

	// 배경 이미지 나타나게 만들기
	bgBannerList.eq(index).addClass('active');
	bgBannerList.eq(index).siblings().removeClass('active');

	// explain 이동처리
	explainWrap.animate({marginLeft: index * -100 + '%'});

});




})(this.jQuery);



















