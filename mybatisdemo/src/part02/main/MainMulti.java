package part02.main;

import java.util.ArrayList;
import java.util.List;

import part02.controller.MemMultiController;
import part02.dto.MemDTO;

public class MainMulti {

	public static void main(String[] args) {
		MemMultiController mController = new MemMultiController();
//		memList(mController.getAllListExecute());
		
		// insert 부분
//		List<MemDTO> insertList = new ArrayList<MemDTO>();
//		insertList.add(new MemDTO("이기용", 40,"제주"));
//		insertList.add(new MemDTO("이소라", 30,"광주"));
//		int cnt =mController.setInsertListExceute(insertList);
//		System.out.printf("Insert Count :%d\n",cnt);
//		memList(mController.getAllListExecute()); 
		
		// delete 부분											오라클에 있는 번호 넣어야 함.
//		int cnt = mController.setDeleteArrayExecute(new int[] {13, 12});
//		System.out.printf("Delete Count: %d\n",cnt);
		
		
//		memList(mController.getAllListExecute());
		
		// 이름에 길이 들어가거나 나이가 20보다 크면 가지고 와라.
//		MemDTO dto = new MemDTO();
////		dto.setName("길"); // 얘를 주석처리 하면 나이가 20이상인 사람만 출려이 된다.
//		dto.setAge(20); // 얘를 주석 처리 하면 이름에 길이 포함된 사람만 출력 되는건가? 근데 출력 값은 다 나옴. 홍길동 안나오는데?
//		
//		memList(mController.getPartSearchExecute(dto));
		
//		MemDTO dto = new MemDTO();
//		dto.setAge(25);
//		dto.setNum(15); // 15 값의 나이가 25로 수정이 되어라
//		
//		int chk=mController.setUpdateMultiExecute(dto);
//		System.out.printf("Update Count : %d\n",chk);
//		memList(mController.getAllListExecute()); 
		
		MemDTO dto = new MemDTO("전다래", 30, null); // 생성자 바로 입력
		int chk=mController.setInsertDataExecute(dto);
		System.out.printf("Insert Count :%d\n",chk);
		memList(mController.getAllListExecute());
		

	} // end main
	
	public static void memList(List<MemDTO> aList) { //MemMultiController mController
//		List<MemDTO> aList = mController.getAllListExecute();
		for(MemDTO dto : aList)
			System.out.printf("%d %s %d %s\n", dto.getNum(), dto.getName(), dto.getAge(), dto.getLoc());
				
		
	} // end memList();

} // end class










