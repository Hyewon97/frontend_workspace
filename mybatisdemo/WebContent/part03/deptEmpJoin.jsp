<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>deptEmpJoin</title>
</head>
<body>
	<table>
		<tr>
			<th>department_id</th>
			<th>department_name</th>
			<th>employee_id</th>
			<th>first_name</th>
			<th>job_id</th>
		</tr>

		<c:forEach items="${requestScope.aList}" var="deptDto">
			<tr>
				<td>${deptDto.department_id}</td>
				<td>${deptDto.department_name}</td>
				<td colspan="3"></td>
			</tr>

			<!-- deptDto의 empList의 값을 가지고 와야함. -->
			<c:forEach items="${deptDto.empList}" var="emp">
				<tr>
					<td colspan="2"></td>
					<td>${emp.employee_id}</td>
					<td>${emp.first_name}</td>
					<td>${emp.job_id}</td>
					<!-- deptDto.empList[0]을 empDto로 대체-->
				</tr>
			</c:forEach>

		</c:forEach>
	</table>
</body>
</html>