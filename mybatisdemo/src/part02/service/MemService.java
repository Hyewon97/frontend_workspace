package part02.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import common.SqlSessionTemplate;
import part02.dao.MemDAO;
import part02.dto.MemDTO;


public class MemService {
// 

	private MemDAO dao;
	private SqlSessionFactory factory;

	public MemService() {
		dao = new MemDAO();
		factory = SqlSessionTemplate.setSqlSessionFactory();

	}

	public List<MemDTO> getAllListProcess() {
		SqlSession sqlSession = null;
		List<MemDTO> aList = null;
		try {
			sqlSession = factory.openSession(false);
			aList = dao.getAllListMethod(sqlSession);
			sqlSession.commit();
		} catch (Exception e) {
			System.out.println(e.toString());
			sqlSession.rollback();

		} finally {
			sqlSession.close();
		}

		return aList;
	}

	public int setInsertProcess(MemDTO dto) {
		SqlSession sqlSession = null;
		List<MemDTO> aList = null;
		int chk = 0;
		try {
			sqlSession = factory.openSession(false);
			chk = dao.setInsertMethod(sqlSession, dto);
			sqlSession.commit();
		} catch (Exception e) {
			System.out.println(e.toString());
			sqlSession.rollback();
		} finally {
			sqlSession.close();
		}
		return chk;
	} // end setInsertProcess

	public int setUpdateProcess(MemDTO dto) {
		SqlSession sqlSession = null;
		int chk = 0;

		try {
			sqlSession = factory.openSession(false);
			chk = dao.setUpdateMethod(sqlSession, dto);
			sqlSession.commit();
		} catch (Exception e) {
			System.out.println(e.toString());
			sqlSession.rollback();
		} finally {
			sqlSession.close();
		}
		return chk;
	} // setUpdateProcess()

	// 삭제
	public int setDeleteProcess(int num) {
		SqlSession sqlSession = null;
		int chk = 0;

		try {
			sqlSession = factory.openSession(false);
			chk = dao.setDeleteMethod(sqlSession, num);
			sqlSession.commit();
		} catch (Exception e) {
			System.out.println(e.toString());
			sqlSession.rollback();
		} finally {
			sqlSession.close();
		}
		return chk;
	}

	/////////////////////////////////////////////////////////////////
	public int setInsertListProcess(List<MemDTO> memList) {
		SqlSession sqlSession = null;
		int chk = 0;

		try {
			sqlSession = factory.openSession(false);
			// memList에서 시퀀스 만큼 값을 가져와서 num에 키 값을 넘겨준다.
			for (int i = 0; i < memList.size(); i++) {
				MemDTO memDTO = memList.get(i);
				memDTO.setNum(dao.getKeyNumMethod(sqlSession));
			}

			// insert한 갯수
			chk = dao.setInsertListMethod(sqlSession, memList);
			sqlSession.commit();
		} catch (Exception e) {
			System.out.println(e.toString());
			sqlSession.rollback();
		} finally {
			sqlSession.close();
		}
		return chk;
	}

	public int setDeleteArrayProcess(int[] num) {
		SqlSession sqlSession = null;
		int chk = 0;

		try {
			sqlSession = factory.openSession(false);
			chk = dao.setDeleteArrayMethod(sqlSession, num);
			sqlSession.commit();
		} catch (Exception e) {
			System.out.println(e.toString());
			sqlSession.rollback();
		} finally {
			sqlSession.close();
		}
		return chk; // 삭제된 갯수 리턴

	} // end setDeleteArrayProcess

	public List<MemDTO> getPartSearchProcess(MemDTO dto) {
		SqlSession sqlSession = null;
		List<MemDTO> aList = null;

		try {
			sqlSession = factory.openSession(false);
			aList = dao.getPartSearchMethod(sqlSession, dto);
			sqlSession.commit();
		} catch (Exception e) {
			System.out.println(e.toString());
			sqlSession.rollback();
		} finally {
			sqlSession.close();
		}

		return aList;
	} // end getPartSearchProcess

	public int setUpdateMultiPorcess(MemDTO dto) {
		SqlSession sqlSession = null;
		int chk = 0;

		try {
			sqlSession = factory.openSession(false);
			chk = dao.setUpdateMultiMethod(sqlSession, dto);
			sqlSession.commit();
		} catch (Exception e) {
			System.out.println(e.toString());
			sqlSession.rollback();
		} finally {
			sqlSession.close();
		}

		return chk;
	}
	
	public int setInsertDataProcess(MemDTO dto) {
		SqlSession sqlSession = null;
		int chk=0;
		
		try {
			sqlSession = factory.openSession(false);
			chk=dao.setInsertDataMethod(sqlSession, dto);
			sqlSession.commit();
		} catch (Exception e) {
			System.out.println(e.toString());
			sqlSession.rollback();
		}finally {
			sqlSession.close();
		}
		
		return chk;
	}
} // end class
