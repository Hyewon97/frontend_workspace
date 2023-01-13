<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jstl_06_forEach</title>
</head>
<body>
<%
	for(int i =1;i<=5;i++)
		out.print("<p>" + i + "</p>");
%>

<hr/>
<p>forEach 반복문과 같은 기능을 제공하는 forEach 태그</p>
<c:forEach var="i" begin="1" end="5" step="1">
<P><c:out value="${i}"/> </P>
</c:forEach>
</body>
</html>