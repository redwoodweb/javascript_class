/**
 * 함수 클로저 
 * -> 함수 호출 이후에도 함수의 실행 컨텍스트 영역을 유지
 */

// function outerFunc(){
//   let x = 10;
//   let innerFunc = function (){
//     console.log(x);
//   }
//   return innerFunc;
// }

// let inner = outerFunc();
// 함수 호출 이후 일반적으로 내주 x 변수등 모두 사라진다. 하지만 x를 사용하는 함수를 리턴하여 사용할 수 있게 한다 (클로저)

// inner();

// //데이터 캐싱
// function cashfunction() {
//   //아주 오래 소요하는 작업
//   let number = 10 * 10;
//   function innerCashfunction(newNum){
//     return number * newNum;
//   }
//   return innerCashfunction;
// }

// //오래소요되는 작업 실행하고 나머지 작업에 대한 것을 내부함수로 처리
// const runner = cashfunction();
// console.log(runner(30));