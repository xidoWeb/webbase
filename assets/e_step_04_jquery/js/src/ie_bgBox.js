// slide_button.js

(function($) {	
	// 브라우저의 스크롤크기를 제외한 내부 가로사이즈 확인
	var winWidth2 = $(window).innerWidth();
	console.log(winWidth2);

	// append 뒤에 추가
	// 1 다른 요소 불러오는방법 
	  // $('#headBox').append( $('#addBanner') );

  // 2 없는 요소를 생성방법
  $('#headBox').append('<div class="bg_box">bgbox1</div>');

  // 3 css를 설정
  $('.bg_box').css({ 'width':winWidth2, height:100+'%',
								'position':'absolute', 'top':0, 'left':50+'%', 'zIndex':-100,
								'backgroundColor':'#35a', 'marginLeft':- winWidth2 / 2
								});
  $('.bg_box').parent().css({'position':'relative'});



// =============================================
})(this.jQuery);