package web.mem.meminfo.service.impl;


import javax.servlet.http.Part;
import javax.transaction.Transactional;

import org.apache.regexp.recompile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import redis.clients.jedis.Jedis;
import web.mem.meminfo.dao.MemDao;
import web.mem.meminfo.entity.Mem;
import web.mem.meminfo.service.MemService;

@Service
@Transactional
public class MemServiceImpl implements MemService {
	
	@Autowired
	private MemDao dao;
	
	@Override
	public Mem login(Mem mem) {

		final String memAcc = mem.getMemAcc();
		final String memPwd = mem.getMemPwd();
		
		if(memAcc == null || memAcc.trim().isEmpty()) {
			mem.setMessage("帳號未輸入");
			mem.setSuccessful(false);
			return mem;
		}
		
		if(memPwd == null || memPwd.trim().isEmpty()) {
			mem.setMessage("密碼未輸入");
			mem.setSuccessful(false);
			return mem;
		}
		
		mem = dao.selectAccAndPwd(memAcc, memPwd);
		if(mem == null) {
			mem = new Mem();
			mem.setMessage("使用者名稱或密碼錯誤");
			mem.setSuccessful(false);
			return mem;
		}
		
		mem.setMessage("登入成功");
		mem.setSuccessful(true);
		return mem;
	}

	@Override
	public Mem register(Mem mem) {
		
		if(dao.selectByMemAcc(mem.getMemAcc()) != null) {
			mem.setMessage("帳號重複");
			mem.setSuccessful(false);
			return mem;
		}
		
		if(dao.selectByMemEmail(mem.getMemEmail()) != null) {
			mem.setMessage("電子信箱重複");
			mem.setSuccessful(false);
			return mem;
		}
		
		if(dao.selectByMemMobile(mem.getMemMobile()) != null) {
			mem.setMessage("手機號碼重複");
			mem.setSuccessful(false);
			return mem;
		}
		
		mem.setMemAccStatus(0);
		mem.setMemLevelNo(1);
		mem.setMemActStatus(0);
		
		if(dao.insert(mem) < 1) {
			mem.setMessage("註冊失敗，請聯絡管理員");
			mem.setSuccessful(false);
			return mem;
		};
		mem.setMessage("註冊成功");
		mem.setSuccessful(true);
		return mem;
	}

	
	@Override
	public Mem updatePersonalInfo(Mem mem) {
		
		if(dao.selectByMemMobile(mem.getMemMobile()) != null 
				&& dao.selectByMemMobile(mem.getMemMobile()).getMemNo() !=  mem.getMemNo() ) {
			mem.setMessage("手機號碼重複");
			mem.setSuccessful(false);
			return mem;
		}
		
		if(dao.updateMemInfo(mem) < 1) {
			mem.setMessage("變更失敗，請聯絡管理員");
			mem.setSuccessful(false);
			return mem;
		}
		
		mem.setMessage("修改成功");
		mem.setSuccessful(true);
		return mem;
		
	}

	@Override
	public Mem changePersonalImage(byte[] memPic, Integer memNo) {
		
		Mem mem = new Mem();

		if(dao.updateMemImage(memPic, memNo) < 1) {
			mem.setMessage("圖片變更失敗，請聯絡管理員");
			mem.setSuccessful(false);
			return mem;
		}
		
		mem.setMessage("圖片修改成功");
		mem.setSuccessful(true);
		return mem;
		
	}

	@Override
	public Mem isEmailDuplicated(Mem mem) {
		if(dao.selectByMemEmail(mem.getMemEmail()) != null){
			
			mem.setMessage("此Email信箱已註冊！");
			mem.setSuccessful(false);
			return mem;
		}
		
		mem.setMessage("Email可使用！");
		mem.setSuccessful(true);
		return mem;
	}
	
	@Override
	public Mem checkEmailExists(String memEmail) {
		return dao.selectByMemEmail(memEmail);
	}

	@Override
	public Mem renewEmail(String verificationInput, String myNewEmail, Integer memNo) {
		
		Mem mem = new Mem();
		
		try(Jedis jedis = new Jedis();){
			if(verificationInput.equals(jedis.get(myNewEmail))) {
				int result = dao.updateMemEmail(myNewEmail, memNo);
				if(result < 1) {
					mem.setMessage("信箱更新失敗，請聯絡管理員");
					mem.setSuccessful(false);
					return mem;
				};
			}else {
				mem.setMessage("驗證碼輸入錯誤或驗證碼已失效");
				mem.setSuccessful(false);
				return mem;
			}
		}
		mem.setMessage("信箱變更成功！");
		mem.setSuccessful(true);
		return mem;
		
	}

	@Override
	public int renewPwd(String newMemPwd, Integer memNo) {
		return dao.updateMemPassword(newMemPwd, memNo);
	}

	@Override
	public Mem checkMemInfoByMemNo(Integer memNo) {
		return dao.selectByMemNo(memNo);
	}
	
	

}
