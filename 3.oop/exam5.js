class IdolModel {
  // name;//정의 명칭?
  // year;
  constructor(name, year) {
    this.name = name,
    this.year = year
  }

  sayHello(){
   return `안녕하세요. ${this.name} 입니다.`;
  };
}

// IdolModel.prototype.sayHello = function(){
//   return `안녕하세요. ${this.name} 입니다.`;
// }

class FemaleIdoModel extends IdolModel {
  part;
  constructor(name, year, part){
    super(name,year);
    this.part = part;
  }

  // overidding
  sayHello(){
    return `${super.sayHello()}  ${this.part}을 맡고 있습니다.`;
  }

  dance(){
    return  '여자 아이돌이 춤을 춥니다.';
  }
}


// FemaleIdoModel.prototype = Object.create(IdolModel.prototype);
// FemaleIdoModel.prototype.constructor = FemaleIdoModel;

// let yujin = new IdolModel('유진', 2003);
// console.log(yujin.name);

let yujin = new FemaleIdoModel('유진', 2003, '보컬');
console.log(yujin.sayHello());
console.log(yujin.dance());
