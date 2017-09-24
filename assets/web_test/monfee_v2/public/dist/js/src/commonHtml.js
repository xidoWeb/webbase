// commonHeadHtml.js
 (function($) {
 	var wrap = $('#wrap');
 	wrap.prepend('<header id="headBox"></header>');
 	wrap.append('<footer id="footBox"></footer>');

 	var headBox = $('#headBox');
 	var footBox = $('#footBox');

 	headBox.load('./src/headBox.html');
 	footBox.load('./src/footBox.html');
 })(this.jQuery);