/*
<프로그램 실행결과>
주어진 배열에서 3의 배수의 개수 => 6
주어진 배열에서 3의 배수의 합 => 108
*/

let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];

// 주어진 배열에서 어떤 수의 배수를 구해서 리턴해주는 함수 정의
function process(arr) {
  let data = []; // 3의 배수인 것을 저장하기 위한 배열
  for (let element of arr) {
    if (element % 3 == 0) {
      // element가 3의 배수인지를 묻고
      //data.append(element); // 데이터를 추가한다.
      data.push(element);
    }
  }
  return data; // 함수 빠져나올 때 data 배열을 넘겨준다.
}

console.log(process(arr)); // (6) [3, 9, 15, 18, 30, 33]

//////////////////////////////////////////////////// 내 소스. 정상 출력 됨
let cnt = process(arr).length;
console.log(`주어진 배열에서의 3의 배수의 개수 => ${cnt}`);

let sum = 0;
for (let i = 0; i < cnt; i++) {
  sum = sum + process(arr)[i];
}
console.log(`주어진 배열에서의 3의 배수의 합 => ${sum}`);
//////////////////////////////////////////////////////

///////////////////////////////////////////////////// 강사님 소스
console.log(`주어진 배열에서의 3의 배수의 개수 => ${process(arr).length}`);

let sum2 = 0;
let result = function (val) {
  for (let element of val) {
    sum2 += element;
  }
  return sum2;
};
console.log(`주어진 배열에서의 3의 배수의 합 => ${result(process(arr))}`);
//////////////////////////////////////////////////////
