/**
 * 자바스크립트 객체
 * 
객체
1. 사용자 정의 객체
리터럴
생성자 + prototype

2.코어객체 javascript 에서 제공하는 객체
Array,Math,Number..

3.browser object
window, navigator, document...
4.DOM

 */

// let obj = new Object();

// obj.name = '홍길동';
// console.log(obj.name);
// obj.name = 'jane';
// console.log(obj.name);

// 함수는 1급 객체이다

// function add(a,b){
//   let sum = a + b;
//   return sum;
// }

// console.log(typeof add);
// console.log(add instanceof Object);

// add.result = add(50,30);
// console.log(add.result);


// 리터럴 형식으로 개체 사용 => 1개의 객체를 생성해서 사용하는 경우
let objTest = {
  name: '홍길동',
  age : 20,
  display: function(){
    return `${this.name}, ${this.age}`;
  }
}

// console.log(objTest.name);
console.log(objTest.display());

let testObj = {}
testObj.name = '세금명세서';
testObj.print = function(){
  console.log(`올해 ${this.name}는 1000원입니다.`);
}
testObj.print();
console.log(testObj);


// function FuncObj(){
//     let num = 100;
//     let text = 'hi this is function object';
//     const func = function (){
//       console.log("this is function in function object ");
//     }
// }

// const funcObj1 = FuncObj();

// funcObj1.func();


//객체 디스트럭처링 : 객체 프로퍼티를 풀어서 별개의 변수에 저장하는 방식

let person = {
  first: '홍',
  last: '길동'
}

let {first, last} = person;
console.log(first,last);
