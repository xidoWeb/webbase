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
	slide_btn.toggleClass('leftMove', 500);
});
// 1. if문을 이용하여 이모지(이모티콘) 변경처리
  slide_icon.removeClass('fa-arrow-right').addClass('fa-arrow-left');

// 2. 열기 글자와 닫기글자 기능 토글  hint: text()
// text() : 글자만 인지
// html() : 요소까지 포함(요소 코드로 작성하지 않으면 글자로 인지)

 slide_button.find('span').text('닫기');
 // slide_button.html('닫기');


// 3. 버튼에 마우스 올렸을경우 .slide_btn이 살짝 나오기(약 10px정도)



})(this.jQuery);






