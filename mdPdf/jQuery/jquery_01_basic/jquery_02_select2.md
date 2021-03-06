# 선택자2(기초2)

jQuery는 CSS가 가지고 있는 선택자와 또다른 형태를 가지고 있습니다.
우선 CSS로 표현하는 선택자와 동일한 의미를 가지지만 다르게 표현하는 형태를 정리하자면
다음과 같습니다.

| css            | jQuery              |
| -------------- | ------------------- |
| li:first-child | $('li:first-child') |
| li:first-child | $('li:first')       |
| li:last-child  | $('li:last-child')  |
| li:last-child  | $('li:last')        |

위 내용을 보자면 CSS에서는 `li:first-child`의 선택자를 
jQuery에서는 두가지 이상의 표현방법을 가질 수 있습니다.
우선 두가지만 확인해 보면 CSS와 동일한 형태인 `$('li:first-child')`가 있으며,
이를 좀더 단순하게 처리한 `$('li:first')`의 형태로 표현하여도 기능은 동일하게 처리됩니다.

이는 `li:last-child`또한 같은 결과물을 얻어 낼 수 있습니다. 
이 외에도 추가의 기능이 있습니다. 

즉, jQuery의 선택자는 CSS의 선택자와 동일한 기능 + 유사 또는 그이상의 기능들이 존재합니다.

| 셀렉터 문법                   | 문법 설명                                    |
| ------------------------ | ---------------------------------------- |
| E:first                  | 모든 엘리먼트 E 중에서 첫 번째인 엘리먼트                 |
| E:last                   | 모든 엘리먼트 E 중에서 마지막인 엘리먼트                  |
| E:first-child            | 엘리먼트 E의 자식 엘리먼트 중에서 첫 번째인 엘리먼트           |
| E:last-child             | 엘리먼트 E의 자식 엘리먼트 중에서 마지막인 엘리먼트            |
| E:only-child             | 엘리먼트 E의 자식 엘리먼트 중에서 형제가 없는 엘리먼트          |
| E:nth-child(n)           | 엘리먼트 E의 n번째 자식 엘리먼트                      |
| E:nth-child(even or odd) | 엘리먼트 E의 홀수 or 짝수 자식 엘리먼트                 |
| E:even or E:odd          | 페이지 전체의 짝수 or 홀수 엘리먼트                    |
| E:eq(n)                  | 태그 값이 E인 모든 엘리먼트 중에서 n번째로 일치하는 엘리먼트      |
| E:gt(n)                  | 태그 값이 E인 모든 엘리먼트 중에서 n번째 엘리먼트(포함 X) 이후의 엘리먼트 |
| E:lt(n)                  | 태그 값이 E인 모든 엘리먼트 중에서 n번째 엘리먼트 이전의 엘리먼트   |

---

