// player_01.js

(function($) {
	// video를 선택
	// 재생버튼 선택
	// 정지버튼 선택

	var vi = $('#videoBox');
	var mu = $('#musicBox');
	
	var video = vi.find('video')[0];
	var audio =mu.find('audio')[0];

	var viPlay = vi.find('.play');
	var viPause = vi.find('.pause');
	var muPlay = mu.find('.play');
	var muPause = mu.find('.pause');

	// video, audio는 순서라는 개념을 가지고 있다.

 viPlay.on('click',function(e) {
 	e.preventDefault();
 	video.play();
 });

 viPause.on('click',['button'],function(e) {
	e.preventDefault();
	video.pause();
});
// ---------------------------------------
 muPlay.on('click',function(e) {
 	e.preventDefault();
 	audio.play();
 });

 muPause.on('click',['button'],function(e) {
	e.preventDefault();
	audio.pause();
});


})(this.jQuery);


