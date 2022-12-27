// js_030_spread_operator.js

// Spread Operator = 스프레드 연산자 = 전개연산자 = 펼침연산자
// 형태 : (...변수)

/////////////////////////////////////////////////////////////
//[1] 배열에서 Spread Operator

//1. 배열복사(Array Copy)
let arr1 = [1, 2, 3];
let arr2 = arr1; // 얇은 복사(shallow copy), 주소 복사
console.log(`arr1 : ${arr1}`); // arr1 : 1,2,3
console.log(`arr2 : ${arr2}`); // arr2 : 1,2,3

arr1.push(4);
console.log(`arr1 : ${arr1}`); // arr1 : 1,2,3,4
console.log(`arr2 : ${arr2}`); // arr2 : 1,2,3,4

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // 깊은 복사(deep copy)
console.log(`arr3 : ${arr3}`); // arr3 : 1,2,3
console.log(`arr4 : ${arr4}`); // arr4 : 1,2,3

arr4.push(4);
console.log(`arr3 : ${arr3}`); // arr3 : 1,2,3
console.log(`arr4 : ${arr4}`); // arr4 : 1,2,3,4

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5); // [10, 20, 1, 2, 3, 40, 50]

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6];
console.log(arr7); // [1, 5, 6, Array(2)]

//2. 배열 병합(Array Concatenation)
let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
let arr10 = [7, 8, 9];
let arr11 = [...arr8, ...arr9, ...arr10];
console.log(arr11); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/*
0 [1, 2, 3]
1 [4, 5, 6]
2 [7, 8, 9]
*/
let arr12 = [arr8, arr9, arr10];
console.log(arr12); // [Array(3), Array(3), Array(3)]

///////////////////////////////////////////////////////////////
//[2] 함수에서의 Spread Operator

//1. Rest parameter(나머지 파라미터)
function dispaly(...params) {
  return params.reduce((sum, a) => {
    return sum + a; // 누적된 값을 리턴
  });
}

console.log(dispaly(1, 2)); // 3
console.log(dispaly(1, 2, 3, 4, 5)); // 15

//2. 함수 호출 인수(Argument)
// 배열로 받음. 내부에서는 spread연산자로 되어 있음.
console.log(Math.max(1, 2, 3, 4, 5)); //5, 인자 값이 다 펼쳐져야지만 받을 수 있음
console.log(Math.min(1, 2, 3, 4, 5)); // 배열로 값을 넘겨주면 에러가 발생한다.

let arr13 = [10, 20, 30, 40, 50];
console.log(Math.max(arr13)); // NaN

console.log(Math.max(...arr13)); // 50, ...하면 펼쳐져서 들어감
console.log(...arr13); // 10 20 30 40 50

/////////////////////////////////////////////////////////////////////
// 클라이언트 - 서버에서 데이터를 주고 받을 때 이름이 필요함. 객체 스프레드 연산자는 리액트 때 많이 사용한다.
//[3] 객체에서 Spread Operator

//1.객체복사. 리액트에서 반드시 하는거
let prevState = { name: "고수", age: 30 };
let currentState = { ...prevState };
console.log(currentState); // {name: '고수', age: 30}

// currentState = { ...prevState }; // 주소 복사

// 기존에 있는걸 새로 복사하기
prevState = { ...prevState, loc: "서울" }; // 추가
console.log(prevState); // {name: '고수', age: 30, loc: '서울'}

// prevState = { prevState, loc: "서울" };
// console.log(prevState); // {prevState: {…}, loc: '서울'}

//2. 객체 업데이트
let prevState2 = { name: "고수", age: 30 };
// prevState2.name = "여진구";
// console.log(prevState2); // {name: '여진구', age: 30}

// 스프레드 연산자를 사용하는 방법이 있다... 이 방법을 많이 사용합니다.
prevState2 = { ...prevState2, name: "여진구" };
console.log(prevState2); // {name: '여진구', age: 30}
///// 이걸 할 때 주의사항 : prevState2 = { ...prevState2, name: "여진구" };
// 속에서 ...prevState2와 name~ 순서는 바꾸면 안된다.{기존 데이터, 업데이트 데이터}

// 구조 분해 할당
