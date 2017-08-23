# GULP

GULP란? streaming build system이라 불리기도하며, 자동화도구(task runner system)으로 불리기도 하는시스템.

자동화 도구의 기능 변환, 병합화(파일을 합치기), 난독화(개발자 외에 파일명, 내용을 확인하기 어렵게 만들기), 캡슐화(보호처리하여 내용을 볼 수 없게 처리) 등의 기능을 자동으로 처리하는 시스템

---
[TOC]

---

## gulp에 필요한 기본 자료

1. [node.js(lts버전)](http://nodejs.org)
2. node package(기본은 npm, 별도의 기능으로 만들어진 [yarn](https://yarnpkg.com)을 사용해도 무방)
3. [git-bash](http://git-scm.com/download)

##### yarn설치

```shell
$ npm install yarn				
```
위 기능이 대표적이나 현재는 별도설치를 권장

##### 각 기능별설치 확인(2017년 8월 기준)

```shell
$ git --version 				// git version 2.11.0 (apple기준)
$ node --version				// node version 6.11.2
$ npm --version					// npm version 3.10.10
$ yarn --version				// yarn version 0.27.5 
```

위 내용을 확인하였다면 gulp를 설치할 준비가 되었습니다. 

---

## mac의 경우라면!!

컴퓨터에 nodejs를 설치하기 전 먼저 설치되어 있는지 확인하세요.
그리고 이전버전의 내용은 모두삭제 하는 것이 좋습니다. 

```shell
$ sudo npm uninstall npm -g
$ sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*
$ sudo rm -rf /usr/local/include/node /Users/$USER/.npm
$ sudo rm /usr/local/bin/node
$ sudo rm /usr/local/share/man/man1/node.1
$ sudo rm /usr/local/lib/dtrace/node.d
```

위 내용을 한줄씩 사용하시면 삭제가 가능합니다. 
그리고 다시 설치하세요.

또한 컴퓨터에 `sudo`를 붙여 설치하는 것은 좋은 방법은 아닙니다.
관리자 모드를 통해 컴퓨터에 강제설치하겠다는 의미로 사용하는 것과 동일한 의미입니다. 
그렇기 때문에 아래의 코드를 작성하여 주면 별도의 sudo를 사용하지 않고도 설치 및 사용할 수 있습니다.

```shell
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash
```

---

## 전역에 설치하기

**GULP**는 설치를 두번합니다.

1. 컴퓨터 전역에 설치
2. 사용할 폴더에 설치

간단하게 설명하자면, 컴퓨터 전역에 설치한다는 의미는 **GULP**의 기능을 사용할때 실행을 위한 처리방법이며,
사용할 폴더에 설치하는 것은 **GULP**의 각각의 다양한 기능을 수행할 수 있도록 만드는 것 입니다.

>  우선 컴퓨터 전역에 설치하겠습니다. 

```shell
$ yarn global add gulp
```

```shell
$ npm install gulp --global
```

위 명령어 두가지 중  하나만 입력하면 됩니다. 
`yarn`을 이용하여 설치가 전역에 안되는 경우가 있기에 npm을 이용한 설치방법을 작성해 놓았습니다. 

이제 잠시 기다리면 컴퓨터에 설치된 것을 확인할 수있습니다. 

```shell
$ gulp --version
```

위 명령어를 통해 설치되었는지 버전은 무엇인지를 체크하세요.(현재 버전은 3.9입니다. )
**GULP** 는 4.0 버전으로도 나와있는 상태지만, 3버전과 작성방법이 다소 다르며, 현재 beta버전이기에 3버전을 사용하였습니다. 

---

## GULP를 설치 하기전 미리 확인할 것

이제 사용할 폴더에 설치하는 방법이 남았습니다. 
먼저 폴더를 세팅하고 사용할 폴더에  위치한 후 `cli`를 실행 시키면 됩니다. 

>  실행에 앞서 간단한 내용을 이해하고 넘어가겠습니다.
>  아래 내용을 미리 기억하세요. 
>  처음 생성해야하는 내용들입니다. 

1. node_modules (자동생성) 
2. .gitignore (직접생성: node_modules 폴더는 git에 올리지 않는다!)
3. package.json (자동생성)
4. gulpfile.js  (직접 생성)


위내용을 간단하게 설명하겠습니다. 
**node_modules**는 현재폴더에 **GULP**를 설치하면 자동으로 같이 설치가 됩니다. 
이때,  **node_modules** 폴더에 사용할 다양한 `package` 기능을 설치하여 사용하게 됩니다.
하지만 용량이 크기 때문에 `github`에는 올릴 수 없습니다. 

그래서 `.gitignore` 파일을 생성하여 해당폴더는 `git push`처리되지 않도록 해야합니다. 

```shell
# node_modules 폴더 업로드 금지
node_modules/
```

위 내용은 `.gitignore`파일에 작성하는 내용입니다. 
이전에 작성한 파일이 존재한다면 같이 작성하여도 무방합니다.
단 폴더 경로는 상세하게 작성하는 것이 좋습니다. 

그럼 우리가 **GULP**를 설치하고 다른 컴퓨터나 차후에 해당내용을 받아 사용할 때에는 
**node_modules**폴더가 존재하지 않는데 어떻게 처리해야할까요?

이때 필요한 기능이 **`package.json`** 파일입니다. 
**GULP**를 설치하면 자동으로 생기는 파일이며, 
차후 **node_modules**폴더가 존재하지 않는 경우에  **`package.json`**의 작성된 내용을 확인하여 설치할 수 있습니다. 

```shell
$ yarn				// package.json에 작성되어진 내용을 설치하기 위한 명령어
```

위 내용을 작성하면,  **`package.json`** 파일내부에 작성된 기능들이 모두 설치가 됩니다. 
단, 컴퓨터 전역에는 별도로 설치해 주어야합니다. (ex: gulp)

---

### gulp 초기화 및 폴더에 설치하기

#### 설치

```shell
$ npm init -y						// gulp 설치시 내용을 기록하기 위한 초기파일 생성
$ npm install gulp --save-dev		// 해당폴더에 gulp설치
```



```shell
$ yarn add gulp --dev				// npm init -y
									// npm install gulp --save-dev 
									// yarn 명령어에 초기파일생성기능까지 처리됨
```

위 코드는 `yarn`을 이용한 설치방법과, `npm`을 이용한 설치방법입니다.

두가지 방법중 하나만 처리하여도 문제 없으며, `yarn`을 이용하면 설치도 빠르고, 대다수의 기능을 자동으로 처리해 주기 때문에 편하다는 장점이 있습니다. 

이후의 기능에는 `yarn`을 주 기능으로 설치하도록 하겠습니다.

---

### 작성(테스트)

이제 **GULP**를 동작할 수 있도록 내용을 간단하게 작성하도록 하겠습니다.

파일 `gulpfile.js`를 열어 아래 내용을 작상해 보세요.

```javascript
// gulp
var gulp = require('gulp');

gulp.task('test', function(){
  console.log('---------------------------------');
  console.log('gulp를 설치하고, 실행하도록 준비하였습니다.'); 
  console.log('---------------------------------');
});
```

위내용을 작성하고, `cli`프로그램에서 아래와 같이 작성해보세요.

```shell
$ gulp test
```

위 내용을 작성하여 확인해보면 `console.log()`내용에 있는 내용이 나타나는 것을 알 수 있습니다.
이제 **GULP**를 사용할 준비가 되었습니다. (위 내용은 테스트로 작성된 내용이므로 삭제처리하여도 문제 없습니다. )

---

### 기능설치

- 현재폴더에 gulp-sass를 설치

```cli
 $ yarn add gulp-sass -D
```

- 서버기능을 사용할 수 있는 browser-sync설치

```cli
 $ yarn add browser-sync -D
```



------



```shell
var gulp = require('gulp');					// gulp를 사용하기 위해 호출
var sass = require('gulp-sass');			// gulp-sass를 사용하기 위해 호출
```



-  gulp.task(name)   		// 임무 할당(원하는 이름을 사용)

  **gulp.task(name ,  deps , func)** 

  1. 바로위의 실제 형태는 gulp.task('default', [], function(){});
  2. name: gulp의 일을 처리하는 이름(임의 이름)
  3. deps: 바로뒤의 함수기능을 수행하기전에 처리되는 일련의 기능(배열, 생략가능)
  4. func: gulp.task의 기능을 수행(함수)

- gulp.src()                            // 원본의 위치

- .pipe()                                 // 메소드를 연결하여 수행하기 위한 기능

- gulp.dest()                         // 결과의 위치

-  gulp.watch('변화를 감지할 위치', [처리할 task]) 

    -  // 실시간으로 감지해서 변화를 처리하도록


















