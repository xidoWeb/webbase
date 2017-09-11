// player_01.js

(function($) {
	// video를 선택
	// 재생버튼 선택
	// 정지버튼 선택

	var vi      =  $('#videoBox');
	var mu      =  $('#musicBox');

	var video   =  vi.find('video')[0];
	var audio   =  mu.find('audio');

//  $('audio')에서 왜 [0]을 가져야 하는가?
/*
console.log( $('audio') ); // 소스가 배열 형식으로 나타남, 하위 요소를 파악할때 사용
console.log( $('audio')[0] ); // 컨트롤 기능(재생, 정지)을 사용하기 위해서 사용 
console.log( $('audio').find('source') ); // audio요소의 내부를 파악하려면 []형식이아닌 방법으로 찾는다.
console.log( $('audio').find('source').attr('src') ); // 위와 동일한 내용(속성 src를 찾기위한 방법)
// console.log( $('audio')[0].find('source') ); // 제어의 기능이아닌,내부 속성을 파악할때는 쓸 수 없다.
console.log( $('audio').find('source')[0] );// source코드를 자체를 확인할때는 사용(속성을 접근할 수 없다.)
// console.log( $('audio').find('source')[0].attr('src') );// ('source')[0]접근을 허용하지않음
*/

	var viPlay  =  vi.find('.play');
	var viPause =  vi.find('.pause');
	var muPlay  =  mu.find('.play');
	var muPause =  mu.find('.pause');
	var muNext  =  mu.find('.next');
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
var musicUrl = '../multi/music/';
var myMusicList = [
		{'mp3': '01- In Da Club [Explicit].mp3'                            , 'nar':'음악 설명 또는 가사'},
		{'mp3': '02- 21 Questions [feat Nate Dogg] [Explicit].mp3'         , 'nar':'음악 설명 또는 가사'},
		{'mp3': '03- P I M P [Explicit].mp3'                               , 'nar':'음악 설명 또는 가사'},
		{'mp3': '04- Disco Inferno [Explicit].mp3'                         , 'nar':'음악 설명 또는 가사'},
		{'mp3': '05- Candy Shop [feat Olivia] [Explicit].mp3'              , 'nar':'음악 설명 또는 가사'},
		{'mp3': '06- Just A Lil Bit [Explicit].mp3'                        , 'nar':'음악 설명 또는 가사'},
		{'mp3': '07- Outta Control (Remix) [feat Mobb Deep] [Explicit].mp3', 'nar':'음악 설명 또는 가사'},
		{'mp3': '08- Hustler s Ambition [Explicit].mp3'                    , 'nar':'음악 설명 또는 가사'},
		{'mp3': '09- Best Friend (Remix) [feat Olivia].mp3'                , 'nar':'음악 설명 또는 가사'},
		{'mp3': '10- Window Shopper [Explicit].mp3'                        , 'nar':'음악 설명 또는 가사'}
	];

 muPause.hide();
 muPlay.on('click',function(e) {
 	e.preventDefault();
 	audio[0].play();
 	// 상황에 따른 버튼 보이기와 숨기기
 	muPause.show();
 	muPlay.hide();
 });

 muPause.on('click',['button'],function(e) {
	e.preventDefault();
	audio[0].pause();
	// 상황에 따른 버튼 보이기와 숨기기
	muPause.hide();
 	muPlay.show();
});

// var muNext = $('.next');
var i = 0;
muNext.on('click',function(e) {
	e.preventDefault();
 i++;
  $('audio').find('source').attr({'src':musicUrl + myMusicList[4].mp3 });
  audio[0].load();
  muPause.hide();
 	muPlay.show();

});







})(this.jQuery);


