package web.pkg.pkgmanage.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import web.pkg.pkgmanage.dao.PkgDao;
import web.pkg.pkgmanage.entity.Pkg;
import web.pkg.pkgmanage.service.PkgService;

@Service
@Transactional
public class PkgServiceImpl implements PkgService{

	@Autowired
	private PkgDao dao;
	
	@Override
	public Pkg register(Pkg pkg) {
		dao.insert(pkg);
		pkg.setMessage("新增成功");
		pkg.setSuccessful(true);
		return pkg;
	}

	@Override
	public Pkg edit(Pkg pkg) {
		final int result = dao.update(pkg);
		pkg.setSuccessful(result > 0);
		pkg.setMessage(result > 0 ? "修改成功" : "修改失敗");
		return pkg;
	}

	@Override
	public List<Pkg> findAll() {
		return dao.selectAll();
	}

	public List<Pkg> findmyPkg(Integer storeNo) {
		return dao.selectByStoreNo(storeNo);
	}

	@Override
	public Pkg select(Integer pkgNo) {
		return dao.selectByPkgNo(pkgNo);
	}

	@Override
	public Pkg editReview(Pkg pkg) {
		final int result = dao.updateReview(pkg);
		pkg.setSuccessful(result > 0);
		pkg.setMessage(result > 0 ? "修改成功" : "修改失敗");
		return pkg;
	}

	@Override
	public Pkg editComment(Pkg pkg) {
		final int result = dao.updateComment(pkg);
		pkg.setSuccessful(result > 0);
		pkg.setMessage(result > 0 ? "修改成功" : "修改失敗");
		return pkg;
	}

}
