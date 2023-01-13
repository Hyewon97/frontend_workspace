package servletdemo.part01;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * HttpServlet을 못 찾는 경우
 * 프로젝트 단축 메뉴 > Properties > Targeted Runtimes > Apache Tomcat 9.0 체크 > Apply and Close 
 */

// http://localhost:8090/webdemo/basic01

// 자바 소스에서 환경설정을 잡아줌
@WebServlet("/basic01")
public class Basic extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 응답해줄때 컨텐츠 타입을 지정.
		resp.setContentType("text/html;charset=UTF-8");
		
		// 옛날에는 이렇게 해줬다. 
		// 객체값 가져오기
		PrintWriter out = resp.getWriter();
		out.write("<!DOCTYPE html>");
		out.write("<html>");
		out.write("<head><title>home page</title></head>");
		out.write("<body>");
		out.write("<p>servelt page</p>");
		out.write("<p>홈페이지</p>");
		out.write("</body>");
		out.write("</html>");
		
		
	} // end doGet()

} // end class












