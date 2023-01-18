package part03.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import common.SqlSessionTemplate;
import part03.dto.DeptDTO;
import part03.dto.EmpDTO;

public class JoinService {
	private JoinDAO dao;
	private SqlSessionFactory factory;

	public JoinService() {
		dao = new JoinDAO();
		factory = SqlSessionTemplate.setSqlSessionFactory();
	}
	
	public List<EmpDTO> emp_deptProcess(){
		SqlSession sqlSession = null;
		sqlSession = factory.openSession(true);
		
		return dao.emp_deptMethod(sqlSession);
	}
	
	// 굳이 오토 커밋을 해제할 필요는 없다., 타입이 제너릭이고 리스트여서?
	public List<DeptDTO> dept_empProcess(){
		SqlSession sqlSession = null;
		sqlSession = factory.openSession(true);
		return dao.dept_empMethod(sqlSession);
	} // 컨트롤러로 가서 작업. 새로 만들어서 함
	
} // end class
