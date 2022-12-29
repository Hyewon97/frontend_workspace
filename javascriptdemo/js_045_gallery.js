//js_045_gallery.js

// 작은 이미지에서 이벤트가 발생이 되었을 때
// ul > li > a 에 있는 곳에서 이벤트가 발생이 된다.
// ul id를 가져오고 애들의 자식들(element).. child, children을 가지고 오면 된다...(a href)
// childeren을 써서 element를 가지고 와서 그 안의 a의 자식을 가지고 와서 img src에 넣으면 된다
//////////////////////////////////////////////////////////////////////
//(1) 작은 이미지를 클릭하면 큰 이미지 보이게
// let pic = document.getElementById("ul");
// console.log(pic);

let bigPhoto = document.querySelector("#photo > img");
// console.log(bigPhoto.src); //NodeList

// li 가지고 옴
let list_zone = document.querySelector("ul#inner_list");
let ul_li = list_zone.children;
console.log(ul_li); // HTMLCollection(8)... 배열을 사용해야하는데 콜렉션이여서 타입이 안 맞음

// 배열에 넣기
ul_li = [...ul_li];
ul_li.map((liTag, idx) => {
  let aTag = liTag.querySelector("a");
  aTag.onclick = (e) => {
    bigPhoto.src = aTag.href;
    return false; // e.preventDefault()
  };
});
//
//(2) 다음(>) 버튼을 클릭할때 마다 <li>이 100만큼 이동하게 한다.
let m_num = 0;
let next_b_btn = document.querySelector("#next_btn");
next_b_btn.onclick = (e) => {
  // 길이에 따라서 설정한다.
  if (m_num >= ul_li.length - 3) {
    return false;
  }
  m_num++;

  // 100을 곱해서 -를 한다?
  list_zone.style.marginLeft = -100 * m_num + "px";
  return false; // e.preventDefault()
};

//(3) 이전(<) 클릭할때 마다 <li>이 100만큼 이동하게 한다.
let before_b_btn = document.querySelector("#before_btn");
before_b_btn.onclick = (e) => {
  // 길이에 따라서 설정한다.
  if (m_num <= 0) {
    return false;
  }
  m_num--;

  // 100을 곱해서 -를 한다?
  list_zone.style.marginLeft = -100 * m_num + "px";
  return false; // e.preventDefault()
};
