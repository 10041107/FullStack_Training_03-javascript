/*
    01_property
    객체 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.
*/

let student = {
    name: "유관순",
    age : 16
}

console.log(student);


/*
    프로펕티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값 => 프로퍼티 값에 접근하기 위한 식별자
    문자열이므로 따옴표를 사용하지만 식별자 네이밍 규칙을 따르는 경우 사용하지 않아도 된다.
    단, 식별자 네이밍 규칙을 따르지 않는 이름은 따옴표를 반드시 사용해야 하며 가능한 식별자 네이밍 규칙을 따르는 것을 권장한다.
    프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값
*/

let obj ={
    nomal : "normal value",
    '@ s p a c e @' : 'space value',
    "":"", // 빈 문자열 키는 오류가 발생하지는 않지만 권장하지 않는다.
    0:1 ,// 숫자 키는 내부적으로 문자열로 변환된다.
    var : "var", // 예약어 키는 오류 발생은 하지않으나 권장하지 않는다.
    nomal:"new nomal" // 이미 존재하는 키는 중복 선언하게 되면 나중에 선언한 프로퍼티로 덮어쓴다
};

let teste = "test";
// 프로퍼티 키 동적 생성
obj[teste] = "tset value";
console.log(obj)