// accordion_02.js

(function($){
// +++++++++++++++++++++++++++++++++

	var conBox   = $('#contentBox');
	var conBoxDl = conBox.find('dl');
	var conDt    = conBoxDl.find('dt');
	var conDd    = conBoxDl.find('dd');

  var ddWidth = parseInt(conDd.eq(0).width()); 
  var ddPdL =  parseInt(conDd.eq(0).css('paddingLeft'));
  var ddPdR = parseInt(conDd.eq(0).css('paddingRight'));

  // // 문자를 숫자(정수)로 변환  parseInt
  // console.log('width: ', ddWidth);
  // console.log('padding-left: ', ddPdL);
  // console.log('padding-right: ', ddPdR);

  var ddFullWidth = conDd.eq(0).innerWidth();
  console.log(ddFullWidth);
  
  
// +++++++++++++++++++++++++++++++++
})(this.jQuery);

  // innerWidth();     		 width + padding 크기값을 가져올 경우 사용
  // outerWidth();     		 width + padding + border 크기값을 가져올 경우 사용
  // outerWidth(true);     width + padding + border + margin 크기값을 가져올 경우 사용
  // width(); 		     		 width값만 가져올 경우
  // css('padding');	 		 padding값만 가져올경우



















