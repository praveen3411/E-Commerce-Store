document.querySelector("form").addEventListener("submit",doll);
var cardone=JSON.parse(localStorage.getItem("carddata"))||{};
function doll(){
    event.preventDefault();
    var dat={
        holder:card1.card2.value,
        number1:card1.card3.value,
        cvv:card1.card4.value,
        mon:card1.card5.value,
        exp:card1.card6.value
    }
    localStorage.setItem("carddata",JSON.stringify(dat));

    if(cardone==null){
        alert("Payment Not Done");
    }
    else{
        alert("Payment Successful")
        window.location.href="index.html";
    }
}