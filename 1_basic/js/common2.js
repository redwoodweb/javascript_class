// 타입 변환(형변환)
/**
 * 암묵적
 * 명시적
 */

// 암묵적
let money = 100;
let test = '$'+100;
console.log(typeof test);

// 명시적
let age = 20;
age = age.toString();
console.log(typeof age);
console.log('test');

//문자열 => nuber: eval(), Number():NaN, parseInt():변환할수있는부분만만, parseFloat()

let num = '100test';
num = num + 100;
console.log(num);


/**Hoisting(호이스팅)
 * 
 *  */ 


console.log(myname);
myname = "jane";
var myname;


console.log(funcNum1());

// const funcNum1 = () => {
//   return 'this is function'
// }

function funcNum1(){
  return 'this is function'
}

