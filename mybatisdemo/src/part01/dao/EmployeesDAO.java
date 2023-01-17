package part01.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import part01.dto.EmpDTO;

//import common.SqlSessionTemplate;

public class EmployeesDAO {

	/*
	 * apache.org => iBatis => jdk1.4 이상 google.com => myBatis => jdk1.5 이상
	 */
	// 쿼리문을 여기세엇 작성하지 않고 empMapper 에서 작성한다.
	
	public int countMethod(SqlSession sqlSession) {
		// session은 sql templete에서 받아와야 함
		//											// namespace.id
		// 쿼리문이 셀렉트인데 값이 하나이면 selectOne, 여러개의 레코드이면 selectList로 리턴해ㅈ야한다.
		return sqlSession.selectOne("emp.cnt");
	}
	
	// list를 리턴하는 근거는 select list, 제너릭의 근거는 결과값을 받는 타입이 EmpDTO여서.(매퍼 소스코드)
	public List<EmpDTO> getAllListMethod(SqlSession sqlSession){
		return sqlSession.selectList("emp.list");
	}
	
	public List<EmpDTO> getSearchListMethod(SqlSession sqlSession, String data){
		return sqlSession.selectList("emp.searchList",data);
	}
}























