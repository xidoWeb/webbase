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


## 7. slide banner
### 접근성을 고려하지 않고 처리하는방법
- append() prepend()
- appendTo() prependTo()

- setInterval()   -> 일정시간 간격만큼 반복
- clearInterval() -> setInerval을 취소
- setTimeout()    -> 지연시간(일정시간 뒤에 동작) - 함수기능 전체를 지연
- delay()         -> 지연시간(일시정지) - animate, slideToggle

기본 구조형
`#addBanner` 요소 내부에 4개의 이미지를 담으려 한다면, 
- 4개의 이미지를 감싸는 요소는 가로형일경우 가로 4배만큼 커야함
- 4개의 이미지요소는 가로값이 100%처리하면 안된다.(4개를 가정하면 width:25%)
- 내부에 들어있는 요소에 이미지가 담긴다면 `:nth-of-type`, `:nth-child` 를 사용할 수 없다.
- 각각 `class` 이름을 부여

## 8. json basic
> javascript array, object형태의 결합된 데이터형
> array형식, object형식을 그대로 사용한다.

- after()   -> 선택자의 동일레벨 상태에서 다음에 위치한 선택자 또는 생성자(요소)처리
- before()  -> 선택자의 동일레벨 상태에서 이전에 생성자(요소)처리 또는 선택

## 9. gallery step3, modal window, popup page, popup banner

- next()
- prev()

## 10. onepage scroll

- $(this).attr('href')  / $(this.hash)  : 일치한다고 보기는 어렵다.
- scrollTop()
- offset()
  - top
  - left
  - right

## 11. mousewheel, DOMMouseScroll
- mousewheel : ie, chrome, opera
- DOMMouseScroll: fire fox

> 사용할 브라우저에 필요한 기능이 있느지 존재유무를 판단.
> 마우스 휠을 위로 올릴것인지, 아래로 내릴것인지 판단.

- on('touchmove')   : 터치마우스의 경우는 원활한 동작이 다소 어렵다!


## 12. landing page
> landing page란?
> 웹에서 일정한 위치, 스크롤의 변화를 감자하여 지정된 위치에 원하는 기능을 
> 동작하도록 만드는 기능


## 13. parallax page
> parallax 란?
> 시간차 라는 의미
> 스크롤의 기능에 따라 몇가지 반응이 다소 다르게 변화하는 것!

## 14. page-x, page-y
> page-x , page-y 의 기능은 **마우스 좌표를 인지**하여, 원하는 이미지의 위를 변형하게하거나,
> 필요한 이미지를 바꿔치기하는 기법등의 역할을 하는 것....

- on('mousemove') : 마우스 이동시 처리되는 이벤트
- [event].pagex   : 이벤트의 기능을 받아 처리되는 X 좌표처리
- [event].pagey   : 이벤트의 기능을 받아 처리되는 Y 좌표처리

## 15. slideBanner _02
- clone()


## 16. movie & music player
- play()  : 재생
- pause() : 정지(일시정지)

- 파일을 바로 재생, 정지는 없다. :배열값이 사용된다는것



