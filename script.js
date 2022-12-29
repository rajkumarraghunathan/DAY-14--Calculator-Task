//create a div for container 
const div=document.createElement("div");
div.setAttribute("id","myDiv");
div.setAttribute("class","container");

// heading
const h1Div = document.createElement("div");
h1Div.setAttribute("class","text-center");
document.body.append(h1Div);

const h1 =document.createElement("h1");
h1.setAttribute("class","text-center");
h1.setAttribute("id","title");
h1.textContent="CALCULATOR";
h1Div.append(h1);

const para = document.createElement("p");
para.setAttribute("class","text-center");
para.setAttribute("id","description");
para.textContent="Simple Calculator for calculate the value"
h1Div.append(para);



//create a div for input display
const div2=document.createElement("div");
div2.setAttribute("id","display-input");
div.appendChild(div2);



// create a input display
const input=document.createElement("input");
input.setAttribute("id","result");
input.setAttribute("type","text");
input.setAttribute("value",0);
input.setAttribute("placeholder","0");
div2.appendChild(input);


var a="";

//create a div for number
const div3=document.createElement("div");
div3.setAttribute("id","display-number");
div.appendChild(div3);

const module=document.createElement("button");
module.setAttribute("id","module");
module.setAttribute("class","btn");
module.innerText="%";
module.addEventListener("click",()=>{
    a=a+"%";
    document.getElementById("result").value=a;
})
div3.appendChild(module);

const clear=document.createElement("button");
clear.setAttribute("id","clear");
clear.setAttribute("class","btn");
clear.innerText="CE";
clear.addEventListener("click",()=>{
    a="";
    document.getElementById("result").value=a;
})
div3.appendChild(clear);

const del=document.createElement("button");
del.setAttribute("id","delete");
del.setAttribute("class","btn");
del.innerText="DEL";
del.addEventListener("click",()=>{
    a=a.slice(0,-1);
    document.getElementById("result").value=a;
});
div3.appendChild(del);

const add=document.createElement("button");
add.setAttribute("id","add");
add.setAttribute("class","btn");
add.innerText="+";
add.addEventListener("click",()=>{
    a=a+"+";
    document.getElementById("result").value=a;
})
div3.appendChild(add);


const btn1=document.createElement("button");
btn1.setAttribute("id","1");
btn1.setAttribute("class","btn");
btn1.innerText="1";
btn1.addEventListener("click",() =>{
    a=a+1;
    document.getElementById("result").value=a;
});
div3.appendChild(btn1);

const btn2=document.createElement("button");
btn2.setAttribute("id","2");
btn2.setAttribute("class","btn");
btn2.innerText="2";
btn2.addEventListener("click",()=>{
    a=a+2;
    document.getElementById("result").value=a;
});
div3.appendChild(btn2);

const btn3=document.createElement("button");
btn3.setAttribute("id","3");
btn3.setAttribute("class","btn");
btn3.innerText="3";
btn3.addEventListener("click",()=>{
    a=a+3;
    document.getElementById("result").value=a;
});
div3.appendChild(btn3);

const sub=document.createElement("button");
sub.setAttribute("id","subtract");
sub.setAttribute("class","btn");
sub.innerText="-";
sub.addEventListener("click",() =>{
    a=a+"-";
    document.getElementById("result").value=a;
});
div3.appendChild(sub);

const btn4=document.createElement("button");
btn4.setAttribute("id","4");
btn4.setAttribute("class","btn");
btn4.innerText="4";
btn4.addEventListener("click",()=>{
    a=a+4;
    document.getElementById("result").value=a;
});
div3.appendChild(btn4);

const btn5=document.createElement("button");
btn5.setAttribute("id","5");
btn5.setAttribute("class","btn");
btn5.innerText="5";
btn5.addEventListener("click",()=>{
    a=a+5;
    document.getElementById("result").value=a;
});
div3.appendChild(btn5);

const btn6=document.createElement("button");
btn6.setAttribute("id","6");
btn6.setAttribute("class","btn");
btn6.innerText="6";
btn6.addEventListener("click",()=>{
    a=a+6;
    document.getElementById("result").value=a;
});
div3.appendChild(btn6);

const mul=document.createElement("button");
mul.setAttribute("id","multiply");
mul.setAttribute("class","btn");
mul.innerText="*";
mul.addEventListener("click",()=>{
    a=a+"*";
    document.getElementById("result").value=a;
});
div3.appendChild(mul);

const btn7=document.createElement("button");
btn7.setAttribute("id","7");
btn7.setAttribute("class","btn");
btn7.innerText="7";
btn7.addEventListener("click",()=>{
    a=a+7;
    document.getElementById("result").value=a;
});
div3.appendChild(btn7);

const btn8=document.createElement("button");
btn8.setAttribute("id","8");
btn8.setAttribute("class","btn");
btn8.innerText="8";
btn8.addEventListener("click",()=>{
    a=a+8;
    document.getElementById("result").value=a;
});
div3.appendChild(btn8);

const btn9=document.createElement("button");
btn9.setAttribute("id","9");
btn9.setAttribute("class","btn");
btn9.innerText="9";
btn9.addEventListener("click",()=>{
    a=a+9;
    document.getElementById("result").value=a;
});
div3.appendChild(btn9);

const divi=document.createElement("button");
divi.setAttribute("id","divi");
divi.setAttribute("class","btn");
divi.innerText="/";
divi.addEventListener("click",()=>{
    a=a+"/";
    document.getElementById("result").value=a;
});
div3.appendChild(divi);

const dot=document.createElement("button");
dot.setAttribute("id","dot");
dot.setAttribute("class","btn");
dot.innerText=".";
dot.addEventListener("click",()=>{
    a=a+".";
    document.getElementById("result").value=a;
});
div3.appendChild(dot);

const btn0=document.createElement("button");
btn0.setAttribute("id","0");
btn0.setAttribute("class","btn");
btn0.innerText="0";
btn0.addEventListener("click",()=>{
    a=a+0;
    document.getElementById("result").value=a;
});
div3.appendChild(btn0);

const equ=document.createElement("button");
equ.setAttribute("id","equal");
equ.setAttribute("class","btn");
equ.innerText="=";
// equ.addEventListener("click",equal());
equ.addEventListener("click",()=>{
   
    try {
        calculate.value = eval(calculate.value);
        
        a=calculate.value;
    } catch (error) {
        alert("only numbers are allowed");
    }
    
});
div3.appendChild(equ);

document.body.append(div);



let button1=document.getElementById("btn1");
let button2=document.getElementById("btn2");
let button3=document.getElementById("btn3");
let button4=document.getElementById("btn4");
let button5=document.getElementById("btn5");
let button6=document.getElementById("btn6");
let button7=document.getElementById("btn7");
let button8=document.getElementById("btn8");
let button9=document.getElementById("btn9");
let button0=document.getElementById("btn0");

var calculate=document.getElementById("result");

