package web.store.store.controller;

import static core.util.CommonUtil.json2Pojo;
import static core.util.CommonUtil.writePojo2Json;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import core.util.CommonUtil;
import web.store.store.entity.Store;
import web.store.store.service.StoreMemberService;

@WebServlet("/store/register")
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1062017833925367218L;
	private StoreMemberService service;

	@Override
	public void init() throws ServletException {
		service = CommonUtil.getBean(getServletContext(), StoreMemberService.class);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response){

		Store store = json2Pojo(request, Store.class);

		if (store == null) {
			store = new Store();
			store.setMessage("無會員資訊");
			store.setSuccessful(false);
			writePojo2Json(response, store);
			return;
		}

		store = service.register(store);
		writePojo2Json(response, store);
		
	}
}
