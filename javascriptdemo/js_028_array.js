// js_028_array.js

// 배열 초기화,, 대괄호로 처리
let score = [100, 90, 100];

// 다른 배열처럼 인덱스로 접근 가능
console.log(score[0]); // 100
console.log(score[1]); // 90
console.log(score[2]); // 100

// undefined, 선언은 되어 있지만 값이 할당되지 않는 경우
console.log(score[3]); // c언어에서는 쓰레기값 이 출력이됨.

console.log(score.length); // 3
// 배열 리터럴 형태
let person = ["John", "Doe", 26, true]; // 데이터 타입이 달라도 저장이 가능하다.

/*
John string
js_028_array.js:19 Doe string
js_028_array.js:19 26 'number'
js_028_array.js:19 true 'boolean'
*/
for (let index in person) {
  console.log(person[index], typeof person[index]);
}

/*
sasb string
js_028_array.js:31 Volvo string
js_028_array.js:31 BMW string
*/
// 배열도 객체 이용해서 생성 가능.. new 선언하는게 객체 생성인듯?
let cars = new Array("sasb", "Volvo", "BMW");
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}

// 배열은 가변적이다?
let color = [];
console.log(color.length); // 0
color[0] = "red";
console.log(color.length); // 1
color.push(1); // push로 값을 넣어줄 수 있다.
console.log(color.length); // 2
color.push(759); //
console.log(color.length); // 3

// index 4~8도 자동 생성되면서, 값은 undefined가 됨
color[8] = "blue";
console.log(color.length); // 9

/*
0 : red
js_028_array.js:54 1 : 1
js_028_array.js:54 2 : 759
*/
for (let idx in cars) {
  console.log(`${idx} : ${color[idx]}`);
}

/*
0 : red => string
1 : 1 => number
2 : 759 => number
3 : undefined => undefined
4 : undefined => undefined
5 : undefined => undefined
6 : undefined => undefined
7 : undefined => undefined
8 : blue => string
*/
for (let i = 0; i < color.length; i++) {
  console.log(`${i} : ${color[i]} => ${typeof color[i]}`);
}

//배열의 갯수로 인식, 3개의 크기를 가진 배열을 생성
let point = new Array(3);
console.log(`point length : ${point.length}`); //3

// 값이 두개면 요소의 값으로 인식함, 2개의 요소를 가진 배열을 생성
let shape = new Array(10, 20);
console.log(`point length : ${shape.length}`); //2

shape[2] = 50;
console.log(shape.length); //3

// 반복문
/*
for()
for ~ in : index
for ~ of : element
*/

/*
10
20
50
*/
// forEach(): 배열 전용 메소드
// 배열, forEach(element(배열의 요소값) =>{수행할 문장})
shape.forEach((element) => {
  console.log(`${element}`);
});

let choice = "javascript";
// Uncaught TypeError
// 문자열은 forEach()를 제공하지 않음으로 사용할 수 없다.
/*choice.forEach((element) => {
  console.log(element);
});*/

// map. 순차적으로 접근해서 사용할 수 있는 것에는 모두 사용이 가능하다.
// 배열명.map(callback);
const numbers = [4, 9, 16, 25];
// number 배열에 있는 요소 값 만큼 처리가된다.
const res = numbers.map(function (value, index) {
  return value * 2; // 요소값 하나 하나에 대해서 처리가 된다.
});

console.log(res); // (4) [8, 18, 32, 50]

const sqt = numbers.map(Math.sqrt);
console.log(`sqt: ${sqt}`); // sqt: 2,3,4,5

// reduce는 축약이 되어서 처리가 됨
function getSum(total, num) {
  // total: 누적, num:요소
  return total + num;
}

const sum = numbers.reduce(getSum);
console.log(`sum: ${sum}`); // sum: 54

// filter, 조건에 맞는 데이터 값만 가져가서 리턴해주는 함수
const ages = [32, 33, 16, 40];
const per = ages.filter((value, index) => {
  return value >= 18; // 18 이상만 출력
});
console.log(`per: ${per}`); // per: 32,33,40
