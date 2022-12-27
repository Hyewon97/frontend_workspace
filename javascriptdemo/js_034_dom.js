// // js_034_dom.js

// //h1 가져오기           현재 문서에서 selector를 가진 애를 가져온다.
// // 선택자 출력 되야 하는데?? 난 안됨. null이래
// let hNode = document.getElementById("selector");
// console.log(hNode);
// console.log(hNode, typeof hNode);
// // document.write(hNode + " " + typeof hNode);

// // 선택자를 이용해서 가져온다.
// let hId = document.querySelector("#selector");
// console.log(hId, typeof hId);

// let hClass = document.querySelector(".choice");
// console.log(hClass, typeof hClass);

// let pNode = document.getElementsByTagName("p");
// console.log(typeof pNode);
// console.log(pNode.length);
// console.log(pNode[0]);
// console.log(pNode.item(0));
// // console.log(pNode[0].innerText);
// // pNode[0].style.color = "red";
// // pNode[0].style.backgroundColor = "blue";
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//js_034_dom.js

let hNode = document.getElementById("selector");
console.log(hNode);
console.log(hNode, typeof hNode);
// document.write(hNode+'  '+typeof hNode);

// let hId = document.querySelector("#selector");
// console.log(hId, typeof hId);

let hId = document.querySelector("#selector");
console.log(hId, typeof hId);

let hClass = document.querySelector(".choice");
console.log(hClass, typeof hClass);

//HTML Collection(4)
let pNoode = document.getElementsByTagName("p");
console.log(typeof pNoode);
console.log(pNoode.length);
console.log(pNoode[0]);
console.log(pNoode.item(0));
console.log(pNoode[0].innerText);
pNoode[0].style.color = "red";
pNoode[0].style.backgroundColor = "blue";

function process() {
  let frame = document.frm.fname;
  console.log("fname:", fname);
  console.log(fname.value);

  // 기본적으로 값은 defraul~에 저장이 되고 새로 저장된 값은 value에 저장이 된다.
  console.log(fname.defaultValue);

  return false;
}
