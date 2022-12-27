// js_034_dom.js

//h1 가져오기           현재 문서에서 selector를 가진 애를 가져온다.
// 선택자 출력 되야 하는데?? 난 안됨. null이래
let hNode = document.getElementById("selector");
console.log(hNode);
console.log(hNode, typeof hNode);
// document.write(hNode + " " + typeof hNode);

// 선택자를 이용해서 가져온다.
let hId = document.querySelector("#selector");
console.log(hId, typeof hId);

let hClass = document.querySelector(".choice");
console.log(hClass, typeof hClass);
