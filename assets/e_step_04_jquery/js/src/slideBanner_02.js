// slideBanner_02.js
(function($) {
	// 1. slide indicator를 통해 배너가 움직이도록 처리
	// 2. 좌,우 버튼을 클릭해서 배너 이동 처리
	// 3. 좌,우 버튼을 클릭시 indicator도 같이 처리


// 1번기능 - 좌,우 버튼 임시로 숨김
	// $('.slide_btn').hide();



	// indicator클릭시 해당하는 값이 이동
	var indi = $('.indicator');
	var indi_li = indi.children();
	var banner = $('#bannerBox');
	var banner_child = banner.children();
	var banner_i = banner_child.length;

	indi_li.on('click',['button'],function(e) {
		e.preventDefault();
		var _this = $(this);
		var _thisEq = _this.index();
		// 순서 확인 검증
		console.log(_thisEq);


		banner.animate({marginLeft:_thisEq * -100 + '%'});
		indi_li.eq(_thisEq).addClass('active').siblings().removeClass('active');
		// _this.addClass('active').siblings().removeClass('active');
	});

// 2번 좌우 기능을 위해 indicator 임시로 숨김 
	indi.hide();
	// 2. 좌,우 버튼을 클릭해서 배너 이동 처리
	var lBtn = $('.l_btn');
	var rBtn = $('.r_btn');


	var i = 0;
	rBtn.on('click',function() {
		// 클릭시 일정한 값이 계속 누적되도록 처리
		// -100% -> -200% -> -300% ....
		i -= 1;
		// console.log(i);
		banner.animate({marginLeft: i * 100 +'%'});
		//내용이 마지막에 위치하면 버튼이 사라지게
		if(-i == banner_i-1){
			rBtn.fadeOut();
			lBtn.fadeIn();
		}else{
			rBtn.fadeIn();
			lBtn.fadeIn();
		}
	});

	lBtn.on('click',function() {
		i += 1;
		banner.animate({marginLeft: i * 100 +'%'});
		if(i == 0){
			lBtn.fadeOut();
			rBtn.fadeIn();
		}else{
			rBtn.fadeIn();
			lBtn.fadeIn();
		}
	});

	function BtnEnd(){}

})(this.jQuery);










