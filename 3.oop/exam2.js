/**
 * 생성자 함수를 이용한 객체 생성 => 다수의 객체를 생성하기 위해서
 */

// 내가 그냥 테스트해보기
// class NumClass{
//   constructor(name, size) {
//     this.name = name,
//     this.size = size
//   }
// }

// const testNum = [];
// testNum.push(new NumClass('홍길동','1000'));
// testNum.push(new NumClass('김길동','500'));
// testNum.push(new NumClass('박길동','1000'));

// console.log(testNum[0].name);


function Student(name, kor, en, mat){
  this.name = name,
  this.kor = kor,
  this.en = en,
  this.mat = mat,
  this.length = arguments.length - 1;//매개변수값을 가져온다.
  // this.getSum = function(){
  //   return this.kor + this.en + this.mat
  // }
  // this.getAverage = function(){
  //   return this.getSum() / this.length;
  // }
  // this.outPut = function(){
  //   return this.name+','+this.getSum()+','+this.getAverage();
  // }
  // test = function(){
  //   console.log('test');
  // }
}

let students = [];

// Student.prototype.getSum = function(){
//   return this.kor + this.en + this.mat
// }

// Student.prototype.getAverage = function(){
//   return this.getSum() / this.length;
// }

// Student.prototype.outPut = function(){
//   return this.name+','+this.getSum()+','+this.getAverage();
// }

Student.prototype = {
  getSum : function(){
    return this.kor + this.en + this.mat
  },
  getAverage : function(){
    return this.getSum() / this.length;
  },
  outPut : function(){
    return this.name+','+this.getSum()+','+this.getAverage();
  }
}

console.log(Student.prototype);

students.push(new Student('홍길동',80,40,60));
students.push(new Student('박길동',100,80,90));

for(let i in students){
  console.log(students[i].outPut());
  // console.log(students[i].test());
}