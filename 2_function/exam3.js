//함수의 실행 context(scope)
//Lexical scope : 선언되 위치가 상위 스코프를 결정 => javascript
//Dynamic Scope : 실행한 위치가 상위 스코프를 결정

// let var1 = 10;

// function func(){
//   let var2 = 20;
//   console.log(var1);
// }

// func();

// let value = "value1";

// function printFunction(){
//   let value = "value2";
//   function printValue(){
//     return value;
//   }
//   console.log(printValue());
// }

// printFunction();

// let value = "value1";

// function printValue(){
//   return value;
// }

// function printFunction(func){
//   let value = "value2";
//   console.log(func());
// }

// printFunction(printValue);


// var:함수스코프 vs let:블록스코프 const: 블록스코프
// var i = 999;

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);

var num = 100;

function func1(){
  var num = 200;
  console.log(num);
}

func1();
console.log(num);
