package servletdemo.part04;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcTemplate {
	public static Connection getConnection() {
		Connection conn = null;
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			String url = "jdbc:oracle:thin:@127.0.0.1:1521:xe";
			String username = "hr";
			String password = "a1234";
			conn = DriverManager.getConnection(url, username, password);
		} catch (SQLException | ClassNotFoundException e) {
			System.out.println(e.toString());
		}
		return conn;
	}

	public static boolean isConnection(Connection conn) throws SQLException {
		boolean valid = true;

		if (conn == null || conn.isClosed())
			valid = false;

		return valid;
	}

	// conn 값을 넘겨줌
	public static void commit(Connection conn) {
		try {
			if (isConnection(conn))
				conn.commit(); // 연결이 되어 있으면 커밋을 해줘라. 자동 커밋을 위한
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static void rollback(Connection conn) {
		try {
			if (isConnection(conn)) {
				conn.rollback();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	// Resultset 객체 닫기
	public static void close(ResultSet rs) {
		try {
			if (rs != null)
				rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	// Statement 또는 PreparedStatement 객체 닫기
	public static void close(Statement stmt) {
		try {
			if (stmt != null)
				stmt.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static void close(Connection conn) {
		try {
			if (isConnection(conn))
				conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}


















//
