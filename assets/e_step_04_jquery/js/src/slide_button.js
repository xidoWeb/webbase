// slide_button.js

(function($) {
	/* 
   1. .me_link이름을 .slide_btn>ul에 적용
   2. .slide_btn>ul>li의 가로값을 세로에도 적용(가로 == 세로)
*/

// 1 
// show /hide  - fadeIn/fadeOut - slideDown/slideUp 
// addClass/removeClass

$('.slide_btn>ul').addClass('me_link');

// 2
// .slide_btn>ul>li의 가로값

// $('.slide_btn>ul>li').css('width'); // 기본 가로값파악
// $('.slide_btn>ul>li').width(); // 기본 가로값
// $('.slide_btn>ul>li').innerWidth(); // padding포함
// $('.slide_btn>ul>li').outerWidth(); // border포함
// $('.slide_btn>ul>li').outerWidth(true); // margin까지 포함

var slide_li_width = $('.slide_btn>ul>li').width();
$('.slide_btn>ul>li').height(slide_li_width);



})(this.jQuery);






