//함수를 호출할 때 함수의 파라미터 개수가 일치하지 않아도 오류가 발생하지 않음

// function add(a,b,c){
//   console.log(a,b,c);
// }

// add(10,20);
// add(10,20,50);

// function sumAll(){
//   let sum = 0;
//   for(let i=0; i<arguments.length; i++){
//     sum += arguments[i];// 파라미터는 arguments객체에 포함되어있다.
//   }
//   return sum;
// }

// console.log(sumAll(1,2,3,4,5,6,7,8,9,10));

//함수 파라미터 기본값 설정
// function calc(total,temp, tax=0.1, tip=0.2){
//   return total + (total*tax) + (total*tip);
// }

// console.log(calc(100));

// console.log(calc(100,20,0.2,0.5));

//화살표 함수
// let greeting = function(name){
//   return "hello jane";
// }

// let greeing = (name) => {
//   return `hello ${name}`;
// }

// console.log(greeing('jane'));

// let greeing2 = (name) => `hello ${name}`;

// console.log(greeing2('jane'));