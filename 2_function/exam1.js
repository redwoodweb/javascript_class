/**
 * 
 * 선언적 함수 
 */
// function add(a,b){
//   let sum = a + b;
//   return sum;
// }
// console.log(add(10,20));


// const add2 = function(a,b){
//   let sum = a + b;
//   return sum;
// }
// console.log(add2(30,20));


/**콜백함수
 * 함수의 파라미터에 함수를 전달한다.
 */

// let functionNum = function(func){
//   if( typeof func === 'function' ){
//     func();
//   }
// }

// functionNum(function(){
//   console.log('this is function in function');
// });

// functionNum();


// 내가 테스트 해본것
// const testFunc = () => {
//   return ('test');
// }
// console.log(testFunc());


// class Myjob {
//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//   }
//   profile = () => {
//     return `이름: ${this.name}, 나이: ${this.age}`
//   }
// }

// const person1 = new Myjob('jane', 30); 
// console.log(person1.profile());


/**
 * 함수를 리턴하는 함수
 */

// let foo2 = function(){
//   return function(){
//     console.log()
//   }
// }

// 클로저를 통해서 함수를 리턴
// 부모 함수가 데이터량 또는 수행 코드가 많을 경우
// 한번 실행후 내부 함수만 수행할 수있게 한다 데이터캐싱

// function call(mode){
//   if( mode === 'minus'){
//     return function(a, b){
//       return a - b;
//     }
//   }else if( mode === 'plus'){
//     return function(a, b){
//       return a + b;
//     }
//   }
// }

// function call(mode){
//   let obj =  {
//     'plus': function(a, b){
//       return a + b;
//     },
//     'minus': function(a, b){
//       return a - b;
//     }
//   }
//   return obj[mode];
// }

// const objTestPlus = call('plus');
// const objTestMinus = call('minus');
// console.log(objTestPlus(20,30));
// console.log(objTestMinus(50,30));

// function Call(mode){
//   let obj =  {
//     'plus': function(a, b){
//       return a + b;
//     },
//     'minus': function(a, b){
//       return a - b;
//     }
//   }
//   return obj[mode];
// }

// const objTestPlus = new Call('plus');
// const objTestMinus = new Call('minus');
// console.log(objTestPlus(20,30));
// console.log(objTestMinus(50,30));


// let func = call('plus');

// console.log(func(50,20));

// func2(10,5);

// function sortDesending(a,b){
//   return b - a;// 내림차순
//   // if( a > b ){
//   //   return -1; // 자리 변경 안함
//   // }else if( a < b ){
//   //   return 1; // 자리 변경
//   // }
// }

// let arr = [42,32,55,44];
// console.log(arr.sort(sortDesending));// 파라미터로 함수추가

// 즉시 실행함수
// (function(a,b){
//   console.log(a+b);
// })(2,3);


// function outFunc(){
//   let arrayNum = ['a','b','c','d'];
//   let elNum = '';
//   for (let index = 0; index < arrayNum.length; index++) {
//     elNum += arrayNum[index];
//   }
//   function innerFunc(el){
//     return 'this is inner function'+el;
//   }
//   return innerFunc(elNum);
// }

// console.log(outFunc());



