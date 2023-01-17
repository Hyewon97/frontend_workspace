package part02.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import part02.service.MemService;

@WebServlet("/memDelete")
public class MemDeleteController extends HttpServlet {
	private MemService service;

	public MemDeleteController() {
		service = new MemService();
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		int num = Integer.parseInt(req.getParameter("num"));
		int chk=0;

		chk =service.setDeleteProcess(num);

//		resp.sendRedirect("memList");

		// alter 발생 후 redirect 하는 방법
		resp.setContentType("text/html;charset=UTF-8");
		PrintWriter out = resp.getWriter();
		out.print("<script>alert('" + chk + "개 삭제'); location.href='memList';</script>");
		out.flush();

	} // end doGet
}
