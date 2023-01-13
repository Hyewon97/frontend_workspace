package servletdemo.part04;
import java.util.HashMap;
import java.util.List;

public class MemController {
	
	private MemService service;
	
	public MemController() {
		service = new MemService();
	}
	
	public List<MemDTO> listProcess(){
		return service.getMemList();
	}
	
	// 하나 하나 받아서 처리... 나중에는 한번에 처리한다.
	public int insertProcess(String name, int age, String loc) {
		MemDTO dto = new MemDTO(name, age, loc);
		return service.getInsert(dto);
	}

	public int updateProcess(int num, String name, int age, String loc) {
		// map으로 넘긴다.
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("num",num);
		map.put("name",name);
		map.put("age",age);
		map.put("loc", loc);
		return service.getUpdate(map);
	}
	
	public int deleteProcess(int num) {
		return service.getDelete(num);
	}
	
} // end class


