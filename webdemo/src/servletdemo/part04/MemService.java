package servletdemo.part04;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;

// 트랜잭션을 처리해줌.
public class MemService {
	MemDAO dao = null;
	public MemService() {
		dao=MemDAO.getInstance();
	}

	public List<MemDTO> getMemList() {
		// 호출 할 때마다 예외처리를 해야함. -> throw 하지 말고 여기서 예외처리 한다.
		Connection conn = JdbcTemplate.getConnection();
//		MemDAO dao = MemDAO.getInstance();
		List<MemDTO> aList = null;
		try {
			// 셀렉트만 하는 부분이여서 데이터베이스에 영향을 주지 않는다. 안해도 상관이 없지만 한다.
			conn.setAutoCommit(false); // 바로 물리적인 db에 적용이 되도록 함, 자동 커밋 해제
			aList = dao.getListMethod(conn);
			// 이상 없이 처리가 됐을 때
//			conn.commit();
			JdbcTemplate.commit(conn);
		} catch (SQLException e) { // 이상이 발생했을 때 아래 코드 실행
			e.printStackTrace();

//				conn.rollback(); // 롤백하기
			JdbcTemplate.rollback(conn);
		} finally {
			JdbcTemplate.close(conn);

		}
		return aList;

	}

	public int getInsert(MemDTO dto) {
		int chk =0;
		Connection conn = JdbcTemplate.getConnection();
		try {
			conn.setAutoCommit(false);
			chk=dao.insertMethod(conn, dto);
			JdbcTemplate.commit(conn);
		} catch (SQLException e) {
			e.printStackTrace();
			JdbcTemplate.rollback(conn);
		} finally {
			JdbcTemplate.close(conn);
		}
		
		
		return chk;

	}
	
	public int getUpdate(HashMap<String, Object>map) {
		int chk=0;
		Connection conn = JdbcTemplate.getConnection();
		try {
			conn.setAutoCommit(false);
			
		//  MemDAO의 UpdateDelte를 호출한다.
			chk =dao.updateMethod(conn, map);
			JdbcTemplate.commit(conn);
		} catch (SQLException e) {
			e.printStackTrace();
			JdbcTemplate.rollback(conn);
		} finally {
			JdbcTemplate.close(conn);
		}
		
		return chk;
	} // end getUpdate( )
	
	public int getDelete(int num) {
		int chk=0;
		Connection conn = JdbcTemplate.getConnection();
		
		try {
			conn.setAutoCommit(false);
			chk = dao.deleteMethod(conn, num);
			JdbcTemplate.commit(conn);
		} catch (SQLException e) {
			e.printStackTrace();
			// 예외가 발생되멸 롤백
			JdbcTemplate.rollback(conn);
		} finally {
			JdbcTemplate.close(conn);
		}
		return chk;
	}

}









