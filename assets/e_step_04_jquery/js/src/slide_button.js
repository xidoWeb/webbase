// slide_button.js

(function($) {

var slide_btn = $('.slide_btn');
var slide_ul = slide_btn.children('ul');
var slide_li = slide_ul.children('li');
var slide_button = $('.slide_btn').find('button');

slide_ul.addClass('me_link');

var slide_li_width = slide_li.width();
slide_li.height(slide_li_width);

slide_btn.addClass('leftMove');

// click시 .leftMove를 삭제
slide_button.on('click',function(e){
	e.preventDefault();
	slide_btn.removeClass('leftMove');
});



})(this.jQuery);






