# jQuery 설치

**javascript는 사실상 초보자가 접하기에는 많은 어려움**이 있습니다.
**디자이너이거나, 처음 언어를 접하는 분들에게는  다소 어려운 일**입니다. 
그런 것들을 **해소시켜 줄 수 있는 것이 있습니다. 바로 jQuery**입니다.

jQuery는 자바스크립트(javascript) 라이브러리(library)라고 합니다. 

라이브러리란 무엇일까요?
자주 사용하는 코드들을 재사용할 수 있는 형태로 가공해서 프로그래밍 효율을 높여주는 코드들을 의미합니다.

jQuery는 다음과 같은 장점이 있습니다.

- jQuery는 빠르고, 작고, 기능이 풍부한 자바스크립트 라이브러리입니다. 
- jQuery는 여러 브라우저에서 동작하는 사용하기 쉬운 API를 통해 
  HTML 문서 탐색과 조작, 이벤트 처리, 애니메이션, Ajax 등을 훨씬 더 간단하게 만들어줍니다. 
- 다양성과 확장성을 겸비한 jQuery는 수백만 명이 자바스크립트 코드를 작성하는 방식을 바꿨습니다.
- jQuery는 MIT 라이선스로 배포되는 무료 오픈소스 소프트웨어입니다.

---

jquery는 [이곳](http://jquery.com)에서 자료를 받을 수 있습니다.
좀더 정확한 자료를 받기 위해, <http://code.jquery.com>에서 받도록 하겠습니다.

위 페이지에서 내용상 minified링크 위에서 마우스 오른버튼을 누르면 다른이름으로 저장버튼을 눌러 다운 받을 수 있습니다. 

총 두개의 파일을 다운 받아 저장 후 사용하면 됩니다.

- [jquery.3.x](http://code.jquery.com/jquery-3.2.1.min.js)
- [jquery.ui ](http://code.jquery.com/ui/1.12.1/jquery-ui.min.js)

---

```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
	<meta charset="UTF-8">
	<script src="[jquery 3.x버전]"></script>
	<script src="[jquery ui]"></script>
	<title>Document</title>
</head>
<body>
	
  <script>
    (function($){
      // jQuery작업 영역
    })(this.jQuery);
  </script>
</body>
</html>
```

위 내용이 기본 내용입니다. 
간단하게 내용을 분할하여 추가 설명하도록 하겠습니다. 

```html
<head>
	<meta charset="UTF-8">
	<script src="[jquery 3.x버전]"></script>
	<script src="[jquery ui]"></script>
	<title>Document</title>
</head>
```

`head`내용에서 다운받은 `jquery`파일을 연결하세요.
일반적으로 **script**파일은 **css**파일을 먼저 연결한 다음 사용합니다. 

```html
<body>
	
  <script>
    (function($){
      // jQuery작업 영역
    })(this.jQuery);
  </script>
</body>
```

**script**내부에 작성된 코드는 `jQuery`를 작성하기 위한 기본 세팅입니다. 

차 후에는 별도의 파일로 작성하여 연결 하겠습니다.

---

올바르게 연결되었는지 간단하게 테스트 해보겠습니다.

```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
  <meta charset="UTF-8">
  <script src="http://code.jquery.com/jquery.js"></script>
  <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<title>Document</title>
</head>
<body>
	
  <script>
    (function($){
      // body영역 배경색상 '#afc' 처리
      $('body').css({'backgroundColor':'#afc'});
    })(this.jQuery);
  </script>
</body>
</html>
```

위 내용중 

`<script src="http://code.jquery.com/jquery.js"></script>
  <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>`
내용은 웹과 연동되어야 구현이 되는 **CDN**형식입니다. 

배경색이 변경되어 있다면 문제없이 연결된 것 입니다. 
그렇지 않다면 **console**창을 확인하여 문제점을 확인해 보세요.