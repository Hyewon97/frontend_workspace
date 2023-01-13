<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>el_02_res.jsp</title>
</head>
<body>
	<%
	// scriptlet, 하나의값
	String data = request.getParameter("data");
	
	// 프린트를 할 때
	out.print("<p>" + data + "</p>");
	%>
	
	<p> <%= data %></p> <!-- 위에 out.print와 같음 -->
	
	<!-- 표현언어를 이용해서 표현할 때, data는 변수가 아니라 파라미터 값임 -->
	<!-- 실행할때 이 파일을 호출하는 곳에서 실행을 해야함. -->
	<p> ${param.data}</p>
	
	<%
	String[] chk = request.getParameterValues("chk");
	if(chk!=null){
		for(String sn : chk)
			out.print("<p>" + sn + "</p>");
	}
	%>
	
	
	<!-- 쓸 일이 거의 없긴 하다 -->
	<!-- 간단한 연산이 가능하다. -->
<p> ${paramValues.chk[0]}</p> 
<p> ${paramValues.chk[1]}</p>
<p> ${paramValues.chk[2]}</p> 
</body>
</html>















