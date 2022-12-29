//js_046_lotto.js

//1. 6개의 난수를 구하고 중복체크
// let lotto = [];
// let test = Math.random() * 10;
// console.log(test);

// for (let i = 0; i < 6; i++) {
//   lotto.push(Math.floor(Math.random() * 45 + 1));
//   console.log(lotto[i]);
// }

// for (let i = 0; i < 6; i++) {
//   lotto.push(Math.floor(Math.random() * 45 + 1));
//   console.log(lotto[i]);
//   for (let j = 0; j < i; j++) {
//     if (lotto[i] == lotto[j]) {
//       i--;
//     }
//   }
// }

// //2.정렬
// let tmp = 0;
// for (let i = 0; i < 6; i++) {
//   for (let j = 0; j < 5; j++) {
//     if (lotto[i] <= lotto[j]) {
//       tmp = lotto[i];
//       lotto[i] = lotto[j];
//       lotto[j] = tmp;
//     }
//   }
// }

//3. 출력
// console.log(lotto);
// console.log(`=======================`);
// for (let i = 0; i < 6; i++) {
//   console.log(lotto[i]);
// }
// let val = document.querySelector(".wrap");
// console.log(val);
// let ul_li = val.children;
// ul_li = [...ul_li];
// console.log(ul_li);

////////////////////////////////////////////// 강사님 소스
//1. 6개의 난수를 구하고 중복 체크
let lotto = [];
for (let i = 0; i < 6; i++) {
  // 0.0이상 ~ 1.0미만
  // let ran =Math.random();

  // 0.0이상 ~ 45.0미만
  let ran = Math.random() * 45;
  // 1이상 ~ 45미만
  ran = Math.floor(ran) + 1;
  lotto.push(ran);
  console.log(lotto[i]);

  for (let j = 0; j < i; j++) {
    if (lotto[j] == lotto[i]) {
      lotto.pop();
      i--;
      break;
    }
  }
}

// 2. 오름차순 정렬
lotto.sort((a, b) => {
  return a - b;
});

// 출력
console.log(lotto);

// NodeList
let divList = document.querySelectorAll("div.wrap div");

divList.forEach((element, idx) => {
  element.innerText = lotto[idx];
});
