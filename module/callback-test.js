// function six(number,append) {
//   if( typeof(number) === "number" && typeof(append) === "number"){
//   return number + append; 
// }else{
//   console.error('이 매개변수는 숫자여야합니다.');
// }
// }
// //! type조건문 (내가 예상하지 못하는 상황을 잡아 냄)
// const a = six(1,2); //? 데이터가 변한다.
// console.log(a);

function six(number,append) {
  return number + append; 
}
function seven(number,append) {
  return number - append; 
}
function eight(number,append, callback){
//* 마지막 매개변수에 callback이라고 안쓰면 헷갈림 /파라미터를 전달 받았다.
let a = number +1225;
let b =append +403;
return callback(a, b);
}
console.log(eight(1,2, function(a,b){
  return a + b ;
}))
//? 6
//! 동기방식

console.log(eight(six,seven,function(){
  return "하이!";
}));

