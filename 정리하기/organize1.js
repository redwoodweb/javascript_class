
/**
 * closure 테스트
 * 함수 내부에 함수를 선언하고 외부함수 실행시 내부함수를 전달하는데 외부함수 실행시 일부 작업량이 많거나 고정적이고 반복적으로 사용되는 연산을 미리실행하고
 * 외부함수 실행시 해당 데이터에 접근하여 연산할 수 있게 구현하는 것
 */
// function OutFunc(){
//     this.arrayNum = ['a','b','c','d'];
//     this.elNum = '';
//     for (let index = 0; index < this.arrayNum.length; index++) {
//       this.elNum += this.arrayNum[index];
//     }
//     this.innerFunc(){
//       return 'this is inner function'+this.elNum;
//     }
//     return this.innerFunc;
//   }
  
//   const closure1 = new OutFunc();
  
//   console.log(closure1());


/**
 * prototype 사용방법
 * 모든 자바스크립트 객체에는 prototype 영역이 제공된다.
 * 반복되거나 개별특성과 상관없이 독립적으로 사용되는 공통부분을 별도로 만들어 함께 사용하는 방식 
 * 장전 : 반복되는 메모리 값들을 줄일 수 있다.
 */

// function DataProcessing(user, id, pw){
//     this.user = user;
//     this.id = id;
//     this.pw = pw;
//     this.getData(){
//         return `${this.user}의 사용자 정보를 가져왔습니다.`;
//     };
//     this.editData(){
//         return `${this.user}의 사용자 정보를 수정하였습니다.`;
//     };
//     this.deleteData(){
//         return `${this.user}의 사용자 정보를 삭제하였습니다.`;
//     };
// }

// prototype 추가

// function DataProcessing(user, id, pw){
//     this.user = user;
//     this.id = id;
//     this.pw = pw;
// }

// DataProcessing.prototype = {
//     getData: function(){
//         return `${this.user}의 사용자 정보를 가져왔습니다.`;
//     },
//     editData: function(){
//         return `${this.user}의 사용자 정보를 수정하였습니다.`;
//     },
//     deleteData: function(){
//         return `${this.user}의 사용자 정보를 삭제하였습니다.`;
//     }
// }

// function UnMemberDataProcessing(user, id, pw){
//     DataProcessing.call(this, user, id, pw);// 생성자 호출 , property만 상속
//     // this.user = 'unmemberenumber';
// }

// // property를 제외한 나머지 상속방법
// UnMemberDataProcessing.prototype = Object.create(DataProcessing.prototype);
// UnMemberDataProcessing.prototype.constructor = UnMemberDataProcessing;


// class 사용으로 변경
class DataProcessing {
    constructor(user, id, pw) {
        this.user = user;
        this.id = id;
        this.pw = pw;
    };
    // 변수에 할당하는 방식은 프로토타입에 등록이 안됨
    // getData(){
    //     return `${this.user}의 사용자 정보를 가져왔습니다.`;
    // };
    // editData(){
    //     return `${this.user}의 사용자 정보를 수정하였습니다.`;
    // };
    // deleteData(){
    //     return `${this.user}의 사용자 정보를 삭제하였습니다.`;
    // }
    getData() {
        return `${this.user}의 사용자 정보를 가져왔습니다.`;
    };
    editData() {
        return `${this.user}의 사용자 정보를 수정하였습니다.`;
    };
    deleteData() {
        return `${this.user}의 사용자 정보를 삭제하였습니다.`;
    }
}



DataProcessing.prototype.print = function(){//수동으로 등록했기때문에 enumeralble(열거가능한) : true
    return `${this.user}의 정보를 출력합니다.`;
}

// console.log(Object.getPrototypeOf(DataProcessing) === DataProcessing.__proto__);
console.log(DataProcessing.prototype.getData);// class 문법으로 등록했기때문에 enumeralble(열거가능한) : false
console.log(DataProcessing.prototype.editData);
console.log(DataProcessing.prototype.deleteData);
console.log(DataProcessing.prototype);
console.log(Object.getOwnPropertyNames(DataProcessing.prototype));// enumerable과 상관없이 모두 출력을 원하면 왼쪽과 같이 출력하면 된다.

//console.log는 열거가능한 속성만 보여주기때문에 enumerable 값이 true인 속성만 출력한다.


class UnMemberDataProcessing extends DataProcessing {
    constructor(user, id, pw) {
        super(user, id, pw);
        this.user = 'unmember number';       
    };
}


let user = [];
user.push(new DataProcessing('jane','idJane11','janejane123!'));
console.log(user[0].getData());
console.log(user[0].editData());
console.log(user[0].deleteData());

user.push(new DataProcessing('bryon','idbryon11','bryon123!'));
console.log(user[1].pw);
console.log(user[1].getData());
console.log(user[1].editData());
console.log(user[1].deleteData());


user.push(new UnMemberDataProcessing('Tom','idTom11','Tom123!'));
console.log(user[2].pw);
console.log(user[2].getData());
console.log(user[2].editData());
console.log(user[2].deleteData());
console.log(user[2].print());


// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       return `${this.name}이(가) 소리를 냅니다.`;
//     }
//   }
  
//   // prototype에 외부에서 메서드 추가
//   Animal.prototype.eat () {
//     return `${this.name}이(가) 밥을 먹습니다.`;
//   };
  
//   const tiger = new Animal("호랑이");
//   console.log(tiger.speak()); // ✅ 클래스 내부 메서드
//   console.log(tiger.eat());   // ✅ 클래스 외부에서 prototype으로 추가한 메서드