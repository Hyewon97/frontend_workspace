// js_033_data.js

/*
[문제1]
아래 배열에서 undefined을 제외한 합께와 평균을 계산하는 프로그램을 구현하세요.
let arr= [1,2,3, undefined,4, undefined,undefined,5];

[출력결과]
합계;15
평균:3
*/
// let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

// let result = arr.filter((element) => {
//   return element;
// });
// console.log(result);

// let sum = result.reduce((total, element) => {
//   return total + element;
// });
// console.log(`합계: ${sum}`);
// console.log(`평균: ${sum / result.length}`);

///////////////////////////////////

/*
[문제2]
2차원 배열의 데이터를 이용해서 합계와 평균을 계산하는 프로그램을 구현하세요.
[데이터]
[['홍길동',90,85,40],
['이영희',100,35,75]];
[출력결과]
[['홍길동',90,85,49,215,'71.67'],
['이영희',100,35,75,210,'70.00']]

최고점:71.67
*/
// let arr2 = [
//   ["홍길동", 90, 85, 40],
//   ["이영희", 100, 35, 75],
// ];
// let sum2 = 0;
// // console.log(arr2.length);
// for (let i = 0; i < arr2.length; i++) {
//   for (let j = 0; j < arr2[0].length; j++) {
//     if (arr2[i][j] >= 0 && arr2[i][j] <= 9) {
//       arr2[i][4] = arr[i][4] + arr2[i][j];
//     }
//   }
// }

//////////////// 강사님 코드
let exam = [
  ["홍길동", 90, 85, 40],
  ["이영희", 100, 35, 75],
];

for (let i = 0; i < exam.length; i++) {
  let [fullName, ...jumsu] = exam[i]; // 값을 받아옴
  let hap = jumsu.reduce((total, currentVal) => {
    return total + currentVal;
  });
  exam[i].push(hap);
  exam[i].push((hap / jumsu.length).toFixed(2));
}

console.log(exam);

// 최고점 출력하기

// 슬라이스로 출력해도 된다. -2,-1
let lastEle = exam.map((element) => {
  return element[element.length - 1];
});
console.log(`최고점 : ${Math.max(...lastEle)}`); //71.67
