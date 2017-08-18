//  modal_01.js

(function($) {
	var modalBox = $('.modal_box');
	modalBox.html('<img>');
	var modal_img = modalBox.find('img');
	// modal_img.attr({'src':'../img/gallery/j01_big.jpg', 'alt':'큰이미지 내용'});


// addClass 다수처리를 위한 함수생성
	var ModalOff = function(display){	
		$('.modal_box').addClass(display);
		$('.modal_bg').addClass(display);
	};
	// removeClass 다수처리
	var ModalOn = function(display){
		$('.modal_box').removeClass(display);
		$('.modal_bg').removeClass(display);
	};
	// Modal창 사라지기
	 ModalOff('modal_dp');

// -------------------------------
 $('.modal_bg').on('click',function(){
	 ModalOff('modal_dp');
 });
// ------------------------------
 var galleryBox = $('.gallery_list');
 var gallery_list = galleryBox.children('li');
 // modal 큰이미지 json형태로 처리
 var url = '../img/gallery/'
 var modalData = [
	 	{
	 		'thum':'j01.jpg',
	 		'big' : {'src':'j01_big.jpg', 'alt':'큰이미지_1 설명'}
	 	},
	 	{
	 		'thum':'j02.jpg',
	 		'big' : {'src':'j02_big.jpg', 'alt':'큰이미지_2 설명'}
	 	},
	 	{
	 		'thum':'j03.jpg',
	 		'big' : {'src':'j03_big.jpg', 'alt':'큰이미지_3 설명'}
	 	},
	 	{
	 		'thum':'j04.jpg',
	 		'big' : {'src':'j04_big.jpg', 'alt':'큰이미지_4 설명'}
	 	},
	 	{
	 		'thum':'j05.jpg',
	 		'big' : {'src':'j05_big.jpg', 'alt':'큰이미지_5 설명'}
	 	},
	 	{
	 		'thum':'j06.jpg',
	 		'big' : {'src':'j06_big.jpg', 'alt':'큰이미지_6 설명'}
	 	},
	 	{
	 		'thum':'j07.jpg',
	 		'big' : {'src':'j07_big.jpg', 'alt':'큰이미지_7 설명'}
	 	},
	 	{
	 		'thum':'j08.jpg',
	 		'big' : {'src':'j08_big.jpg', 'alt':'큰이미지_8 설명'}
	 	},
	];
// ------------------------------------
// li요소 각각에 배경이미지 삽입
var liImg;
// 버튼 반복처리
var i = 0;
var dataLength = modalData.length;
for(; i<dataLength; i++){
 liImg = url + modalData[i].thum;
	// console.log(liImg);
 gallery_list.eq(i).find('button')
             .css({'backgroundImage':'url('+ liImg +')',
             	     'backgroundRepeat':'no-repeat',
									 'backgroundPosition':'center',
									 'backgroundSize':'cover'});
}
// ------------------------------------
// li클릭시 모달창 띄우기
 gallery_list.on('click',function(e){
 	e.preventDefault();
 	var _this = $(this);
 	var _this_i = _this.index();
	
 	var _src = url + modalData[_this_i].big.src;
 	var _alt = modalData[_this_i].big.alt;
 	modal_img.attr({'src':_src, 'alt':_alt});
	ModalOn('modal_dp');
 });




})(this.jQuery);












