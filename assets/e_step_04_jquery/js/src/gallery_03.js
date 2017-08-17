// gallery_03.js

(function($) {
// 기본경로
var url = '../img/gallery/';

// 1-1. gallery page를 json형태로 취해서 사용(내용 일부 변경)
var image = [
		{
		 'thum' : {'img':'j01.jpg'    , 'alt':'j01.jpg thumnail 이미지 설명'}, 
		 'big'  : {'img':'j01_big.jpg', 'alt':'선택된 큰 이미지 설명'}
		},
		{
		 'thum' : {'img':'j02.jpg'    , 'alt':'j02.jpg thumnail 이미지 설명'}, 
		 'big'  : {'img':'j02_big.jpg', 'alt':'선택된 큰 이미지 설명'}
		},
		{
		 'thum' : {'img':'j03.jpg'    , 'alt':'j03.jpg thumnail 이미지 설명'}, 
		 'big'  : {'img':'j03_big.jpg', 'alt':'선택된 큰 이미지 설명'}
		},
		{
		 'thum' : {'img':'j04.jpg'    , 'alt':'j04.jpg thumnail 이미지 설명'}, 
		 'big'  : {'img':'j04_big.jpg', 'alt':'선택된 큰 이미지 설명'}
		},
		{
		 'thum' : {'img':'j05.jpg'    , 'alt':'j05.jpg thumnail 이미지 설명'}, 
		 'big'  : {'img':'j05_big.jpg', 'alt':'선택된 큰 이미지 설명'}
		},
		{
		 'thum' : {'img':'j06.jpg'    , 'alt':'j06.jpg thumnail 이미지 설명'}, 
		 'big'  : {'img':'j06_big.jpg', 'alt':'선택된 큰 이미지 설명'}
		},
		{
		 'thum' : {'img':'j07.jpg'    , 'alt':'j07.jpg thumnail 이미지 설명'}, 
		 'big'  : {'img':'j07_big.jpg', 'alt':'선택된 큰 이미지 설명'}
		},
		{
		 'thum' : {'img':'j08.jpg'    , 'alt':'j08.jpg thumnail 이미지 설명'}, 
		 'big'  : {'img':'j08_big.jpg', 'alt':'선택된 큰 이미지 설명'}
		},
		{
		 'thum' : {'img':'j09.jpg'    , 'alt':'j09.jpg thumnail 이미지 설명'}, 
		 'big'  : {'img':'j09_big.jpg', 'alt':'선택된 큰 이미지 설명'}
		},
		{
		 'thum' : {'img':'j10.jpg'    , 'alt':'j10.jpg thumnail 이미지 설명'}, 
		 'big'  : {'img':'j10_big.jpg', 'alt':'선택된 큰 이미지 설명'}
		},
		{
		 'thum' : {'img':'j11.jpg'    , 'alt':'j11.jpg thumnail 이미지 설명'}, 
		 'big'  : {'img':'j11_big.jpg', 'alt':'선택된 큰 이미지 설명'}
		},
		{
		 'thum' : {'img':'j12.jpg'    , 'alt':'j12.jpg thumnail 이미지 설명'}, 
		 'big'  : {'img':'j12_big.jpg', 'alt':'선택된 큰 이미지 설명'}
		},
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
 var imgSource, imgAlt;

 for(; i<imageLength; i++){
 	// 선택된 위치의 작은이미지를 변수처리
 	imgSource = url + image[i].thum.img;
 	imgAlt    = image[i].thum.alt;

 	// ul내부에 이미지 갯수만큼 li, button, img생성
 	galleryUl.append('<li><button type="button"><img></button></li>');

 	// i번째에 해당하는 li내부의 img의 속성값 처리
 	galleryUl.children('li').eq(i).find('img')
 	         .attr({'src':imgSource,'alt':imgAlt});
 }//for

 // 3. gallery 큰이미지 창 생성
 var bigSource, bigAlt;
 $('.gallery_list').before('<div class="gallery_photo"><img></div>');
 // 최초의 이미지 생성
 bigSource = url + image[0].big.img;
 bigAlt = image[0].big.alt; 
 $('.gallery_photo').find('img').attr({'src':bigSource,'alt':bigAlt});

// 4. '.gallery_list'의 'li'를 클릭하면, 큰이미지에 내용변경처리
var img_list = galleryUl.children('li');

img_list.on('click',function(e) {
	e.preventDefault();
 // li중에 무엇을 선택했는지 확인(선택자와 순서)
 // console.log( $(this) );
 // console.log( $(this).index() );
 // console.log( img_list.index( $(this) ) );
 var _this = $(this);
 var _this_index = _this.index();

 bigSource = url + image[_this_index].big.img;
 bigAlt = image[_this_index].big.alt; 
 $('.gallery_photo').find('img').attr({'src':bigSource,'alt':bigAlt});
});

})(this.jQuery);





