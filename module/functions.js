function one() {
  return 1 ;

}

function twoReturnString() {
  return "1" ;

}

// twoReturnString() ==="1";
function isthree() {  
  return true;
 //불리언 타입일 때는 암묵적으로 is 를 붙인다.
}

function four() {
  return {
    a:1,
    b:"2",
    c:true
  } 
}
//모듈이 수십개 일 때 디버거에 의존해야 한다. 함수의 리턴을 봐야한다.
//리턴만 알아내면 대부분의 함수를 쓸 수 있다.

function five(){
  let a = 1 + 1;
  //실행만 하는 함수 , 리턴을 필요로 하지 않는 함수가 존재함
  //동작만을 하는 함수 예를 들어 for 같은 실행 함수
  //
}