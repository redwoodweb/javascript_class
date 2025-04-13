/**
 * Prototype
 * __proto__ 모든 객체에 존재하는 프로퍼티
 */

function IdolModel(name, year){
  this.name = name;
  this.year = name;
  this.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
  }
}

// console.log(IdolModel.prototype.constructor === IdolModel);//생성자 함수와 프로토타입이 같은지 확인

const yujin = new IdolModel('안유진', 2003);
console.log(yujin.sayHello());

// const wonyong = new IdolModel('장원영', 2002);
// console.log(yujin.__proto__ === IdolModel.prototype);

// console.dir(yujin.__proto__, {
//   showHidden : true,
// });


// IdolModel.prototype.sayHello = function(){
//   return `${this.name}이 인사를 합니다.`;
// }

// console.log(yujin.sayHello());
// console.log(wonyong.sayHello());

// console.log(yujin.sayHello() === wonyong.sayHello());
// console.log(yujin.sayHello().hasOwnProperty());


// 변화되지 않는 함수 변수를 프로토타입에 저장하는 방법?


