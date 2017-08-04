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

	// $('dt').on('click',function(e){
// 	console.log($(this).next('dd').index());
// });



  $('.add_h').find('dd').hide();
  $('dt').on('click',function(e){
  	e.preventDefault();

  	var _$this = $(this);
  	var nextDd = _$this.next('dd');

  	// $('dd').not( $(this).next('dd') )
  	nextDd.siblings('dd')
  	      .animate({height:0, padding:0},function(){
				  		$(this).css({display:'none'});
				  	}); 

  	var ddDp = nextDd.css('display');
  	 if(ddDp == 'none'){

	  	nextDd.css({display:'block', padding:0, height:0, overflow:'hidden'})
	  	      .animate({height:'200px', padding:'0.5em'});
  	 }else{

  	 	nextDd.animate({height:0, padding:0},function(){
				  		$(this).css({display:'none'});
				  	});
  	 }// else      
  });  // $('dt').on('click')


// ==========================================
})(this.jQuery);


// animate 기능은   == css('transition')
// .css({transition:'all 500ms'});
// .animate({},500);   // display:block는 없다
// .animate({height:'auto'})  // auto가 없다

// $('dd').width()		// ()안에 값을 입력하지 않으면, 가져오는기능  -> dd의 가로값 파악
// $('dd').height()  // ()안에 값을 입력하지 않으면, 가져오는기능  -> dd의 세로값 파악

// $(this)  // 선택된 요소

