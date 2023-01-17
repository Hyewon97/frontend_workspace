package part02.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import part02.dto.MemDTO;
import part02.service.MemService;

@WebServlet("/memUpdate")
public class MemUpdateController extends HttpServlet {

	private MemService service;

	public MemUpdateController() {
		service = new MemService();
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		req.setCharacterEncoding("UTF-8");

		int num = Integer.parseInt(req.getParameter("num"));

		String name = req.getParameter("name");
		System.out.println("name: " + name);
		
		int age = Integer.parseInt(req.getParameter("age"));
		String loc = req.getParameter("loc");

		MemDTO dto = new MemDTO();
		dto.setName(name);
		dto.setAge(age);
		dto.setLoc(loc);
		dto.setNum(num);

		req.setAttribute("dto", dto);

		String path = "/part02/update.jsp";

		RequestDispatcher dis = req.getRequestDispatcher(path);
		dis.forward(req, resp);
	} // end doGet()

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		int chk=0;
		int num = Integer.parseInt(req.getParameter("num"));
		String name = req.getParameter("name");
		int age = Integer.parseInt(req.getParameter("age"));
		String loc = req.getParameter("loc");

//		System.out.println(num);
		MemDTO dto = new MemDTO();
		dto.setNum(num);
		dto.setName(name);
		dto.setAge(age);
		dto.setLoc(loc);

		chk=service.setUpdateProcess(dto);

//		resp.sendRedirect("memList");

		// alter 발생 후 redirect 하는 방법
		resp.setContentType("text/html;charset=UTF-8");
		PrintWriter out = resp.getWriter();
		out.print("<script>alert('" + chk + "개 수정'); location.href='memList';</script>");
		out.flush();

	} // end doPost

} // end class
