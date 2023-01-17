<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jstl_16_function</title>
</head>
<body>
	<%-- jstl에서 제공되는 문자열 함수 --%>
	<c:set var="str1" value="Functions" />
	<c:set var="str2" value="java test" />
	
	<%-- fn 태그를 사용해야한다. 표현언어 안에서 사용 --%>
	<p>${fn:length(str1)}</p>
	<p>${fn:toUpperCase(str1)}</p>
	<p>${fn:replace(str2,"java","jsp")}</p>
	<p>${fn:indexOf(str2,"a")}</p> <%-- 인덱스 0번부터 시작. --%>
	<p>${fn:contains(str1, str2)}</p> <%-- st1안에 str2가 포함이 되어 있냐. --%>

</body>
</html>