package part01.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import common.SqlSessionTemplate;
import part01.dao.EmployeesDAO;
import part01.dto.EmpDTO;

public class EmpService {

	private EmployeesDAO dao;
//	private SqlSession sqlSession;
	private SqlSessionFactory factory;

	public EmpService() {
		dao = new EmployeesDAO();
		factory = SqlSessionTemplate.setSqlSessionFactory(); // 생성자로 이름 간결하게 사용
	}

	public int countProcess() {
		int chk = 0;
		SqlSession sqlSession = null; // 지역 변수는 기본값이 제공이 안되니까 반드시 초기값이 할당 되어야 한다.
		try {
//			sqlSession = SqlSessionTemplate.getSqlSession();
			
			// true이면 아래 커밋, 롤백, 클로즈가 필요 없게 됨
			sqlSession = factory.openSession(false); // 기본이 t(자동커밋) // 생성자로 이름 간결하게 사용
			chk = dao.countMethod(sqlSession);
			sqlSession.commit();
		} catch (Exception e) {
			e.printStackTrace();
			sqlSession.rollback();
		}finally {
			sqlSession.close();
		}
		return chk;
	} // get countProcess()

	
	public List<EmpDTO> getAllListProcess(){
		List<EmpDTO> aList = null;
		SqlSession sqlSession = null;
		try {
			sqlSession = factory.openSession(false);
//			sqlSession = SqlSessionTemplate.getSqlSession();
			aList = dao.getAllListMethod(sqlSession);
			sqlSession.commit();
		} catch(Exception ex) {
			sqlSession.rollback();
		} finally {
			sqlSession.close();
		}
		return aList;
	} // getAllListMethod
	
	public List<EmpDTO> getSearchListProcess(String data){
		List<EmpDTO> aList = null;
		SqlSession sqlSession=null;
		try {
			sqlSession = factory.openSession(false);
			aList = dao.getSearchListMethod(sqlSession,data);
			sqlSession.commit();
		}catch(Exception e) {
			e.printStackTrace();
			sqlSession.rollback();
		}finally {
			sqlSession.close();
		}
		return aList;
	}
} // end class




















