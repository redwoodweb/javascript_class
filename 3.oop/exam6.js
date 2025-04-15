class Shape {
  pi = 3.14;
  width;
  height;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Ractangle extends Shape {
  constructor(width, height){
    super(width,height);
  }
  getArea(){
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(width, height){
    super(width,height);
  }
  getArea(){
    return this.width * this.height/2;
  }
}

class Circle extends Shape {  
  pi = 3.14;
  radius;
  constructor(radius){
    super();//부모요소의 생성자변수를 사용하지않더라도 불러와서 재정의
    this.radius = radius;    
  }
  getArea(){
    return this.radius*this.radius*this.pi;
  }
}

// const numShape = new Ractangle(200,100);
// console.log(numShape.getArea());

const numShape2 = new Triangle(200,100);
console.log(numShape2.getArea());

const numShape3 = new Circle(10);
console.log(numShape3.getArea());