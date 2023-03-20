import fs from 'fs';
let name = "jingjieun";
// let date = new Date();
// let fileName = date.getSeconds() + name;

let year = "2023";

export const f = fs.writeFileSync("./"+ name+".txt",year);

//!파일을 동기방식으로 쓰다.
//?test.txt 에 name 을 새겨서 만들었다.

