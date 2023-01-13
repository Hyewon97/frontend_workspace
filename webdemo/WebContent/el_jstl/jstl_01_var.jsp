<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<!-- 
	커스텀 태그(Custom Tag)
	1. jsp에서 사용할 수 있도록 사용자 정의 태그를 의미한다.
	2. jstl(JSP Standard Tag Library)은 jsp페이지에서 많이 사용되는
	논리적인 판단, 반복문의 처리, 데이터베이스 등의 처리를 위한 표준 커스텀 태그이다.
	 -->

<%
	int data =20;
%>

<!-- 변수 선언. jstl을 이용  위에 20 선언한 코드랑 같은 뜻-->
<c:set var="data" value="10"/>

<p> ${data} </p> <!-- <%%>으로 표현한 거는 이렇게 출력못함 -->

<p> <c:out value="${data}"/></p>
<p> <c:out value="<%=data%>"/></p> <!-- 위에 선언한 20 출력 -->

<!-- 변수 제거 -->
<c:remove var="data"/>
<p> ${data} </p> 

<%
	request.setAttribute("st", "request");
%>

<p>st:${requestScope.st}</p>
<%--  st:${request.getAttribute("st")} 는 출력 안됨--%>
<p>st:<c:out value='<%=request.getAttribute("st")%>'/></p>
</body>
</html>










