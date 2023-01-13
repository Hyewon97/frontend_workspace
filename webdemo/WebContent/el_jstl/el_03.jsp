<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>el_03</title>
</head>
<body>
<%--
	연산자 사용
	1. 논리 타입
	2. 정수 타입
	3. 실수 타입
	4. 문자열 타입
	5. 널 타입
 --%>
 
 <p> ${3+2}</p> <!-- 수식 계산 가능 -->
 <p> ${3>2}</p> <!-- 비교 연산자 사용 가능 -->
 <p> ${10==10}</p>
 <p> ${10==10 && 9!=7}</p>
 <p> ${2%2==0 ? "even" : "odd"}</p>
 <p> ${empty param.str } </p>
 <p> ${"java" == "JAVA" }</p>
 
 <!-- jsp 기본 태그를 사용할 때 앞에 res 값을 붙여야 한다. jsp.~ -->
 <!-- 쓸 일이 거의 없다. -->
 
 <!-- jsp를 사용할 떄는 별도의 라이브러리를 추가해야한다? -->
 <!-- jstl..을 사용할 때 필요한 라이브러리를 추가해야한다. 같음. 못들었어 -->
<%-- 
 <jsp:forward/>
 <jsp:include/>
 --%>
 
 
 
 
 
 
 
</body> 
</html>







