// js_029_array.js

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits); // ['Banana', 'Orange', 'Apple', 'Mango']

// 문자열 값으로 받아올 수 있다.
console.log(fruits.toString()); // Banana,Orange,Apple,Mango
console.log(`${typeof fruits.toString()}`); // string

console.log(typeof fruits.join()); //string

// 요소값 연결을 이렇게 가져올 수 있다.
console.log(fruits.join("*")); // Banana*Orange*Apple*Mango
console.log(fruits.join("_")); // Banana_Orange_Apple_Mango

// 배열의 끝에 요소 추가
fruits[4] = "Kiwi";
console.log(fruits); // ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']
console.log(fruits.push("Melon")); // 6.. 총 길이 값도 되고, 다음에 들어갈 index 값도 됨.
console.log(fruits); // ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Melon']

// 배열의 끝에 요소 제거
console.log(fruits.pop()); // Melon
console.log(fruits); // ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']

// 배열의 앞에 요소 추가
console.log(fruits.unshift("Melon")); //6. 현재 저장되어 있는 배열의 갯수, 마지막에 추가할 수 있는 인덱스
console.log(fruits); // ['Melon', 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']

// 배열의 앞에 요소 제거
console.log(fruits.shift());
console.log(fruits); // ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']

// 특정 위치의 요소 제거(자리는 확보하고 있음. empty로)
delete fruits[3];
console.log(fruits); // ['Banana', 'Orange', 'Apple', empty, 'Kiwi']

fruits[3] = "Mango";
console.log(fruits); // ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']

// 특정 범위의 요소를 가져옴
console.log(fruits.slice(1, 3)); // ['Orange', 'Apple']

// 음수도 지원이 된다.
console.log(fruits.slice(-4, -2)); // ['Orange', 'Apple']

// 1인덱스부터 마지막까지 가져옴
console.log(fruits.slice(1)); // ['Orange', 'Apple', 'Mango', 'Kiwi']
console.log(fruits); // ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']

// 오름차순 정렬
console.log(fruits.sort()); // ['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']

// 내림차순 정렬
console.log(fruits.sort().reverse()); // ['Orange', 'Mango', 'Kiwi', 'Banana', 'Apple']

// 숫자를 정렬하면 생각했던 것 처럼 출력이 안된다.
let point = [40, 100, 1, 5, 10];
console.log(point.sort()); // [1, 10, 100, 40, 5]

// 오름차순, 앞에서 뒤에걸 뺌
point.sort(function (a, b) {
  return a - b;
});
console.log(point); // [1, 5, 10, 40, 100]

// 내림차순, 뒤에서 앞에걸 뺌
point.sort(function (a, b) {
  return b - a;
});
console.log(point); // [100, 40, 10, 5, 1]

// concat
let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData);
console.log(zData.length); // 6
console.log(zData); // [1, 2, 3, 4, 5, 6], 1차원 배열이 연결 되어서 출력된다.

let aData = [[1, 2, 3]];
let bData = [[4, 5, 6]];
let arr2 = aData.concat(bData);
/*
[1, 2, 3] 
[4, 5, 6]
*/
console.log(arr2);

// 다양한 배열 할당
let arr3 = [1, 3, [[[4, 5]]], [7, 8], [[9, 10], 12]];

// [1, 3, Array(1), Array(2), Array(2)]
console.log(arr3);
console.log(arr3[2][0][0][0]); // 4
console.log(arr3[4][0][0]);

// ... n차원인게 n-1차원으로 펴짐
console.log(arr3.flat()); // [1, 3, Array(1), 7, 8, Array(2), 12]

console.log(arr3); // [1, 3, Array(1), Array(2), Array(2)]
console.log(arr3[0]); // 1
console.log(arr3[2][0][0]); // [4, 5]
console.log(arr3[4][0]); // [9, 10]

// n차원 까지 펴기
console.log(arr3.flat(1)); // [1, 3, Array(1), 7, 8, Array(2), 12]
console.log(arr3.flat(2)); // [1, 3, Array(2), 7, 8, 9, 10, 12]
console.log(arr3.flat(3)); // [1, 3, 4, 5, 7, 8, 9, 10, 12]

// 원래 값은 변하지 않는다.
console.log(arr3); // [1, 3, Array(1), Array(2), Array(2)]

// 값 할당 받기
let kdata = arr3.flat(2);
console.log(kdata[2][0]); // 4
