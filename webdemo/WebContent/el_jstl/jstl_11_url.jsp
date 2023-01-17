<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jstl_11_urlhere</title>
</head>
<body>
	<%--
		<a href="jstl_11_call.jsp?num=10&data=20"> jstl</a>
 --%>
<c:url var="user" value="jstl_11_call.jsp">
<%-- 파라미터 값을 넘김 --%>
<c:param name="num" value="10"/>
<c:param name="data" value="20"/>
</c:url>

<a href="${user}">jstl</a>
</body>
</html>