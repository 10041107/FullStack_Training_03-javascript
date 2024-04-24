// 해당 스크립트는 브라우저의 콘솔에서 실행한다.
// 목적 브라우저의 실행 환경을 확인하기 위함
var a =1;
console.log(a, window.a, this.a);

window.b = 2;
console.log(b, window.b, this.b);

window.a=3;
b=4;

console.log(a, window.a, this.a);
console.log(b, window.b, this.b);


// ========================================
//차이점
// 전역 변수로 취급
var a =1;
delete window.a; // false 출력
console.log(a, window.a, this.a);

// window의 프로퍼티로 값 할당
window.c = 3;
delete window.c // true
console.log(c, this.c, window.c);

// 전역객체의 프로퍼티로 추가해서 사용하지만
// 전역변수로 선언한 경우 사용자가 의도치 않게 삭제하는 것을 방지하기 위함

