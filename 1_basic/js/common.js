// var hello = '안녕';
// console.log(hello);
// var num = 100;
// console.log(typeof num);
// num = 'test;'
// console.log(typeof num);

//컴파일 언어: 데이터형 매우 엄격
//인터프리터 언어: 문법적으로 느슨한것 요구

//var : 여러 큰 스코프에서 공유하기 위해 최상위 변수 사용할 수 도 있다.(함수스코프)
//let : 작은 스코프 (블록스코프)
//const: 상수값으로 사용 (블록스코프)

//데이터입(자료형)
// string, number, object, boolean, undefinded, function
let intNum = 10;
let floatNum = 3.14;
let stringNum = '10';

console.log(`${typeof intNum}, ${typeof floatNum}, ${typeof stringNum}`);

let sinS = 'single'; //java charactor
let doubleS = 'double'; //java string



/**
 * Template Literal
 * 1.new line -> \n
 * 2.tab -> \t 옆으로 이동
 * 3.백슬러시 -> \\
 */

const textNum = `동 해 물과 백
두
산
이
다르고
`;

console.log(textNum);


// 논리형(boolean)
/**
 * false
 * => String: 빈문자열일때
 * => null
 * => 0
 */

var textNum1 = '';
console.log(!textNum1);

console.log(!!'');
console.log(!!undefined);
console.log(!!0);
console.log(!!null);

console.log(!!{});//객체는 비어있어도 true
console.log(!![]);//객체는 비어있어도 true

//객체(object)
let person = {
  name: 'jane',
  age: 30
}

console.log(typeof person);
console.log(person.name);

//함수(function)

const funcNum = function(){
  return 'this is function';
}

console.log(typeof funcNum);
