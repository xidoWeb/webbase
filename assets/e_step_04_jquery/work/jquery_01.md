# jquery?
jquery란? 자바스크립트의 라이브러리, 
- 복잡하고 어려운 자바스크립트의 코드를 좀더 쉽고 빠르게 작성하도록 만들어진 도구
- 크로스브라우징이 어느정도 고려되어 있다.(자바스크립트는 직접 해야한다.)
- 단점, 자바스크립트를 직접적으로 사용하는 것이 아니기 때문에 다소 느리다.
- 한번 에러나면 수습하기 좀 어렵다.
- 기존의 플러그인(jQuery를 더 쉽게 만드는 도구)을 여러개 겹치는 경우(3개이상사용시 특히) 해결......... 


## 선택자
jQuery선택자는 css의 선택자와 거의 같습니다.


### css
 ```css
	#box{}
  .box2{}
  div{}
  .box3 li{}
  ul>li>a{}
 ```
위의 내용은 css를 사용할 때 사용하는 선택자의 형태입니다. 
이를 jQuery선택자 형태로 변형시켜 보겟습니다
(단, css를 작업한다는 조건)

### jquery
```javascript
 $('#box').css({})
 $('.box2').css({})
 $('div').css({})
 $('.box3 li').css({})
 $('ul>li>a').css({})
```


사실상 기능이 조금더 많습니다!
---
```javascript
 $('ul').children('li')
 $('ul').find('li')
 $('li').parent()
 $('dd').siblings()
 $('li:first')
 $('li:last')
 $('li').eq(0)		  // 순서를 선택
 $('li').index()		// 순서를 탐색
 $('li:nth-child(odd)')
 $('li:nth-child(even)')
```
---

- `.show()`
- `.hide()`
- `.toggle()`

- `.fadeIn()`
- `.fadeOut()`
- `.fadeToggle()`

- `.slideDown()`
- `.slideUp()`
- `.slideToggle()`

- `.addClass()`
- `.removeClass()`
- `.toggleClass()`

---
## event

```javascript
$('[선택]').on('[이벤트]', function(event){
	event.preventDefault();
/*
	pre // 먼저...
	event // 발생되는 기능
	default // 취소
	*/

	// return false;
});
```

- 'click'  : 왼버튼만 누르는것을 쉽게 확인
- 'dblclick' : 더블클릭(왼버튼)
- 'mousedown' : 왼(1), 가운데(2), 오른(3)
- 'mouseup' : 왼(1), 가운데(2), 오른(3)

- 'keypress'
- 'keydown'
- 'keyup'

- 'mouseenter'
- 'mouseleave'
- 'mouseover'
- 'mouseout'

- 'scroll'
- 'mousewheel'   // `fire fox`에 대해서는 별도로 처리
- 'resize'

- 'focus'
- 'blur'


- 'trigger'
- 'draggable'














