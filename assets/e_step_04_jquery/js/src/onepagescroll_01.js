// onepagescroll_01.js

(function($) {
	var nav = $('#gnb');
	var nav_a = nav.find('a');

	nav_a.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top});
	});

})(this.jQuery);