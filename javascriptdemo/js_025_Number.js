// js_025_Number.js

let data = 10;
let fData = Number(data);
let nObj = new Number(data); // new 하면 object가 된다.
console.log(`data=${typeof data}`);
console.log(`data=${typeof fData}`);
console.log(`data=${typeof nObj}`);

//toString() : number, Number -> string
console.log(typeof nObj.toString()); // string
console.log(typeof data.toString()); // string

console.log(data + fData); // number + nuber =20
console.log(data + nObj); // number + object =20

//Number -> number
//valueOf() : object -> primitive
console.log(typeof nObj.valueOf()); // number
console.log(typeof new String("javascript").valueOf()); // string

// 문자열이여서 더해지지 않음
// let val = "10.0"; // 10.010.0
// let val = "10.3"; //10.310.3
// let val = "A"; //AA
let val = "10A"; //10A10A
// let val = "A10"; //A10A10
console.log(val + val);

// 숫자로 바꿔주는 방법. 글로벌을 이용하는 방법
// Number(), parseInt()
console.log(Number(val) + Number(val)); //20 20.6 NaN

// 앞의 숫자만 가져다가 변환.
console.log(parseInt(val) + parseInt(val)); // 20 20 NaN 20 NaN

// 앞에 있는 숫자만 가지고 와서 parseFloat 해준다.
console.log(parseFloat(val) + parseFloat(val)); //    20(4번째 코드)
// parseFloat(숫자, 진법);
