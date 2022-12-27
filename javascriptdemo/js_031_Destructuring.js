// js_031_Destructuring.js

/*
Destructuring(구조 분해 할당)
: Destructuring(디스트럭쳐링)은 structuring(구조화)된 배열 또는
객체를 Destructuring(비구조화)하여 개별적으로 변수에 할당하는 개념이다.
*/

//1. 배열 Destructuring
let level = [5, 10];
let a, b;
a = level[0];
b = level[1];
console.log(`a=${a}, b=${b}`); // a=5, b=10

let c, d;
[c, d] = [5, 10];
console.log(`c=${c}, d=${d}`); // c=5 d=10

[d, c] = [c, d]; // c,d에 있는 값을 서로 교환 하려고 함.... tmp가 필요 없네?
console.log(`c=${c}, d=${d}`); // c=10, d=5

let k, p, next;
// [k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8]; // k=1, p=2, next =3
// console.log(`k=${k}`); // k=1
// console.log(`p=${p}`); // p=2
// console.log(`next=${next}`); // next=3

// [k, p, ...next] = [1, 2, 3, 4, 5, 6, 7, 8]; // k=1, p=2, 나머지 3~8값은 next가 다 받는다.
// console.log(`k=${k}`); // k=1
// console.log(`p=${p}`); // p=2
// console.log(`next=${next}`); // next=3,4,5,6,7,8

// 특정 인덱스의 값을 받지 않으려면 _(언더바)를 사용한다.
// [k, _, p, _, ...next] = [1, 2, 3, 4, 5, 6, 7, 8]; // k=1, p=2, 나머지 3~8값은 next가 다 받는다.
// console.log(`k=${k}`); // k=1
// console.log(`p=${p}`); // p=3
// console.log(`next=${next}`); // next=5,6,7,8

// 또는 특정 인덱스에 ,만 주고 출력하면 된다.
[k, , p, , ...next] = [1, 2, 3, 4, 5, 6, 7, 8]; // k=1, p=2, 나머지 3~8값은 next가 다 받는다.
console.log(`k=${k}`); // k=1
console.log(`p=${p}`); // p=3
console.log(`next=${next}`); // next=5,6,7,8

let u, t, w;
[u, t, w] = [1, 2];
console.log(`u=${u} t=${t} w=${w}`); // u=1 t=2 w=undefined

[u, t, w = 3] = [1, 2]; // w에 디폴트 값 설정
console.log(`u=${u} t=${t} w=${w}`); // u=1 t=2 w=3

[u, t = 4, w = 5] = [1, 2]; // w에 디폴트 값 설정
console.log(`u=${u} t=${t} w=${w}`); // u=1 t=2 w=5

[u = 3, t = 4, w = 5] = [1, 2]; // u=1 t=2 w=5

/////////////////////////////////////
//2. 객체 Destructuring (구조 분해 할당)
const customer = { fullname: "고수", job: "연기자;" };
let fullname = customer.fullname;
let job = customer.job;
console.log(`fullname:${customer.fullname}, job:${customer.job}`); //fullname:고수, job:연기자;

let { fullname: fn, job: jb } = customer;
console.log(`fullname:${fullname}, job:${jb}`); //fullname:고수, job:연기자;

let { fullname: name, job: jbn, loc = "서울" } = customer;
console.log(`fullname:${name}, job:${jbn}, loc: ${loc}`); // fullname:고수, job:연기자;, loc: 서울

// 이름하고 value가 같을 때
// let { s: s, r: r } = { s: 1, r: 2 };
let { s, r } = { s: 1, r: 2 };
console.log(`s:${s}, r=${r}`); // s:1, r=2

let v, q; // 외부에 변수를 별도로 선언하면 오류가 발생한다. 이걸 해결하기 위해서 ()로 감싸준다.
({ v, q } = { v: 1, 1: 2 }); //s:1, r=
console.log(`v:${v},q =${q}`);

///////////////////////
// completed의 값이 true인 검색데이터만 검색하라;

let habits = [
  { id: 1, content: "수영", completed: false },
  { id: 2, content: "걷기", completed: true },
  { id: 3, content: "명상", completed: true },
  { id: 4, content: "덕사", completed: false },
];

let listHabit = [];
for (let element of habits) {
  //console.log(element);
  if (element.completed) listHabit.push(element);
}

console.log(listHabit);
//////////////////////////////
// element가 true이면 해당하는 element만 리턴한다.
let completedHabit = habits.filter((element) => {
  return element.completed;
});
console.log(completedHabit);

//////////////////////////////////
// member 변수에서 데이터를 추출하여 '고수 고개님은 서울에 거주합니다.'라고 출력하세요.
let member = { hname: "고수", address: { zipCode: "526-143", city: "서울" } };

// 이름과 지역을 빼 오면 됨.
let {
  hname,
  address: { city },
} = member;

// 이름은 제대로 가져오는데 city는 잘 못가지고 옴. { }안에 있어서 그럼
// { }에 접근을 해서 가져와야함. let에서 address로 바꾸고, address.city하며 된다.
console.log(`${hname}고객님은 ${city}에 거주합니다.`);

//////////////////////////////////
({
  hname,
  address: { city },
} = member);
console.log(`${hname}고객님은 ${city}에 거주합니다.`);
