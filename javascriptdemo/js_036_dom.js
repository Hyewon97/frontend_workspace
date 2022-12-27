// js_036_dom.js

let pNode = document.getElementById("wrap");
// 1 P null
console.log(`${pNode.nodeType} ${pNode.nodeName} ${pNode.nodeValue}`);

// 속성
let pAttr = pNode.attributes;
// NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
console.log(pAttr);
console.log(pAttr[0]); // id
console.log(pAttr["id"]); // id="wrap"
console.log(pAttr["length"]); //2
console.log(pAttr.id); // id
console.log(pAttr.length); //2
console.log(pAttr[0]); // id="wrap"
console.log(pAttr["class"]); // class="chk"
console.log(pAttr.class); // class="chk"

console.log(pNode.getAttribute("class")); //chk

// class는 undefined가 된다. 정적으로 설정된 값을 가져올 때는 undefined가 나온다..?
// 원하는 값을 그대로 가지고 오려면 getAttribute로 가지고 와라.
console.log(pNode.class); // undefined
console.log(pNode.getAttribute("id")); //wrap
console.log(pNode.id); //wrap

// 2 id wrap
console.log(`${pAttr[0].nodeType} ${pAttr[0].nodeName} ${pAttr[0].nodeValue}`);

let textNode = pNode.firstChild;
//"content"
console.log(textNode);

// #text content
console.log(`${textNode.nodeType} ${textNode.nodeName} ${textNode.nodeValue}`);

////////////////////////////////////////////////////////////////////
// value 속성이 없다. 컨텐츠를 다룰 떄 innerText, innerHTML가 있다.
// innerText, innerHTML : 요소의 컨텐츠
let bodyNode = document.getElementsByTagName("body")[0];

// content, 바디 안의 p꺼.. 근데 바디 안의 모든 값을 가지고 오는
console.log(bodyNode.innerText);
console.log(bodyNode.innerHTML); // 바디에 있는 모든 소스, 태그를 다 가지고 온다. 미쳤다!

// 데이터를 넣어주면 기존에 있는게 업데이트가 되어버림.
// bodyNode.innerText = "<p>apeend</P>";
// bodyNode.innerHTML = "<p>append</P>"; // HTML로 인식함.

let fname = document.querySelector("#fname");
console.log(fname.value); // 홍길동

fname.value = "고수";
