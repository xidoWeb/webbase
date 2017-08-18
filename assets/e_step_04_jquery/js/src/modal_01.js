//  modal_01.js

(function($) {
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

// -------------------------------
 $('.modal_bg').on('click',function(){
	 ModalOff('modal_dp');
 });


})(this.jQuery);












