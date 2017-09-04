// slideBanner_02.js
(function($) {
	// 1. slide indicator를 통해 배너가 움직이도록 처리
	// 2. 좌,우 버튼을 클릭해서 배너가 움지기오도록 처리
	// 3. 좌,우 버튼을 클릭시 indicator도 같이 처리


// 1번기능 - 좌,우 버튼 임시로 숨김
	$('.slide_btn').hide();
	// indicator클릭시 해당하는 값이 이동
	var indi = $('.indicator');
	var indi_li = indi.children();
	var banner = $('#bannerBox');

	indi_li.on('click',['button'],function(e) {
		e.preventDefault();
		var _this = $(this);
		var _thisEq = _this.index();
		// 순서 확인 검증
		console.log(_thisEq);


		banner.animate({marginLeft:_thisEq * -100 + '%'});
		// addClass('')
		// removeClass('')
	});



})(this.jQuery);










