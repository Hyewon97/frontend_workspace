// js_050_time.js

function display() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
}

// start, display, end 순서대로 처리 될 것 같지만 실제로는 이렇게 안나옴.
// setTimeout이 비동기화로 처리가 되기 때문에
// start, end, 0~5 순서대로 출력이 된다.
console.log("start");

// 1초가 지나면 이 함수를 실행하라.
// 1000이 1초,, 하지만 정확히 1초 뒤에 실행되지 않음. 왜?
// 비동기로 하게 되면 큐에 쌓임. 이벤트 루프에서 스택이 비어있는지 확인하고 처리가 되기 때문에
// 정확히 1초 뒤에 실행된다는 보장이 없다. 스택에 처리할게 많으면 시간이 좀 더 걸림.
// setTimeout(실행함수, 시간).. 한번만 수행
// 함수를 등록한다고 표현함. 수행하는건 아님. 수행은 display() 쓴다고 함. 오키!
setTimeout(display, 1000);

// 1000이 지나면 이걸 수행하라... 반복적으로 수행..
// 일반적으로 홈페이지에서 반복적으로 수행되는 기능에서 사용함.
// setInterval(display, 1000);

// 처음에는 장시간 노출을 해야하면 위에걸, 그 뒤로 아래거 등등 혼용해서 쓴다.

// 자원을 제거한다
// clearInterval(display);
console.log("end");
