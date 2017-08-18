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

// li클릭시 모달창 띄우기
 gallery_list.on('click',function(e){
 	e.preventDefault();
 	var _this = $(this);
 	var _src = _this.attr('data-src');
 	var _alt = _this.attr('data-alt');

 	modal_img.attr({'src':_src, 'alt':_alt});
	ModalOn('modal_dp');
 });




})(this.jQuery);












