// slideBanner_01.js

(function($) {
  // slide banner 1
  var bannerBox = $('#addBannerBox');
  var banner_group = bannerBox.children('ul');
  var btn = $('.btn');
  var btn_l = btn.children('button:first');
  var btn_r = btn.children('button:last');
  var timed = 500;

  // 1. 처음에 보이는 이미지가 첫번째 이미지로 보이기
  	var li_last = banner_group.children('li').last();
  	// banner_group 부모
  	// li_last 자식의 마지막
  	
  	banner_group.prepend(li_last);          //   [부모].내부앞에[자식으로..]   담기
  	//li_last.prependTo(banner_group);				//   [자식으로처리될선택].내부앞에[부모]  담기

	// 1 클릭시 한칸 왼쪽으로 이동 후  // .animate({marginLeft:-200+'%'}
  // 2. 오른버튼을 클릭하면, 오른쪽 이미지가 보이게 이동 후
  		// 2 맨앞의 요소를 마지막으로 이동(점프) 과 동시에  // 첫요소를변수, 첫요소를 맨뒤로( append() )
  		// 3 처음상태의 형태로 처리(단, 내부요소는 변경된 형태 그대로) //.css({marginLeft:-100+'%'});

  // 3. 여러번 클릭해도 계속 보이게 만들기  
  // 4. 빠르게 클릭하면 생기는 메모리기능이 사라지게 되도록 처리 // .stop()
  		
  	btn_r.on('click',function(e){
  		e.preventDefault();
  		banner_group.stop().animate({marginLeft:-200+'%'}, timed, function(){
  			var li_fr = banner_group.children('li').first();   // 이동된 변수
	  			banner_group.append(li_fr); 			
	  			banner_group.css({marginLeft:-100+'%'});
  		});
  	});


  // 5. 왼쪽 버튼을 클릭하면, 위와 동일한 반복기능 처리

  


})(this.jQuery);








