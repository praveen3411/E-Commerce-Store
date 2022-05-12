var fix=document.querySelector("#five");
var array2=JSON.parse(localStorage.getItem("logindata"))||{};
if(array2==null){
    fix.innerHTML=` <div id="five"><a href="signup.html">Sign-Up</a></div>`
}
else{
    fix.innerHTML=`<div id="five"><a href="signup.html">ACC: Praveen</a></div>`
}

var fox=document.querySelector("#six");
if(array2==null){
    fox.innerHTML=`<div id="six"><a href="login.html">Login</a></div>`
}
else{
    fox.innerHTML=`<div id="six"><a href="cart.html">Cart</a></div>`;
}