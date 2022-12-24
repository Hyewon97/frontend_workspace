// // js_023_function.js

// // 함수(funtion) : 특정 기능을 하는 구문을 독립된 부품으로 만들어 재사용하고자 할 때 사용하는 문법이다.

// /*
// 함수 정의
// (1) 함수 선언문
// function 함수명(매개변수){
//     실행문;
//     return 값;
// }

// (2) 함수표현식
// let test = function(매개변수){
//     실행문;
//     return 값;
// }

// (3) 즉시실행(임명함수)
//     (function(파라미터){
//         console.log(`${파라미터} run~~`);
//     }) ('test');
// */

// let year = 2012;
// //함수정의
// function isLeapYear(year) {
//   let check;
//   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     check = true;
//   } else {
//     check = false;
//   }
// }

// // 함수 호출
// let result = isLeapYear(year);
// if (result) {
//   console.log(`${result}은 윤년입니다.`);
// } else {
//   console.log(`${year}은 평년입니다.`);
// }

//js_022_function.js

//함수(function) : 특정 기능을 하는 구문을 독립된 부품으로 만들어 재사용하고자 할때 사용하는 문법이다.

/*
함수 정의
(1) 함수 선언문
function 함수명(매개변수){
    실행문;
    return 값;
}

(2) 함수 표현식
let test = function(매개변수){
    실행문;
    return 값;
}

(3) 즉시실행(익명함수)
(function(파라미터)){
    console.log(`${파라미터} run~~~`);
})('test');
*/

let year = 2013;
//함수정의
function isLeapYear(year) {
  let check;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    check = true;
  } else {
    check = false;
  }
  return check;
}

//함수 호출
let result = isLeapYear(year);
if (result) {
  console.log(`${result}은 윤년입니다.`);
} else {
  console.log(`${year}은 평년입니다.`);
}

// 함수정의
function add(a, b) {
  console.log(`a=${a}, b=${b}`);
  return a + b;
}

function add2(a, b, c) {
  return a + b + c;
}

// 함수 호출
console.log(add(2, 3));
console.log(add2(2, 3, 4));

// 인자값이 하나도 정의하 안되어 있음
console.log(add()); //NaN
// console.log(add3());

// 인자값을 하나 받는 함수가 없어서 오류 발생
console.log(add(1)); //NaN

// 숫자와 문자의 결합이면 오류 없이 숫자와 문자가 결합되어서 출력된다.
console.log(add(1, "script")); //1script

// 정의 되어 있는 매개변수의 수 보다 argument가 많은 경우 받을 수 있는 만큼만 받고 나머지는 버린다.
console.log(add(1, 2, 3)); //3

console.log(add(1, null)); //1

console.log(add(1, undefined)); //Nan, undefined는 숫자값이 아니다.

/////////////////////////////////////////////////////////
// 함수 표현식

// ES5 - 익명함수
let sum = function (a, b) {
  return a + b;
};

console.log(sum); // ƒ (a, b) { return a + b;}
console.log(sum(10, 20)); //30

let hap = function (a, b) {
  console.log(a + b);
};

console.log(hap); // ƒ (a, b) { console.log(a + b);}

// 리턴 되는 값이 없어서.. 정의가 안 되어 있어서 undefined라 뜬다.
console.log(hap(10, 20)); // undefined
hap(10, 20); // 30... 이렇게 사용하면 된다.

//ES6 (2015) - 화살표 함수 (Arrow Function)

/*
  화살표 함수 규칙
  (1)  매개변수 지정 방법
    ( )  => { }   // 매개변수가 없는 경우 ( )소괄호를 해준다.
    x =>          // 매개변수가 한 개인 경우 ( )소괄호를 생략할 수 있다.
    (x,y) => { }  // 매개변수가 2개 이상이면 ( ) 소괄호를 생략할 수 없다.

  (2) 함수몸체 정의 방법
  x => {return x*y} // single line block으로 { } 중괄호를 생략하지 않으면 return을 반드시 해준다.

  x => x*x // 함수 몸체가 한 줄의 구문이면 중괄호를 생략하면서 return도 생략 가능하다.

  ( ) => {return {a:1}};
  ( ) => ({a:1}); // 객체를 반환할때는 ( )소괄호를 사용한다.
  ( ) => {let x =10;      // multi line block일 떄는 생략 불가능
          return x*x}

*/

let sub = (a, b) => {
  return a + b;
};

// sub 라는 변수 호출
console.log(sub); // (a, b) => { return a + b;}
console.log(sub(3, 4)); //7

// let cal2 => (a) => {return a}; // 밑의 코드의 원래 코드.
// 매개변수가 한개면 생략가능
let cal2 = (a) => a;

console.log(cal2); // (a) => a
console.log(cal2(3)); // 3

// 리턴 값이 없는 코드.. 중괄호만 생략
let cal3 = () => console.log("로그인 해주세요.");
console.log(cal3); // () => console.log("로그인 해주세요.")
console.log(cal3()); // undefined
cal3(); // 로그인 해주세요.

/////////////////////////////////////
// 다양한 함수 구조

// 함수 안에 함수
// 중첩함수
function outer(a, b) {
  let result = inner(a, b); // 스크립트에서는 호이스틱이 발생됨. 그래서 오류가 발생하지 않는다.
  function inner(a, b) {
    return a + b;
  }
  return result;
}

console.log(outer(10, 3)); // 13

// 콜백(callback) 함수
// 1. 다른 함수의 인수로 사용되는 경우
// 2. 어떤 이벤트에 의해 호출되는 함수 : btn.onclik = function(){}

function callback(a, b) {
  return a + b;
}

function getNumber(callFunc) {
  console.log(`==:${callFunc}`);
  let result = callFunc(1, 6);
  return result;
}

console.log(getNumber(callback));

// 클로저(closure)
/*
1. 중첩함수는 outer(외부)함수가 끝나면 외부에서 outer(외부)함수의 자원을 사용할 수 없다.
2. 클로저는 outer(외부)함수보다 중첩함수가 더 오래 유지되는 경우 중첩함수는 이미 생명주지가 종료한
외부함수의 변수를 참조할 수 있다. 이러한 중첩함수가 클로저(closure)이다.
3. 클로저는 변수가 의도치 않게 변경되지 않도록 안전하게 은닉(information hiding)하고  
특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용한다.
*/

function outerFunc() {
  let sum = 50;
  function innerFunc(a) {
    return sum + a;
  }
  return innerFunc;
}

// 위의 innerFucn을 리턴한다.
console.log(outerFunc()); // innerFunc(a) { return sum + a;}
let outerCall = outerFunc();
console.log(outerCall); // innerFunc(a) { return sum + a;}

// 원래는 함수가 끝나면 함수 밖에서 함수안에 있는 자원을 사용 못한다.
// 하지만 된다! 이게 클로저이다.
console.log(outerCall(3)); // 53

// 연속적으로도 사용 가능하다.
console.log(outerCall(4)); // 54

///////////////////////////////
// 함수 파라미터

// (1) 기본 파라미터(default parameter) : ES6-2015
function display(a = 0, b = 0) {
  console.log(`a=${a}, b=${b}`);
}

display(1, 2); // a=1, b=2
display(1); // a=1, b=0
display(1, 2, 3, 4); // a=1, b=2

//(2) 나머지 파라미터(Rest Parameter) : ES6-2015
//- 파라미터 개수를 가변으로 사용할 수 있도록 제공해주는 연산자이다.
//- spread operator(점 3개(...))를 맨 마지막 파라미터로 사용해주면 된다.
function display2(...args) {
  console.log(args); // [1, 2]
  console.log(typeof args, args instanceof Array); // object true
}

display2(1, 2); // [1, 2]
display2(1); // [1]
display2(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

// spread operator를 고정 파라미터와 같이 사용할때는 맨 마지막에 한번만 사용한다.
function display3(num, ...args) {
  console.log(num);
  console.log(args);
}
display3(1, 2); // 1 [2]
display3(1); // 1 []
display3(1, 2, 3, 4, 5); // 1 [2, 3, 4, 5]

// arguments 객체
function display4() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    console.log(typeof arguments, arguments instanceof Array, arguments.callee);
    console.log(arguments[i]);
  }
}

display4(1);
display4(1, 3, 5);
