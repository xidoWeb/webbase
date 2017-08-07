(function($) {
	
	var bb = $('dd').innerWidth();
	console.log(bb);
	$('dd').hide();
	// 1
		// $('dt').on('click', function(){
		// 	$('dd').not($(this).next('dd')).slideUp();
		// 	$(this).next().slideToggle();

		// });

	// 2
	var timed = 1000;
	 $('dt').first().next('dd').show();
		$('dt').on('mouseenter', function(){
			$('dd').not($(this).next('dd')).stop().animate({width:0,'overflow':'hidden'},timed-300,function(){
				$(this).hide();
			});
			$(this).next('dd').css({'display':'block','overflow':'hidden'}).stop().delay(100).animate({'width':bb},timed);
		});
})(this.jQuery);