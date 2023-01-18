package part03.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import part03.dao.JoinService;

@WebServlet("/deptEmpJoin")
public class DeptEmpController extends HttpServlet{
	private JoinService service;
	
	public DeptEmpController() {
		service = new JoinService();
	}
	
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// jsp에서 사용할 목적으로 req로 저장
		req.setAttribute("aList", service.dept_empProcess()); // 이 값을 아래 jsp에서 사용하면 된다.
		
		String path="/part03/deptEmpJoin.jsp";
		RequestDispatcher dis = req.getRequestDispatcher(path);
		dis.forward(req, resp);
	} // end doGet()

} // end class
