package web.emp.empinfo.service;

import web.emp.empinfo.entity.Emp;


public interface EmpService {

	Emp login(Emp emp);
	
	Emp register(Emp emp);

	int deleteEmp(Integer empno);

	Emp update(Emp emp);
	


	
}
