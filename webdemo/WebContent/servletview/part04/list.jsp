<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>list</title>
</head>
<body>
<table>
<tr>
<th>num</th><th>name</th><th>age</th><th>loc</th>
<c:forEach items="${requestScope.aList}" var="dto">
<tr><%-- 내부적으로 게터 메소드로 가져옴 --%>
<td> ${dto.num}</td><td> ${dto.name}</td>
<td> ${dto.age}</td><td> ${dto.loc}</td>
</tr>

</c:forEach>

</table>


</body>
</html>