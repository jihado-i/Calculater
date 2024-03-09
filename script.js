// result 
var result = document.getElementById("result");
// buttons big operations
var mod     = document.getElementById("mod");
var sqrt    = document.getElementById("sqrt");
var pow     = document.getElementById("pow");
var clear   = document.getElementById("clear");
// buttons numbers
var zero  = document.getElementById("0");
var point = document.getElementById(".");
var one   = document.getElementById("1");
var two   = document.getElementById("2");
var there = document.getElementById("3");
var four  = document.getElementById("4");
var five  = document.getElementById("5");
var six   = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine  = document.getElementById("9");
// buttons  operations
var plus     = document.getElementById("+");
var minus    = document.getElementById("-");
var multi    = document.getElementById("*");
var divide   = document.getElementById("/");
// buttons eaual
var equal   = document.getElementById("=");

mod.onclick = ()=>{
    result.value += mod.value;
}
sqrt.onclick =()=>{
    result.value = sqrthesapla();
}
function sqrthesapla(){
    return Math.sqrt(result.value);
}
pow.onclick =()=>{
    return Math.pow(result.value,);
}
clear.onclick = ()=>{
    result.value ="";
}
zero.onclick = ()=>{
    result.value += zero.value;
}
point.onclick = ()=>{
    result.value += point.value;
}
one.onclick = ()=>{
    result.value += one.value;
}
two.onclick = ()=>{
    result.value += two.value;
}
there.onclick = ()=>{
    result.value += there.value;
}
four.onclick = ()=>{
    result.value += four.value;
}
five.onclick = ()=>{
    result.value += five.value;
}
six.onclick = ()=>{
    result.value += six.value;
}
seven.onclick = ()=>{
    result.value += seven.value;
}
eight.onclick = ()=>{
    result.value += eight.value;
}
nine.onclick = ()=>{
    result.value += nine.value;
}
plus.onclick = ()=>{
    result.value += plus.value;
}
minus.onclick = ()=>{
    result.value += minus.value;
}
multi.onclick = ()=>{
    result.value += multi.value;
}
divide.onclick = ()=>{
    result.value += divide.value;
}

equal.onclick = ()=>{
    result.value = eval(result.value);
}