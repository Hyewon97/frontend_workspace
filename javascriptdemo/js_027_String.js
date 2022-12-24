//js_027_string.js

/*
[문제1]
http://www.daum.net
ftp://ftp.microsoft.com

[출력결과]
protocal: http, domain : www.daum.net
*/

//separator() 함수정의

function separator(arr) {
  let str;
  // :// 기준으로 앞의 텍스트랑 뒤 테스트 분리하기

  for(let i=0; )
  console.log("테스트");
}

///
for (let element of arr) {
    if (element % 3 == 0) {
      // element가 3의 배수인지를 묻고
      //data.append(element); // 데이터를 추가한다.
      data.push(element);
    }
///

//////////
separator("http://www.daum.net");
separator("ftp://ftp.microsoft.com");

///////////////////////////////////////////////////////////////
/*
[문제2]
let person1 = { name: '홍길동', phone: '010-1234-5678' };
let person2 = { name: '여진구', phone: '010-253-2253' };
[출력결과]
이름: 홍길동
연락처: 010-****-5678
이름: 여진구
연락처: 010-***-2253
*/

//display( )함수정의
function display(arr) {
  let str;

  console.log("테스트2");
}
///////////
let person1 = { name: "홍길동", phone: "010-1234-5678" };
let person2 = { name: "진여구", phone: "010-253-2253" };
display(person1);
display(person2);
