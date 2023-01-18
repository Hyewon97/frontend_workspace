package part03.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import part03.dto.DeptDTO;
import part03.dto.EmpDTO;

public class JoinDAO {

	public List<EmpDTO> emp_deptMethod(SqlSession sqlSession){
		return sqlSession.selectList("join.emp_dept");
	}
	
	// 왜 이렇게 잡았는지 근거를 따져야 하는데 못들었음. 뭐였지
	// 얘를 서비스에서 호출함
	public List<DeptDTO> dept_empMethod(SqlSession sqlSession){
		return sqlSession.selectList("join.dept_emp_list");
	}
}
