'use strict';

// JS 표준 스타일이란 ?
// 들여쓰기 공백 2개
// 문자열에는 작은 따옴표
// 사용하지 않는 변수는 정의하지 않음
// 예약어 뒤에는 공백을 추가
// 함수 선언 괄호앞에 공백 추가(function ())
// == 대신 ===
// 공백 사이에 연산자
// 쉽표 뒤 공백
// else 문은 중괄호와 같은 문 (else {)
// 여러 if구문 사용시 중괄호
// 함수에 매개변수 err 있을 경우 항상 처리
// 브라우저 전역 접두어인 window를 붙여어하지만 document, console, navigator는 생략
// 여러 줄 공백 허용 X
// 조건부 할당은 추가적으로 괄호로 묶음
// 한줄을 중괄호 사용시 공백 추가
// 변수와 함수 이름에는 캐멀 케이스 사용(ex. nameFirst, mainArticle)
// eval() 사용 X

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);