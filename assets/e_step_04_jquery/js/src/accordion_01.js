// accordion_01.js

(function($){
// ==========================================
	/*  jquery 아코디언 
	* 1. 선택 개체 숨기기 ( hide() )
	* 2. 선택 되지 않은 다른 개체 사라지게 만들기
	*   2-1. 현재값에서 높이가 0이 되도록 animate
	*   2-2. 0으로 만들어지면 hide()
	* 3. 선택 개체 바로 뒤 요소 보이게
	*   3-1. show() -> height:0
	*   3-2. 원래 가져야하는 높이 값으로 설정 
	*/

  $('.add_h').find('dd').hide();
  $('dt').on('click',function(e){
  	e.preventDefault();
  	$('dd').hide();
  	$(this).next('dd').show();
  });






// ==========================================
})(this.jQuery);

