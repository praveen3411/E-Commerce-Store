document.querySelector("form").addEventListener("submit",myfun);
var array1=JSON.parse(localStorage.getItem("signdata"))||{};
function myfun(){
    event.preventDefault();
    var sign={
        uname:form1.form2.value,
        uemail:form1.form3.value,
        upass:form1.form4.value,
    }
   localStorage.setItem("signdata",JSON.stringify(sign));
   window.location.href="login.html";
}