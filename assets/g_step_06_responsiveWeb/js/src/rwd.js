// rwd.js

(function($) {
	// 브라우저 가로값
	var winWidth = $(window).width();

	var wrap = $('#wrap');
	var h1 = wrap.children('h1');

	//영역별 작성
	if(winWidth <= 640){
		/* mob */
		h1.text('모바일 화면으로 변경되었습니다.');

	}else if(winWidth > 640 && winWidth <= 1024){
		/* tab */
		h1.text('table 화면으로 변경되었습니다.');

	}else if(winWidth > 1024 && winWidth <= 1366){
		/* pc */
		h1.text('pc화면으로 처리되었습니다');
	}else{
		/* pcful */

	}

// 브라우저 사이즈(가로) 변경시 새로고침 =======
$(window).on('resize',function() {
	var _nowWidth = $(window).width();
	if(winWidth !== _nowWidth){
		location.reload();
	}
});	

})(this.jQuery);








