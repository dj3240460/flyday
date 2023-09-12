const storelist = document.getElementById("storelist");

document.addEventListener("DOMContentLoaded",function(){
	const arr = [];
	fetch('/flyday/store/getinfoall')
	    .then(resp => {
	        return resp.json()
	    })
	    .then( (data => {
        data.forEach(datas => {
        	arr.push(datas);
        	
            html = `<div class="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
						<!-- Data item -->
						<div class="col">
							<small class="d-block d-lg-none">廠商編號</small>
							<div class="d-flex align-items-center">
								
								<!-- Info -->
								<div class="ms-2">
									<h6 class="mb-0 fw-light">${datas.storeNo}</h6>
								</div>
							</div>
						</div>	

						<!-- Data item -->
						<div class="col">
							<small class="d-block d-lg-none">廠商名稱</small>
							<h6 class="mb-0 fw-normal">${datas.storeName}</h6>
						</div>

						<!-- Data item -->
						<div class="col">
							<small class="d-block d-lg-none">電話</small>
							<h6 class="mb-0 fw-normal">${datas.storeTel}</h6>
						</div>

						<!-- Data item -->
						<div class="col">
							<small class="d-block d-lg-none">地址</small>
							<h6 class="mb-0 fw-normal">${datas.storeAdd}</h6>
						</div>

						

						<!-- Data item -->
						<div class="col">
							<small class="d-block d-lg-none">信箱</small>
							<h6 class="mb-0 fw-normal">${datas.storeEmail}</h6>
						</div>`

						switch (datas.storeReview) {
							case 0:
								html += 
								`<!-- Data item -->
								<div class="col">
									<select class="js-choice" id="a${datas.storeNo}">
										<option value="0" selected>未審核</option>
										<option value="1">未過審</option>
										<option value="2">已過審</option>
									</select>
								</div>`
								break;
							case 1:
								html +=
								`<!-- Data item -->
								<div class="col">
									<select class="js-choice" id="a${datas.storeNo}">
										<option value="0">未審核</option>
										<option value="1" selected>未過審</option>
										<option value="2">已過審</option>
									</select>
								</div>`
								break;
							case 2:
								html +=
								`<!-- Data item -->
								<div class="col">
									<select class="js-choice" id="a${datas.storeNo}">
										<option value="0">未審核</option>
										<option value="1">未過審</option>
										<option value="2" selected>已過審</option>
									</select>
								</div>`
								break;
						
							
						}
						html +=
						`<!-- 確認 -->
						<div class="col"><button class="btn btn-sm btn-light mb-0" onclick=sent(${datas.storeNo})>送出</button></div>
					</div>`
			storelist.innerHTML += html;
        });
        console.log(arr);
    }))
    
    const a1 = document.getElementById("re0");
    const a2 = document.getElementById("re1");
	const a3 = document.getElementById("re2");
	const aa = document.getElementById("re");
	
    
    a1.addEventListener("click", function(){
		while (storelist.firstChild) {
    		storelist.removeChild(storelist.firstChild);
		}
		arr.map(datas =>{
			if (datas.storeReview === 0) {
				html = `<div class="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">廠商編號</small>
								<div class="d-flex align-items-center">
									
									<!-- Info -->
									<div class="ms-2">
										<h6 class="mb-0 fw-light">${datas.storeNo}</h6>
									</div>
								</div>
							</div>	

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">廠商名稱</small>
								<h6 class="mb-0 fw-normal">${datas.storeName}</h6>
							</div>

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">電話</small>
								<h6 class="mb-0 fw-normal">${datas.storeTel}</h6>
							</div>

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">地址</small>
								<h6 class="mb-0 fw-normal">${datas.storeAdd}</h6>
							</div>

							

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">信箱</small>
								<h6 class="mb-0 fw-normal">${datas.storeEmail}</h6>
							</div>`

							switch (datas.storeReview) {
								case 0:
									html += 
									`<!-- Data item -->
									<div class="col">
										<select class="js-choice" id="a${datas.storeNo}">
											<option value="0" selected>未審核</option>
											<option value="1">未過審</option>
											<option value="2">已過審</option>
										</select>
									</div>`
									break;
								case 1:
									html +=
									`<!-- Data item -->
									<div class="col">
										<select class="js-choice" id="a${datas.storeNo}">
											<option value="0">未審核</option>
											<option value="1" selected>未過審</option>
											<option value="2">已過審</option>
										</select>
									</div>`
									break;
								case 2:
									html +=
									`<!-- Data item -->
									<div class="col">
										<select class="js-choice" id="a${datas.storeNo}">
											<option value="0">未審核</option>
											<option value="1">未過審</option>
											<option value="2" selected>已過審</option>
										</select>
									</div>`
									break;
							
								
							}
							html +=
							`<!-- 確認 -->
							<div class="col"><button class="btn btn-sm btn-light mb-0" onclick=sent(${datas.storeNo})>送出</button></div>
						</div>`
				storelist.innerHTML += html;
			}
		})
	})
    a2.addEventListener("click", function(){
		while (storelist.firstChild) {
    		storelist.removeChild(storelist.firstChild);
		}
		arr.map(datas =>{
			if (datas.storeReview === 1) {
				html = `<div class="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">廠商編號</small>
								<div class="d-flex align-items-center">
									
									<!-- Info -->
									<div class="ms-2">
										<h6 class="mb-0 fw-light">${datas.storeNo}</h6>
									</div>
								</div>
							</div>	

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">廠商名稱</small>
								<h6 class="mb-0 fw-normal">${datas.storeName}</h6>
							</div>

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">電話</small>
								<h6 class="mb-0 fw-normal">${datas.storeTel}</h6>
							</div>

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">地址</small>
								<h6 class="mb-0 fw-normal">${datas.storeAdd}</h6>
							</div>

							

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">信箱</small>
								<h6 class="mb-0 fw-normal">${datas.storeEmail}</h6>
							</div>`

							switch (datas.storeReview) {
								case 0:
									html += 
									`<!-- Data item -->
									<div class="col">
										<select class="js-choice" id="a${datas.storeNo}">
											<option value="0" selected>未審核</option>
											<option value="1">未過審</option>
											<option value="2">已過審</option>
										</select>
									</div>`
									break;
								case 1:
									html +=
									`<!-- Data item -->
									<div class="col">
										<select class="js-choice" id="a${datas.storeNo}">
											<option value="0">未審核</option>
											<option value="1" selected>未過審</option>
											<option value="2">已過審</option>
										</select>
									</div>`
									break;
								case 2:
									html +=
									`<!-- Data item -->
									<div class="col">
										<select class="js-choice" id="a${datas.storeNo}">
											<option value="0">未審核</option>
											<option value="1">未過審</option>
											<option value="2" selected>已過審</option>
										</select>
									</div>`
									break;
							
								
							}
							html +=
							`<!-- 確認 -->
							<div class="col"><button class="btn btn-sm btn-light mb-0" onclick=sent(${datas.storeNo})>送出</button></div>
						</div>`
				storelist.innerHTML += html;
			}
		})
	})
    a3.addEventListener("click", function(){
		while (storelist.firstChild) {
    		storelist.removeChild(storelist.firstChild);
		}
		arr.map(datas =>{
			if (datas.storeReview === 2) {
				html = `<div class="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">廠商編號</small>
								<div class="d-flex align-items-center">
									
									<!-- Info -->
									<div class="ms-2">
										<h6 class="mb-0 fw-light">${datas.storeNo}</h6>
									</div>
								</div>
							</div>	

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">廠商名稱</small>
								<h6 class="mb-0 fw-normal">${datas.storeName}</h6>
							</div>

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">電話</small>
								<h6 class="mb-0 fw-normal">${datas.storeTel}</h6>
							</div>

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">地址</small>
								<h6 class="mb-0 fw-normal">${datas.storeAdd}</h6>
							</div>

							

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">信箱</small>
								<h6 class="mb-0 fw-normal">${datas.storeEmail}</h6>
							</div>`

							switch (datas.storeReview) {
								case 0:
									html += 
									`<!-- Data item -->
									<div class="col">
										<select class="js-choice" id="a${datas.storeNo}">
											<option value="0" selected>未審核</option>
											<option value="1">未過審</option>
											<option value="2">已過審</option>
										</select>
									</div>`
									break;
								case 1:
									html +=
									`<!-- Data item -->
									<div class="col">
										<select class="js-choice" id="a${datas.storeNo}">
											<option value="0">未審核</option>
											<option value="1" selected>未過審</option>
											<option value="2">已過審</option>
										</select>
									</div>`
									break;
								case 2:
									html +=
									`<!-- Data item -->
									<div class="col">
										<select class="js-choice" id="a${datas.storeNo}">
											<option value="0">未審核</option>
											<option value="1">未過審</option>
											<option value="2" selected>已過審</option>
										</select>
									</div>`
									break;
							
								
							}
							html +=
							`<!-- 確認 -->
							<div class="col"><button class="btn btn-sm btn-light mb-0" onclick=sent(${datas.storeNo})>送出</button></div>
						</div>`
				storelist.innerHTML += html;
			}
		})
	})
    aa.addEventListener("click", function(){
		while (storelist.firstChild) {
    		storelist.removeChild(storelist.firstChild);
		}
		arr.map(datas =>{
			
				html = `<div class="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">廠商編號</small>
								<div class="d-flex align-items-center">
									
									<!-- Info -->
									<div class="ms-2">
										<h6 class="mb-0 fw-light">${datas.storeNo}</h6>
									</div>
								</div>
							</div>	

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">廠商名稱</small>
								<h6 class="mb-0 fw-normal">${datas.storeName}</h6>
							</div>

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">電話</small>
								<h6 class="mb-0 fw-normal">${datas.storeTel}</h6>
							</div>

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">地址</small>
								<h6 class="mb-0 fw-normal">${datas.storeAdd}</h6>
							</div>

							

							<!-- Data item -->
							<div class="col">
								<small class="d-block d-lg-none">信箱</small>
								<h6 class="mb-0 fw-normal">${datas.storeEmail}</h6>
							</div>`

							switch (datas.storeReview) {
								case 0:
									html += 
									`<!-- Data item -->
									<div class="col">
										<select class="js-choice" id="a${datas.storeNo}">
											<option value="0" selected>未審核</option>
											<option value="1">未過審</option>
											<option value="2">已過審</option>
										</select>
									</div>`
									break;
								case 1:
									html +=
									`<!-- Data item -->
									<div class="col">
										<select class="js-choice" id="a${datas.storeNo}">
											<option value="0">未審核</option>
											<option value="1" selected>未過審</option>
											<option value="2">已過審</option>
										</select>
									</div>`
									break;
								case 2:
									html +=
									`<!-- Data item -->
									<div class="col">
										<select class="js-choice" id="a${datas.storeNo}">
											<option value="0">未審核</option>
											<option value="1">未過審</option>
											<option value="2" selected>已過審</option>
										</select>
									</div>`
									break;
							
								
							}
							html +=
							`<!-- 確認 -->
							<div class="col"><button class="btn btn-sm btn-light mb-0" onclick=sent(${datas.storeNo})>送出</button></div>
						</div>`
				storelist.innerHTML += html;
			
		})
	})
    
})
    function sent(storeno){
		let reviewno = document.getElementById(`a${storeno}`).value;
		fetch("/flyday/store/editreview",{
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				storeNo: storeno,
				storeReview: reviewno
			})
		}).then(resp => resp.json())
		.then(data =>{
			if (data.successful) {
				location = "store-list.html";
			}
		})
	}