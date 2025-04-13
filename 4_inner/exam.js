let iveMem = ['유진','가을','원영','레이','리즈','이서'];
// console.log(iveMem.map((x) => `아이브: ${x}`));
// iveMem.push('혜원');
// console.log(iveMem);
// iveMem.pop();
// console.log(iveMem);
// iveMem.shift()
// console.log(iveMem);
// iveMem.unshift('카리나');
// console.log(iveMem);
// console.log(iveMem.map((x) => {
//   if(x == '유진'){
//     return `${x}는 메인보컬이다.`;
//   }
// }));

// let iveMem2 = iveMem;
// iveMem2.push('카리나');
w
// console.log(iveMem);


// spread operator
let iveMem2 = [...iveMem];
iveMem2.push('카리나');

console.log(iveMem);
console.log(iveMem2);


let kMem = ['홍길동',...iveMem,'박길동'];

let arr = [100,200,300,];

function sum(a,b,c){
  return a + b + c;
}
console.log(sum(...arr));

const objNum = {
  "username": "박해수",
  "age": 35,
  "gender": "남"
}

// const newObjNum = {...objNum,"age": 40};

function edit(el){
  console.log('수정 되었습니다');
  console.log(el);
}

edit({...objNum,"age": 20})
