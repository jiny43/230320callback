
// const fromModuleObjectBasicData = require ('./module/basic-data.js')
// console.dir(fromModuleObjectBasicData); //객체 조회
//변수를 알아보기 쉽게 작성
//input output 규칙에 맞게 정하기.
//commonJS

//package.json 에  "type" : "module" 을 작성하면 commonJS 방식->es방식

import fromModuleObjectBasicData from './module/basic-data.js';
console.dir(fromModuleObjectBasicData); //esm