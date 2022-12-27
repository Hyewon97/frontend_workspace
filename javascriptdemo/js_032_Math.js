// js_032_Math

// 최대값
console.log(Math.max(1, 2, 3, 4, 5)); // 5

// 최소값
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// 절대값
console.log(Math.abs(-10)); // 10

// 반올림 -자릿수 지정할 수 없음
console.log(Math.round(25.6533)); // 26

// 올림
console.log(Math.ceil(23.344)); // 24, 무조건 올림

// 버림
console.log(Math.floor(23.56)); //23, 무조건 버림

// 난수 0.0d이상 ~ 1.0미만
console.log(Math.random()); // 난수값이 구해짐

console.log((25.523).toFixed(2)); //25.52  소수점 아래 2번째 까지 구해라
console.log((25.526).toFixed(2)); //25.53  소수점 아래 2번째 까지 구해라, 반올림이 됨.
