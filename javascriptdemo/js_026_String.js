//js_026_String.html.js

let data = "It`s alright";
console.log(data);

// length : 문자열의 길이
console.log(data.length); //12

/*
특정 범위 데이터를 리턴해주는 3가지 메소드
1. substring(start, end);
2. substr(start, length);
3. slice(start,end);
*/

data = "Apple, Banana, Kiwi";
//Banana                               // 7인데스부터 13 인덱스 미만
console.log(`substring: ${data.substring(7, 13)}`); //substring: Banana

//substring()은 음수값을 지원하지 않는다.
console.log(`1 substring:${data.substring(-12, -6)}`);

//Bababa
console.log(`substr: ${data.substr(7, 6)}`);
console.log(`substr:${data.substr(-12, 6)}`);

console.log(`slice: ${data.slice(7, 13)}`);
console.log(`slice:${data.slice(-12, -6)}`);

console.log(`data:${data}`); // Banana, Kiwi

// 문자열 변경.. replace
// replace('찾을 문자열|RegExp', '바꿀 문자열');
// i: 대소문자 구분 없음. g:모든 문자열
console.log(`replace: ${data.replace("Banana", "Grape")}`);

// Apple, Banana, Kiwi
console.log(`data:${data}`);

data = "Mr Blue has a blue house and a blue car";
//Mr Bluse has a blue house and a blue car
console.log(data.replace(/blue/g, "red")); // 뒤에 g를 붙여주면 모든 단어 대체. 대소문자 구분

data = "Mr Blue has a blue house and a blue car";
//Mr Bluse has a blue house and a blue car
console.log(data.replace(/blue/i, "red")); // i 대소문자 구분을 안한다.

data = "Mr Blue has a blue house and a blue car";
//Mr Bluse has a blue house and a blue car
console.log(data.replace(/blue/gi, "red")); // 대소문자 구분 없이 모든 단어 대체

data = "Hello World";
// HELLO WORLD
console.log(`toUpperCase(): ${data.toUpperCase()}`);

// hello world
console.log(`toLowerCase(): ${data.toLowerCase()}`);

let data2 = "javascript";
// Hello Worldjavascript
console.log(`concat(): ${data.concat(data2)}`);

//Hello World javascript
console.log(`concat(): ${data.concat(" ", data2)}`);

//Hello World_javascript
console.log(`concat(): ${data.concat("_", data2)}`);

// 특정 인덱스에 있는 문자 가져오기
// H
console.log(`charAt(): ${data.charAt(0)}`);

//72 (unicode value)
console.log(`charAt(): ${data.charCodeAt(0)}`);

//match() : 검색데이터와 일치하는 문자열 있으면 문자열 모두를 찾아서 배열로 리턴하고
//          일치하는 문자열이 없으면 null로 리턴한다.
data = "Mr Blue has a blue house and a blue car";
let res = data.match(/blue/g); // 배열로 리턴이 된다.
// blue,blue object true
console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);

res = data.match(/red/g);
// null object false
console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);

// serach( ) : 검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고
//              일치하는 문자열이 없으면 -1를 리턴한다.
res = data.search(/blue/g);
// 14
console.log(`search(): ${res}`);

res = data.search(/red/g);
// -1
console.log(`search(): ${res}`);

data = "Mr Blue has a blue house and a blue car";
// indexof( ): 문자열의 인덱스를 리턴
// 0
console.log(data.indexOf("M"));

// 3
console.log(data.indexOf("B"));

let position = data.indexOf("blue");
console.log(position); //14
//blue라는 문자열을 position + 1 위치(15)에서부터 찾아라.
//31
console.log(data.indexOf("blue", position + 1));

data = "Mr Blue has a blue house and a blue car";
// blue가 있는 모든 데이터값 가져오기. 없으면 끝내고
let pos = -1;
do {
  // 반복문이 -1일때 돌아야 한다. ? -1이 아닐 때?
  pos = pos + 1;
  pos = data.indexOf("blue", pos);
  if (pos != -1) console.log(pos);
  else break;
} while (true);

//repeact()
let text = "korea";
console.log(typeof text); // string
console.log(text.repeat(10)); // 객체 타입으로 제공

text = "*";
console.log(text.repeat(10));

let text2 = "  korea   data "; // 앞에2개 가운데 3개 뒤에 1개
// tream사용하면 k 앞, a 뒤 공백 없어짐
// 15
console.log(text2.length);

// 12
console.log(text2.trim().length);
