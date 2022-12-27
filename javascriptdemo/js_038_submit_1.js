// js_038_submit_1.js

// <input type="submit" value="login" />

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
  return true;
};
