var danny1=JSON.parse(localStorage.getItem("mensdata"))||[];
var sum=0;
var outcome=danny1.reduce(function(acc,ele){
    sum=sum+Number(ele.price);
},0)

document.querySelector("#total").innerHTML="👦 Boys "+"-- "+sum


callthefun(danny1);

function callthefun(data){
    data.forEach(function(ele,index){
        var box=document.createElement("div");

        var one=document.createElement("img");
        one.setAttribute("src",ele.image_url);

        var two=document.createElement("h2");
        two.innerText=ele.name;

        var three=document.createElement("p");
        three.innerText=ele.price;

        var four=document.createElement("p");
        four.innerText=ele.strikedoffprice;

        var five=document.createElement("button");
        five.innerText="Delete";
        five.addEventListener("click",function(){
            ramarao(ele,index);
        })

        var six=document.createElement("button");
        six.setAttribute("id","but1")
        six.innerText="Payment";
        six.addEventListener("click",function(){
            window.location.href="payment.html"
        })
        box.append(one,two,three,four,five,six);

        document.querySelector("#m").append(box);
    })
}

function ramarao(ele,index){
    danny1.splice(index,1);
    localStorage.setItem("mensdata",JSON.stringify(danny1));
    window.location.reload();
}

// Womens-Data

var danny2=JSON.parse(localStorage.getItem("womendata"))||[];

var sum=0;

var come=danny2.reduce(function(acc,ele){
   sum=sum+Number(ele.price)
},0)

document.querySelector("#total1").innerHTML="👧 Girls"+"-- "+sum
nocall(danny2)

function nocall(data){
   data.forEach(function(ele,index){
       var box=document.createElement("div");

       var one=document.createElement("img");
       one.setAttribute("src",ele.image_url);

       var two=document.createElement("h2");
       two.innerText=ele.name;

       var three=document.createElement("p");
       three.innerText=ele.price;

       var four=document.createElement("p");
       four.innerText=ele.strikedoffprice;

       var five=document.createElement("button");
       five.innerText="Delete";
       five.addEventListener("click",function(){
           girls(ele,index);
       })

       var six=document.createElement("button");
       six.innerText="Payment";
       six.setAttribute("id","but2")
       six.addEventListener("click",function(){
           window.location.href="payment.html";
       })

       box.append(one,two,three,four,five,six);
       document.querySelector("#w").append(box);
   })
}

function girls(ele,index){
   danny2.splice(index,1);
   localStorage.setItem("womendata",JSON.stringify(danny2));
   window.location.reload();
}