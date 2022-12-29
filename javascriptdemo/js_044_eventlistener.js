// js044_eventlistener.js

let btn = document.querySelector("button"); //객체값 받아오기

// 버튼을 실행하면 순차적으로 실행되도록 함.
// 하지만 그냥 코드를 썻을 때는 마지막 코드만 실행됨.
// btn.onclick = () => {
//   alert("click1");
// };

// btn.onclick = () => {
//   alert("click2");
// };

function click1() {
  alert("click1");
}

function click2() {
  alert("click2");
}

// btn.addEventListener('이벤트',함수,이벤트 전파);
// 이벤트 전파 => true : capturing       false: bubbling

// addEventListener 제공이 되면 t, 아니면 f
console.log(addEventListener ? true : false); // true

// 버블링 처리(false)
btn.addEventListener("click", click1, false);
btn.addEventListener("click", click2, false);

// 이벤트리스너 제거
// 제거를 시켜주겠다. click2 실행이 안됨. 당연함. 없앴음.
btn.removeEventListener("click", click2);
