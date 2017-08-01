# javascript 기초_4-4 함수2

이번시간에는 함수의 기법에 따른 종류에 대해 알아보도록 하겠습니다.
다소 어려운 부분들이 많이 존재합니다. 
한번에 이해하는것 보다 자주보고 오랜시간이 지나더라도 이해하는게 좋습니다.

---

[TOC]

---

## 함수의 기법에 따른 종류

함수는 함수표현식, 선언식 외에 사용하는 기법이나 여러 방법을 대신한 종류가 많습니다.  
가장 대표인 것이 다음과 같습니다.

- 재귀함수
- 클로저
- 즉시실행함수

---

### 재귀

재귀 함수란 일반적으로 **자기 자신을 자기 이름으로 호출하는 형태**입니다.

```javascript
function factorial(num){
    if(num <= 1){
        return 1;
    } else {
        return num * factorial(num-1);
    }
}
```

재귀의 전형적 예제인 **팩토리 함수**입니다.
하지만 아래와 같은 코드를 추가 하면 동작하지 않습니다.

```javascript
var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4)); //에러
```

anotherFactorial을 실행하려했으나 내부의 return num * factorial(num-1); 호출 시 factorial이 null로 설정되어 함수가 아니기 때문에 에러가 발생합니다.

아래와 같이 해결할 수 있습니다.

```javascript
function factorial(num){
    if(num <= 1){
        return 1;
    } else {
        return num * arguments.callee(num-1);
    }
}
```

이전 참조타입 포스트에서 배운 arguments.callee를 사용하여 위 문제를 해결 할 수 있습니다.
자바스크립트에서는 일반적으로 재귀함수를 사용할 때 항상 함수 이름대신 위와같이 쓰기를 권장합니다.

하지만 스트릭트 모드에서는 arguments.callee값에 접근할 수 없습니다. 에러가 발생하기 때문에 **이름 붙은 함수 표현식**을 사용해서 같은 결과를 낼 수 있습니다.
아래 예제를 보시겠습니다.

```javascript
var factorial = (function f(num){
    if (num <= 1){
        return 1;
    } else {
        return num * f(num-1);
    }
});
```

이름 붙은 함수 표현식 f()를 생성해서 할당했습니다.
f()는 다른 변수에 할당 해도 그대로 유지되므로 재귀 호출은 정확히 실행됩니다.

```javascript
var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4)); //24
```

factorial은 f()를 바라보고 있고
anotherFactorial도 f()를 바라보고 있습니다.

factorial을 지지고 볶아도 anotherFactorial은 정상적으로 동작합니다.

이 패턴은 스트릭트 모드, 비 스트릭트 모드 둘다 동작합니다.

---

### 클로저

익명 함수와 클로저는 자주 잘못 혼용 됩니다.
클로저는 다른 함수의 스코프에 있는 변수에 접근 가능한 함수입니다.

아래 예제를 다시한번 봅시다.

```javascript
function createFunction(separator){
    return function(object1, object2){
        var sumString = object1 + separator + object2;
        return sumString;
    }
}

var tFunc = createFunction(':');

console.log(tFunc("name","kendrick")); //name:kendrick
```

예제를 봅시다.
createFunction에서 리턴받은 익명함수를 tFunc로 할당합니다.

tFunc(“name”,”kendrick”);으로 실행하는데 생성할떄 넣은 separator 값을 이용하여 sumString을 리턴해주네요

위 예제와 같이 내부함수에서 외부함수에 변수에 접근하는 것을 클로져라고 합니다.

그런데 이상한게 있습니다. 분명 우리가 배우기로는 함수 내부 지역변수는 함수가 실행되는 동안에만 존재합니다.
하지만! createFunction(“:”)이 실행되고 내부의 익명 함수가 생길 때, 익명함수 스코프변수에 createFunction의 (** : **매개변수가 할당된) 활성화 객체가 추가 되게 됩니다.
그로인해 “:”매개변수를 가진 createFunction의 활성화 객체가 사라지지않고 메모리에 존재하게 됩니다.

다시 요약하자면,
내부 함수(익명함수) 에서 외부 함수의 변수(separator)에 접근합니다.
이런일이 가능한 이유는 내부 함수의 스코프 체인에 createFunction()의 스코프가 포함되기 때문입니다.

이때 주의해야 할 점이 있습니다.
아래 예제를 봅시다.

```javascript
function createFunctions(){
    var result = new Array();

    for (var i = 0 ; i < 10 ; i++){
        result[i] = function(){
            return i;
        }
    }

    return result;
}
```

이 예제에서 0~9(i)를 return하는 함수를 가진 10개의 배열값을 반환할 것 같습니다.
하지만 잘 생각해봅시다.
내부함수인 익명함수가 생성될 때 외부함수의 활성화 객체를 스코프체인에 들고있다고 했습니다.
하지만 스코프체인에서 들고 있는 값은 새로운 외부함수—활성화객체—가 아닌 하나의 외부함수—활성화객체— 포인터값입니다.
즉 외부함수 내에 생성된 익명함수 10개의 스코프체인에는 하나의 외부함수 활성화 객체를 공유하고 있습니다.
10개의 모든 익명함수의 return값 **i**는 외부함수의 var i이면서 하나뿐이니 결국 return result에 배열에는 모두 10이라는 값을 가지고 있습니다.

이해가 안되신다면 다시 간단하게 설명해보겠습니다.
createFunctions가 실행되면 for가 전부 동작한 후에 마지막 i값은 10이겠죠? 모든 내부함수는 하나의 외부활성화 객체를 바라보니 return i는 모두 10을 반환합니다.
10개의 내부 익명함수는 하나의 외부 활성화 객체를 가지고 있으니까요

그렇다면 우리가 원하는데로 1씩 증가하는 배열을 어떻게 만들까요?
아래 예제를 봅시다.

```javascript
function createFunctions(){
    var result = new Array();

    for (var i = 0 ; i < 10 ; i++){
        result[i] = function(num){
            return function(){
                return num;
            }
        }(i);
    }

    return result;
}
```

위 예제에서는 매개변수 num을가지는 익명함수가 하나더 추가되었습니다.
매개변수 num을 가진 익명함수는 for문내부에서 돌면서 계속 새로생성되기 때문에 이전 예제처럼 활성화 객체가 공유되지 않습니다.

이제 result배열에 들어있는 각 함수는 고유한 num 값을 가지며 그 값을 반환합니다.

---

### 즉시실행함수

---

### this객체

클로저 내부에서 this는 꽤 복잡하게 동작합니다.
this 객체는 런타임에서 함수가 실행중인 컨텍스트에 묶입니다.
비스트릭트모드에서는 전역함수에서 window로 지정되며 스트릭트모드에서는 undefined입니다.

```javascript
var name = "The window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        return function(){
            return this.name;
        }
    }
}

console.log(object.getNameFunc()()); //The Window(비스트릭트모드)
```

익명함수가 this.name을 반환하여 return하는데 The window가 출력됩니다.
getNameFunc()()로 내부 익명함수를 바로 출력했는데 왜 The window가 나올까요?
모든 함수는 호출되는 순간 자동으로 this와 arguments 두 특별한 변수를 갖게 됩니다.
내부 함수는 결코 외부함수의 this와 arguments에 직접적으로 접근할 수 없으며 아래와 같이 외부 함수의 this객체를 다른 변수에 저장해서 클로저가 변수에 접근하도록 도와주는건 가능합니다.

```javascript
var name = "The window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        }
    }
}

console.log(object.getNameFunc()()); //The Window(비스트릭트모드)
```

this를 that에 저장하는건 반복문의 i만큼 자주쓰이는 관습이니 알아 둡시다.

---

### 블록 스코프 흉내내기-즉시실행함수(IIFE)

자바스크립트는 블록 레벨 스코프라는게 없지만 흉내는 낼수 있습니다.
아래 예제를 봅시다.

```javascript
(function(){
    //코드블록
})();
```

**익명함수를 정의하고 바로 호출**합니다. 
이를 즉시 실행 함수라고 합니다.
하지만! 아래 예제를 실행되지 않습니다.

```javascript
function(){
    //코드
}();//에러발생
```

위 예제는 에러를 발생시킵니다.
즉시 호출하려면 **함수선언식이 아니고 함수 표현식**이여야 하는데, 
자바스크립트에서는 function 키워드를 함수 선언의 시작으로 인식하기 때문입니다. 
그렇기 떄문에 이전 예제처럼 괄호를 사용하여 함수 표현식으로 인식되게 한 후 즉시 호출해주셔야 합니다.

---

### 고유 변수

자바스크립트는 private개념이 없이 모두 public입니다.
하지만 고유 변수라는 개념을 이용하여 private을 흉내낼 수 있습니다.
함수 안에서 정의한 변수는 함수 밖에서 접근할 수 없어서 고유변수라고 합니다.(매개변수, 지역변수, 내부함수 등)
하지만 클로저를 이용하면 스코프 체인을 통해서 이들 변수에 접근할 수 있습니다.

이런 변수에 접근하는 메서드를 특권메서드(privileged)라고 합니다.

```javascript
function Person(name){

    this.getName = function(){
        return name;
    };

    this.setName = function (value) {
        name = value;
    };
}

var person = new Person("Nicholas");
console.log(person.getName());   //"Nicholas"
person.setName("Greg");
console.log(person.getName());   //"Greg"
```

Person의 매개변수 name은 외부에서 접근할 수 없으나 getName, setName 메서드를 통해서 조회하거나 수정이 가능합니다.
저 메서드들을 특권 메서드라고 합니다.

---

### 정적 고유 변수

특권 메서드는 고유 변수나 함수를 정의할 때 쓰는 고유 스코프를 통해서 생성할 수도 있습니다.
예제를 봅시다.

```javascript
(function(){

    var name = "";

    Person = function(value){                
        name = value;                
    };

    Person.prototype.getName = function(){
        return name;
    };

    Person.prototype.setName = function (value){
        name = value;
    };
})();

var person1 = new Person("Nicholas");
console.log(person1.getName());   //"Nicholas"
person1.setName("Greg");
console.log(person1.getName());   //"Greg"

var person2 = new Person("Michael");
console.log(person1.getName());   //"Michael"
console.log(person2.getName());   //"Michael"
```

위 예제를 보면 전역변수에 Person을 할당합니다.
그로 인해서 인스턴스가 독립변수를 가질수 없게 되었습니다. 하지만 프로토타입을 통해 코드 재사용성이 좋아집니다.

---

### 모듈 패턴

**더글러스 크록포드가 고안한 모듈 패턴은 싱글톤같은 일을 합니다.**

싱글톤이란 인스턴스를 단 하나만 갖게 한 객체입니다.

```javascript
var singleton = {
    name : value,
    method : function(){
        //메서드 코드
    }
}
```

모듈 패턴은 기본 싱글톤을 확장해서 고유변수와 특권메서드를 쓸 수 있습니다.

```javascript
function BaseComponent(){
}

function OtherComponent(){
}

var application = function(){

    //private variables and functions
    var components = new Array();

    //initialization
    components.push(new BaseComponent());

    //public interface
    return {
        getComponentCount : function(){
            return components.length;
        },

        registerComponent : function(component){
            if (typeof component == "object"){
                components.push(component);
            }
        }
    };
}();

application.registerComponent(new OtherComponent());
console.log(application.getComponentCount());  //2
```

getCompenentCount와 resterComponent 특권 메서드를 가진 객체를 반환했습니다.
두 메서드는 private 변수로 components 배열을 바라보고 있습니다.

마지막으로 위 모듈 패턴을 확장하는 패턴을 알아보겠습니다.
이 패턴은 싱글톤 객체가 특정 타입의 인스턴스지만 프로퍼티나 메서드를 추가하여 확장해야 할때 유용합니다.

```javascript
function BaseComponent(){
}

function OtherComponent(){
}

var application = function(){

    //private variables and functions
    var components = new Array();

    //initialization
    components.push(new BaseComponent());

    //create a local copy of application
    var app = new BaseComponent();

    //public interface
    app.getComponentCount = function(){
        return components.length;
    };

    app.registerComponent = function(component){
        if (typeof component == "object"){
            components.push(component);
        }
    };

    //return it
    return app;
}();

console.log(application instanceof BaseComponent);
application.registerComponent(new OtherComponent());
console.log(application.getComponentCount());  //2
```

application객체가 BaseComponent의 인스턴스여야 할때 위와같이 사용할 수 있습니다.
BaseComponent()를 app으로 생성및 할당합니다. 그후 app에 components에 접근 할 특권메서드를 할당해 줍니다. 그 후 app을 return해줍니다.

