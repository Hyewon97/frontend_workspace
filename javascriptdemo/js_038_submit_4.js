// js_038_submit_4.js

// <input id="imgBtn" type="image" src="images/signin.gif" />

document.log_f.onsubmit = () => {
  let idNode = document.querySelector("#my_id");
  let passNode = document.querySelector("#my_pass");

  if (idNode.value == "") {
    alert("아이디를 입력하세요.");
    return false;
  }
  // elseif 쓰며 안됨. 비교할 대상이 다름.
  if (passNode.value == "") {
    alert("비밀번호를 입력하세요.");
    return false;
  }
  // doucument.log_f.action='#'
  // 강제적으로 submit() 이벤트를 발생시킨다.
  document.log_f.submit();
};
