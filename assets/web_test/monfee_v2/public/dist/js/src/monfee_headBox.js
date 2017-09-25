//  monfee_headBox.js
(function($) {
	// 1. 마우스 올렸을 경우 gnb하위 메뉴 나타나기
	// 2. 스크롤 상태 확인(고정으로 변환처리)
	// 3. 메뉴가 아래쪽에 있을때에는 하위메뉴가 위로나타나게 


	// 1
	var gnb = $('#gnb');
	var dd = gnb.find('dd');
	var h2 = gnb.find('h2');

	gnb.addClass('upView');

	gnb.on('mouseenter',function() {
		gnb.removeClass('upView');
	}).on('mouseleave',function() {
		gnb.addClass('upView');
	});

// height()   - padding포함하지 않음
// innerHeight() - padding 포함
// outerHeight() - padding, margin포함


// 2. 
var headBox = $('#headBox');

var headTop = headBox.offset().top;
// console.log(headTop);
$(window).on('scroll', function() {
	var _this = $(this);
	var sct = _this.scrollTop();
	// console.log( sct );

	if(sct >= headTop){
		// headBox.css({position:'fixed', top:'0 !important'});
		headBox.removeClass('ab');
		headBox.addClass('fixed');
		gnb.removeClass('up');
	}else{
		headBox.removeClass('fixed');
		headBox.addClass('ab');
		gnb.addClass('up');
	}
});

// 3 
// 이미 기본 틀은 만들어져 있으니 끼워 넣기!!!
// gnb.addClass('up')
// gnb.removeClass('up')

})(this.jQuery);




















