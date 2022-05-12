document.querySelector("form").addEventListener("submit",mylog);
var array1=JSON.parse(localStorage.getItem("signdata"))||{};
var array2=JSON.parse(localStorage.getItem("logindata"))||{};
function mylog(){
    event.preventDefault();
    var login={
        lemail:bomb1.bomb2.value,
        lpass:bomb1.bomb3.value,
    }
    if(array1==null){
        alert("Please Create Account")
    }
    else if(array1.uemail==login.lemail && array1.upass==login.lpass){
        alert("Login Successful");
        localStorage.setItem("logindata",JSON.stringify(login));
        window.location.href="index.html";
    }
    else{
        alert("User Doesn't Exist")
    }
}