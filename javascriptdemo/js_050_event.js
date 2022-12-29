// js_050_event.js

let btn = document.querySelector("button");

console.log("start");
btn.addEventListener(
  "Click",
  function () {
    console.log("addEnentListener");
  },
  false
);

console.log("end");

/*
스택이 비어있을 때만 자원이 스택에 올라가서 처리가 된다.
비동기화식으로 처리가 되도록 제공이 되는데, 
event, setTimeOur, interval, Ajax가 있는데
멀티? 스레드가 아니라 멀티 뭐시기 처럼 처리가 된다.
*/
