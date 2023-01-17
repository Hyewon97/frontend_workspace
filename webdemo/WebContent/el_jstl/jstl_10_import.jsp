<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jstl_10_import.jsp</title>
</head>
<body>
	<%--
	<jsp:inclue/> 액션태그와 같은 기능을 처리한다.
 --%>
	<p>before</p>
	<c:import url="jstl_10_top.jsp"> <%-- 페이지를 요청하면서 파라미터 값을 받아옴 --%>
		<c:param name="data" value="10"/>
	</c:import>
	<p>after</p>
</body>
</html>