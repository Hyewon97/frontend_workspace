// js_050_ajax.js

// AJAX : (Asynchronous JavaScript And XML)
/*
1. XMLHttpRequest 객체 생성한다.
2. 서버와 통신할때 사용할 처리 방법을 등록한다.
3. 요청을 전송하고 통신을 시작한다.
*/

function process() {
  const xhttp = new XMLHttpRequest();

  // 어떤 페이지에 어떤 정보를 넘겨주면서 어떤 정보를 요청할것인지에 대해 적기
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

  // 응답을 받아서 처리할 수 있는 함수 정의,, 함수를 등록하면 됨
  //   xhttp.readystatechange=viewMessage;

  xhttp.send();

  // onload 메세더는 요청이 성공한다는 전제하에 실행되는 이벤트 핸들러
  // redaystatechage 이벤트 대신 -> onload 이벤트를 사용해도 된다.
  xhttp.onload = () => {
    // 정상적으로 처리가 됐으면
    if (xhttp.status === 200) {
      let data = JSON.parse(xhttp.response);
      console.log(data);
    }
  };
}

console.log("start");
process();
console.log("end");
/*
start가 처리가 되고 process가 되고 end가 처리가 된다///?
비동기화 처리하는 것은 스택에서 바로 처리가 되지 않는다.
마치 멀티 스레드가 돌아가는 것처럼 보이지만, 자바 스크립트는 단일 스레드이다.
*/
