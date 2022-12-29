// js_047_this.js

// 호출한 객체가 없을 경우에는 기본적으로 Window 객체이다.
console.log(this);

let member = {
  name: "홍길동",
  // 함수도 저장할 수 있다.
  show: function () {
    console.log(this);
  },
};

// 함수를 호출할 때,, 현재 객체 자신이 호출 됨.
// {name: '홍길동', show: ƒ}
member.show();
////////////////////////////////////
// 애로우 함수에서 this를 사용하면 Window가 출력된다.
let member2 = {
  name: "홍길동",
  show: () => {
    console.log(this);
  },
};

// Window
member2.show();

function showThisName() {
  console.log(this);
}
// 객체가 없으면 결과는 window로 나온다.
// Window
showThisName();
//

// 애로우 함수에서 this는 window를 의미한다.
let showThisName2 = () => {
  console.log(this);
};
// Window
showThisName2();

///////////////////////////////////////////////
// 이벤트에서 this
// 버튼을 클릭해야 값이 출력된다.
// <button id="btn">commit</button>
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  console.log(this, this == btn);
});

btn.addEventListener("click", () => {
  // Window false
  // 여기에서 this는 window를 가르킨다.
  console.log(this, this == btn);
});
///////////////////////////////////////////////////////
// call, apply, bind을 이용해서 this에 특정객체를 지정할 수 있다.
///////////////////////////////////////////////////////

const hong = { name: "홍길동" };
const jung = { name: "정해인" };

///////////////////////////////////////////////////////
// call( ) : call메서드는 모든 함수에서 사용할 수 있으며 this 값을 특정값으로 지정할 수 있다.

console.log("call()=============================================");
// {name: '홍길동'}
// ( )를 비워두고 실행하면 Window가 출력됨.
showThisName.call(hong);
// {name: '정해인'}
showThisName.call(jung);

// Arrow Function 일 때 : Window
// 값을 지정해도 Window가 출력된다.
showThisName2.call(hong);
showThisName2.call(jung);

function person(birthday, job) {
  this.birthday = birthday;
  this.job = job;
  console.log(this);
}

// Window
person(2019, "IT");

// 입력된 순서대로 입력해준다.
// this로 사용할 hong 객체와 person 함수의 매개변수에서 받을 인수를 넘긴다.
// {name: '홍길동', birthday: 2000, job: '프로그래머'}
person.call(hong, 2000, "프로그래머");

// this로 사용할 jung 객체와 person 함수의 매개변수에서 받을 인수를 넘긴다.
// {name: '정해인', birthday: 2016, job: '디자이너'}
person.call(jung, 2016, "디자이너");

// 쿼리를 사용해서 this에서 사용되는 객체를 사용? 한다

//////////////////////////////////////////////////////////////////
// apply도 call과 비슷하지만 이건 배열 형태로 넘겨줘야한다.
// apply
// 1. apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 같다.
// 2. call은 일반적인 함수와 마찬가지로 매개변수로 직접 받지만 apply은 매개변수를 배열로 받는다.
console.log("apply()======================================");
// {name: '홍길동', birthday: 2000, job: '프로그래머'}
person.apply(hong, [2000, "프로그래머"]);

// {name: '정해인', birthday: 2016, job: '디자이너'}
person.apply(jung, [2016, "디자이너"]);

/////////////////////////////////////////////////////////////////////////
// bind, call과 사용방법이 같다. 정의 해놓고 별도의 작업이 필요
// 1. call과 사용방법이 같으나 실행을 해야한다.

// {name: '홍길동', birthday: 2000, job: '프로그래머'}
let hongPerson = person.bind(hong, 2000, "프로그래머");
hongPerson();

// {name: '홍길동', birthday: 2016, job: '디자이너'}
let jungPerson = person.bind(hong, 2016, "디자이너");
jungPerson();
