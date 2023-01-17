package common;

import java.io.IOException;
import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class SqlSessionTemplate {
	
	private static SqlSessionFactory factory=null;

	private SqlSessionTemplate() {
	}
	
	// 				리턴타입
	public static SqlSessionFactory setSqlSessionFactory() {
		
		
		// 1. 트랜잭션이 설정되어 있는 파일의 경로를 정의한다.
		String resource = "common/config/configuration.xml";
		
		// configuration 위치 넣기. 이미 위에 선언을 해 둠
		// 2. 설정 파일을 로딩하기 위해 입출력 스트림과 연결한다.
		try(Reader reader = Resources.getResourceAsReader(resource)) {
			
			// 3. 설정 파일을 저장하기 위한 팩토리를 생성해 줄 수 있는 빌더를 생성한다.
			SqlSessionFactoryBuilder sqlBuilder = new SqlSessionFactoryBuilder();
			
			//리턴타입 때문에 얘를 넘겨줘야 함.
			//4. 설정파일의 정보를 읽어와 sqlbuilder에 생성한다.
			factory = sqlBuilder.build(reader);
			
//			reader.close(); // try 안에서 선언하면 자동적으로 닫혀서 별도로 안적어도 됨
			
		}catch(IOException e) {
			e.printStackTrace();
		}
		return factory; // 외부에서 참조 가능하게 됨
	} // end setSqlSessionFactory
	
	public static SqlSession getSqlSession() {
		if(setSqlSessionFactory() == null) {
			factory = setSqlSessionFactory(); 
		}
		
		// t면 오토 커밋, f면 수동으로 커밋을 해야 함.
		// 5. 쿼리문에 접근할 수 있도록 sqlSession객체를 리턴한다.
		// openSession()의 기본값은 false이다.
		// 자동 커밋을 설정하고 싶으면 openSession(true)로 설정한다.
		// 실무엣는 자동커밋을 사정하지 않는다.
		return factory.openSession(false);
	} // getSqlSession
	
} // end class











