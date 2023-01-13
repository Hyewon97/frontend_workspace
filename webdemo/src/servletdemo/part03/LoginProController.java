package servletdemo.part03;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/loginPro")
public class LoginProController extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String fid = req.getParameter("fid");
		String fpass = req.getParameter("fpass");
		
//		System.out.printf("%s %s\n",fid, fpass);
		
		//mybait는 값을 하나만 받을 수 있어서
		
		MemberDTO dto = new MemberDTO();
		dto.setFid(fid);
		dto.setFpass(fpass);
		
		// 각 페이지간의 데이터를 공유할 때 사용.
		// 페이지 영역, 리퀘스트 영역, 섹션 영역, 어플리케이션 영역. 4개가 제공이 되는데
		// 각 영역에 저장할 때 setAt~을 사용해서 dto의 값을 저장한다.
		// 클라이언트 한번의 요청으로 
		req.setAttribute("dto", dto);
		
		// 경로 지정
		String path = "/servletview/part03/loginResult.jsp";
		RequestDispatcher dis = req.getRequestDispatcher(path);
		dis.forward(req, resp);
	}
}










