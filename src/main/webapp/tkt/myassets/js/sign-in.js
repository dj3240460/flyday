const acc = document.getElementById("acc-input");
const pwd = document.getElementById("psw-input");
const errMsg = document.getElementById("errMsg");
const signIn = document.getElementById("sign-in");

const contextPath = window.location.pathname.split('/')[1]

signIn.addEventListener("click", function(){
	fetch(`/${contextPath}/mem/login`, {
		method: "POST",
		headers:  { "Content-Type": "application/json" },
		body: JSON.stringify({
			memAcc: acc.value,
			memPwd: pwd.value
		})
	}).then(function(response){
		return response.json();
	}).then(function(jsonObject){
		const{successful, message} = jsonObject;
		if(successful){
			location = "account-profile.html";
		}else{
			errMsg.textContent = message;
		}
	})
});