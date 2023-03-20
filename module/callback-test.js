function six(number,append) {
  if( typeof(number) === "number" && typeof(append) === "number"){
  return number + append; 
}else{
  console.error('이 매개변수는 숫자여야합니다.');
}
}
//! type조건문 (내가 예상하지 못하는 상황을 잡아 냄)
const a = six(1,2); //? 데이터가 변한다.
console.log(a);

