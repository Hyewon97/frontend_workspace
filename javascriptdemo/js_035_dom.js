// js_035_dom.js

let myNode = document.getElementById("p2");
// <p id="p2">content2</p>.... 제대로 출력됨
console.log(myNode);

// myNode:[object HTMLParagraphElement]
console.log(`myNode:${myNode}`);

////////////////////////////// myNode 부모애 스타일을 적용하려면?
let ptNode = myNode.parentNode;

//<div#wrap
console.log(ptNode);

// ptNode:[object HTMLDivElement]
console.log(`ptNode:${ptNode}`);

// 특정(자식) 노드만 스타일 적용
// myNode.style.color = "blue";

// 부모 노드 스타일 적용 -> 모든 텍스트에 스타일 적용됨
ptNode.style.color = "blue";

/////////////////////////////////////////////// 이웃된 노드를 가져오기
// previousSibling : 모든 노드를 검색한다. (텍스트 노드도)
let prevNode = myNode.previousSibling;

// // prevNode:[object Text].... 줄바꿈 공백은 하나로 처리가 되는데 줄바꿈이 text 노드로 들어감
console.log(`prevNode:${prevNode}`);

prevNode = prevNode.previousSibling;
console.log(prevNode); // p#p1
// prevNode:[object HTMLParagraphElement]... 공백 앞에 요소를 가져온다.
console.log(`prevNode:${prevNode}`);
/////////////////
// previousElementSibling : element node만 검색한다.
let prevElementNode = myNode.previousElementSibling; // 바로 앞의 엘리먼트.. 이웃 요소를 가져온다.
console.log(prevElementNode); // p#p1
// prevElementNode:[object HTMLParagraphElement]
console.log(`prevElementNode:${prevElementNode}`);

////////////////////////////////////////////////////
// nextsibling
let nextNode = myNode.nextSibling;
// nextNode:[object Text].. 텍스트까지 가져온다.
console.log(`nextNode:${nextNode}`);

nextNode = nextNode.nextSibling; // 공백 앞에 있는 애를 가져온다.
//<p id="p3">content3</p>
console.log(nextNode);
// nextNode:[object HTMLParagraphElement]
console.log(`nextNode:${nextNode}`);

///////////////////////////////////////////////////
// nextElementSibling
let nextElementSibling = myNode.nextElementSibling;
// nextElementSibling:[object HTMLParagraphElement]
console.log(`nextElementSibling:${nextElementSibling}`);

/////////////////////////////////////////////////////////////// 자식 가져오기
// childNodes
let divNode = document.getElementById("wrap");
// [object HTMLDivElement]
console.log(`${divNode}`);

let divChilesNode = divNode.childNodes;
// [object NodeList]
console.log(`${divChilesNode}`);
//NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]
console.log(divChilesNode);

//////////////////////////////////////////
// children
let divChildren = divNode.children;
// [object HTMLCollection]
console.log(`${divChildren}`);

// HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4
console.log(divChildren);

let p4Node = document.querySelector("#p4");
//<p id="p4">…</p>
console.log(p4Node);
console.log(`${p4Node}`);

let aNode = p4Node.firstElementChild; // 공백이 아닌걸 가져와애 해서 firstElementChild
//<img src="images/gosu.jpg" alt="영화배우">
console.log(aNode);
// [object HTMLImageElement]
console.log(`${aNode}`);
//////////////////////////////////////////////////////////////////
// 객체.getAttribute('속성명'),     객체.setAttribute('속성명', '값')
// 객체.속성명, 객체,속셩명='값'

let aAttrNode = aNode.getAttribute("src"); // 속성에 해당되는 값이 출력
// images/gosu.jpg
console.log(aAttrNode);

aAttrNode = aNode.src; // src : 전체 코드를 가져온다
// http://127.0.0.1:5500/javascriptdemo/images/gosu.jpg
console.log(aAttrNode);

console.log(aNode.getAttribute("class")); //gosu
// 크래스로 가져오면 undefined로 가져온다.
console.log(aNode.class); // undefined

// aNode.setAttribute("title", "스타배우"); //속성에 값을 지정
// console.log(aNode.getAttribute("title")); //스타배우
// console.log(aNode.title); // 스타배우
// aNode.id = "imgGosu";
// console.log(aNode.id); // imgGosu
// console.log(aNode.getAttribute("id")); // imgGosu

console.log(aNode.getAttribute("title")); //스타배우
console.log(aNode.title); // 스타배우
console.log(aNode.getAttribute("id")); // imgGosu
console.log(aNode.id); // imgGosu

//                      노드로 리턴이 된다.
let aAttrList = aNode.getAttributeNode;
console.log(aAttrList.length); //1

// ƒ getAttributeNode() { [native code] }
console.log(aAttrList);
