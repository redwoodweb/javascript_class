class IdolModel {
  #name;
  #year;
  constructor(name, year) {
    this.#name = name,
    this.#year = year
  }

  set name(name){
    this.#name = name;
  }

  get name(){
    return this.#name;
  }
}

let yujin = new IdolModel('유진', 2003);

console.log(yujin.name);
