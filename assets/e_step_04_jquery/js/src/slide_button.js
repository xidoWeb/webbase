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

	var slide_left = parseInt(slide_btn.css('left'));

	if( slide_left < 0){
		slide_btn.removeClass('leftMove', 500);
		slide_icon.removeClass('fa-arrow-right').addClass('fa-arrow-left');
	  slide_button.find('span').text('닫기');
	}else{
		slide_btn.addClass('leftMove', 500);
		slide_icon.removeClass('fa-arrow-left').addClass('fa-arrow-right');
	  slide_button.find('span').text('열기');
	}

});


// 3. 버튼에 마우스 올렸을경우 .slide_btn이 살짝 나오기(약 10px정도)



})(this.jQuery);






