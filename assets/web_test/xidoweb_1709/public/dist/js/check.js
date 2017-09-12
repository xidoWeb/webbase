//  check.js

	(function($) {
			// $('#allCheck').on('click',function() {
			// 		$('input[type="checkbox"]').attr('checked',true);
			// });

// 전체 동의 및 해제
			$('#allCheck').on('click',function() {
				var allCheck = $('#allCheck');
				var allCheckState = allCheck.attr('checked');

				if(!allCheckState == true){
					$('input[type="checkbox"]').each(function(){
						$(this).attr('checked',true);
					}); 
					$('label>span').each(function(){
						$(this).addClass('moreIcon');
					});
 
				}else{
					$('input[type="checkbox"]').each(function(){
						$(this).attr('checked',false);
					});
					$('label>span').each(function(){
						$(this).removeClass('moreIcon');
					});
				}
			});


// 각각 선택 및 해제
		var each_ck = $('.each_check').find('input[type="checkbox"]');

			each_ck.on('click',function() {
				var _this = $(this);
				var thisId = _this.attr('id');
				var thisCheck = _this.attr('checked');
				// console.log(thisId);
				// console.log(thisCheck);
				var labelCheck = $('label[for="'+thisId+'"]');



				if(!thisCheck == true){
					_this.attr('checked',true);
					labelCheck.children('span').addClass('moreIcon');
					eachCheck();
				}else{
					_this.attr('checked',false);
					labelCheck.children('span').removeClass('moreIcon');

					eachCheck();
				}

			// 각각 체크시 전체 체크되면 전체 동의로 확인처리
				function eachCheck(){
				var term = $('#termCheck').attr('checked');
				var person = $('#personCheck').attr('checked');
				console.log(term);
				console.log(person);

				if(term && person){
					$('#allCheck').attr('checked',true);
					$('label[for="allCheck"]>span').addClass('moreIcon');
					// console.log('all checked');
				}else{
					$('#allCheck').attr('checked',false);
					$('label[for="allCheck"]>span').removeClass('moreIcon');
				}
			}

			});	

// 

		})(this.jQuery);