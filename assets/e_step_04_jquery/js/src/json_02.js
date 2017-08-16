//  json_02.js
(function($) {
// var product = [

// 		{'car'   :
// 		         ['audi','jaguar','롤스로이스','폭스바겐','현다이']},
// 		{'pen'   :
// 		         ['모나미','지브라','라미','몽블랑']},
// 		{'coffee':
// 		         ['자바','비엔나','스타벅스','자바시티','던킨'],
// 		 'juice' :
// 		         ['ade','smoodi','fruit']
// 		}
// 	];
// console.log(product[2]);
// console.log(product[2].coffee);
// console.log(product[2].coffee.length);
// console.log(product[2].juice[0]);


// --------------------------
var address = '../img/coffee/';
var coffee_01 = [
		[ {'img': {'src':'chai.jpg','alt':'제품1 이미지설명'} },
		  {'menu':{'title':'chai', 'content':'제품1 설명'}}
		]// 제품 1
	];
	
$('body').find('#headBox').after('<div id="coffee"><ul>');
var coffee = $('#coffee').children('ul');
// #coffee 에 li항목을 만들고, 각각의 내용을 삽입 test
	// coffee.append('<li>');
	// coffee.find('li').append('<div><img>');
	// coffee.find('li').append('<dl><dt>');
	// coffee.find('li').children('dt').after('<dd>');
coffee.append('<li> <div><img></div>   <dl> <dt></dt> <dd></dd> </dl> </li>');
var img     = coffee.find('li').eq(0).find('img');
var title   = coffee.find('li').eq(0).find('dt');
var content = coffee.find('li').eq(0).find('dd');

img.attr({'src':address + coffee_01[0][0].img.src , 
	        'alt':address + coffee_01[0][0].img.alt});
title.text(coffee_01[0][1].menu.title);
content.text(coffee_01[0][1].menu.content);


// 반복


})(this.jQuery);












