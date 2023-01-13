<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>loginResult.jsp</title>
</head>
<body>
<p>아이디 : ${requestScope.dto.fid}</p> <!-- 표현언어를 사용, requestScope을 붙이는게 정확하지만 생략 가능 -->
<p>비밀번호 : ${requestScope.dto.fpass}</p>
</body>
</html>