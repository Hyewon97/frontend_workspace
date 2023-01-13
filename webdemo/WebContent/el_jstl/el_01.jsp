<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주석처리</title>
<h3>주석처리</h3>
<!-- html 주석, 노출이 됨 -->
<%-- jsp 주석, 중요한 것만, 노출이 안됨, 웹 페이지에서 우클릭 소스 보기 하면 안보이고 html에서는 보임 --%>

<%--
	EL(Expression Language) : 표현 언어
	1. JSP 스크립트를 대신해서 속성값을 편리하게 출력할 수 있도록 제공해주는 언어이다.
	2. ${ } 
	되도록이면 %--로 주석처리를 하라. html 주석처리는 오류 발생할 수 있음.
 --%>
 
 <%--
  <% %> : jsp에서 자바 코드를 사용할 때 스크립트 밑을 사용한다.
 --%>
 <%
 	// scope(영역) - 데이터를 참조할 수 있도록 제공해주는 공간
 	
 	// 톰캣이 실행되면 자동적으로 실행되는 9개의 영역이 있음. 
 	// page-pageContext, request-request, session-session, apllication-application
 	// 생성되는 페이지에서만 참조 가능하다.
 	
 	// page영역에 p1이름으로 page값이 저장된다.
 	pageContext.setAttribute("p1", "page"); // 현재 생성되는 페이지 에서만 참조 가능
 	
 	// reques 영역에 p2이름으로 requet 값이 저장된다.
 	request.setAttribute("p2", "request");  // 한 번의 호출
 	
 	// session영역에 p3이름으로 sessionr값이 저장된다.
 	session.setAttribute("p3", "session"); // 하나의 클라이언트
 	
 	// application영역에 p4이름으로 aaplication값이 저장된다.
 	application.setAttribute("p4", "application");// 모든 클라이언트
 	
 	// 현재 페이지에서 모두 생성하면 4개의 페이지 모두 참조 가능
 %>

<p>
 <%-- p1의 값을 출력하라 .. 이 방법은 많이 사용하지 않는다.--%>
 <%=pageContext.getAttribute("p1") %> / <%= request.getAttribute("p2") %> /
 <%= session.getAttribute("p3") %> / <%= application.getAttribute("p4") %>
</p>


<%-- 이 방법을 많이 사용한다.--%>
<p>
${pageScope.p1} / ${requestScope.p2} / ${sessionScope.p3} / ${applicationScope.p4}
</p>

<p>
<!-- 
	속성값을 가져올 때 영역을 명시하지 않으면 page->request->session->application 순으로 검색을 한다.
 -->
${p3}
</p>


</head>
<body>

</body>
</html>












