// slide_button.js

(function($) {

var slide_btn = $('.slide_btn');
var slide_ul = slide_btn.children('ul');
var slide_li = slide_ul.children('li');
var slide_button = $('.slide_btn').find('button');
var slide_icon = slide_button.find('i');

slide_ul.addClass('me_link');

var slide_li_width = slide_li.width();
slide_li.height(slide_li_width);

slide_btn.addClass('leftMove');

// click시 .leftMove를 삭제
slide_button.on('click',function(e){
	e.preventDefault();
	// is()					: class뿐 아니라 다른 내용도 판단가능
   var slide_left =  slide_btn.is('.leftMove');
   console.log(slide_left);

	if( slide_left ){
		slide_btn.removeClass('leftMove', 500);
		slide_icon.removeClass('fa-arrow-right').addClass('fa-arrow-left');
	  slide_button.find('span').text('닫기');
	}else{
		slide_btn.addClass('leftMove', 500);
		slide_icon.removeClass('fa-arrow-left').addClass('fa-arrow-right');
	  slide_button.find('span').text('열기');
	}
});


var timed = 500;
// 3. 버튼에 마우스 올렸을경우 .slide_btn이 살짝 나오기(약 10px정도)
slide_button.on('mouseenter', function(event) {
	event.preventDefault();
	slide_btn.animate({'left':'-230px'},timed);
});
slide_button.on('mouseleave', function(event) {
	event.preventDefault();
	slide_btn.animate({'left':'-250px'},timed);
});

// 문제점: 마우스 클릭시 이동처리된 것이 에러를 발생

})(this.jQuery);












