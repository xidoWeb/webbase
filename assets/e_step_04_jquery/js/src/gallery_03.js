// gallery_03.js

(function($) {
// 기본경로
var url = '../img/gallery/';

// 1. gallery page를 json형태로 취해서 사용
var image = [
		{'thum' : 'j01.jpg', 'big' : 'j01_big.jpg'},
		{'thum' : 'j02.jpg', 'big' : 'j02_big.jpg'},
		{'thum' : 'j03.jpg', 'big' : 'j03_big.jpg'},
		{'thum' : 'j04.jpg', 'big' : 'j04_big.jpg'},
		{'thum' : 'j05.jpg', 'big' : 'j05_big.jpg'},
		{'thum' : 'j06.jpg', 'big' : 'j06_big.jpg'},
		{'thum' : 'j07.jpg', 'big' : 'j07_big.jpg'},
		{'thum' : 'j08.jpg', 'big' : 'j08_big.jpg'},
		{'thum' : 'j09.jpg', 'big' : 'j09_big.jpg'},
		{'thum' : 'j10.jpg', 'big' : 'j10_big.jpg'},
		{'thum' : 'j11.jpg', 'big' : 'j11_big.jpg'},
		{'thum' : 'j12.jpg', 'big' : 'j12_big.jpg'},
	];	
// console.log(image.length);
// console.log(image[5]);
// console.log(url + image[5].thum);

// 2. #wrap 내부에 thum리스트 만들기
 $('#wrap').append('<div class="gallery_list"><ul> </ul></div>');
 var galleryUl = $('.gallery_list').children('ul');
 // 반복처리할 내용 변수
 var i = 0;
 var imageLength = image.length;
 var imgSource;

 for(; i<imageLength; i++){
 	// 선택된 위치의 작은이미지를 변수처리
 	imgSource = url + image[i].thum;
 	// ul내부에 이미지 갯수만큼 li, button, img생성
 	galleryUl.append('<li><button type="button"><img></button></li>');
 	// i번째에 해당하는 li내부의 img의 속성값 처리
 	galleryUl.children('li').eq(i).find('img').attr({'src':imgSource,'alt':''});
 }//for




})(this.jQuery);





