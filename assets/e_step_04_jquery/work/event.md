# event

## 1. 탭메뉴 만들기
- 가장쉽게 만들기: <http://jqueryui.com/tabs/>
- 내용을 이해하기
    1. 순서값 가져오기 ( index() )
    2. 순서값 주기 ( eq() )

## 2. 세로형 슬라이드메뉴 만들기
- <http://jqueryui.com/accordion/>
- .next()
- 순서
	1. 선택했을때, 모든 내용을 접고,
	2. 선택된 다음의 내용을 보이게 만들어라!

## 3. 가로형 슬라이드 메뉴 만들기(아코디언 메뉴)
<http://preview.codecanyon.net/item/accordionza-jquery-plugin/full_screen_preview/101685?ref=andy4321&clickthrough_id=1058941078&redirect_back=true>
- 세로형 슬라이드메뉴 -> 직접 사이즈를 변경해서 처리
- 가로형 슬라이드메뉴 -> 만들기
- .animate()
- call back 함수

## 4. 슬라이드형 메뉴만들기
- animate()
- mouseenter / mouseleave
- append()    -> 선택된 요소 내부의 뒤에 첨부
- prepend()   -> 선택된 요소 내부의 앞에 첨부
- hasClass()  -> class요소가 있는지 없는지를 판단 (true / false)
- is() 				-> hasClass와 유사하지만 좀더 넓은 범위


- appendTo()
- prependTo()
- next()
- prev()
- before()
- after()


## 5. 이미지 갤러리
<https://amazingslider.com/examples/jquery-image-gallery/>
- attr()    -> attribute의약자로 속성을 선택하고 그 내용과 기능을 변경

```javascript
<a href="#" class="hidden">네이버</a>

	$('a').attr('href','http://naver.com');
	$('a').attr({'href':'http://naver.com', 'class':'link'});
  $([선택자]).attr([속성명],[변경할 속성값]);
```
> html영역에서 속성을 사용할때 data를 앞에 붙인상태의 속성은 사용자가 임의로 만든 속성

```javascript

	<div class="box" id="bigBox" title="간단한 말풍선표시" data-youngran=""> </div>
```

- text()    -> 글자를 입력/가져올때
- html()    -> 글자 또는 태그명 입력/가져올때


## 6. 모달윈도우(팝업)
<http://fancybox.net/>
















