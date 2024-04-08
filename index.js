/*console.log("hey");
const x="It s been while";
document.getElementById("p").textContent=x;
const y=45;
const z=20;
console.log(y+z);
console.log(y-z);
console.log(y*z);
console.log(y/z);
*/
/*const t=window.prompt("What s your name");
console.log(t);
document.getElementById("p").textContent=t;
//Use some lop with logic
const z=0;
for(const x=0;x<7;x++){
    z = z+x;
}
console.log("The total is "+x);
while(x=!0){
    console.log("X egal =",x);
    x=0;
}

let pi = 3.14;
let radius;
let circurmference;
radius = window.prompt("write numbeer");
circurmference=radius *2*pi;
const p= circurmference;
document.getElementById("p").textContent=p;
 const pi=3.14;
 let c;
 let r;
 
 document.getElementById("send").onclick= function(){

    r=document.getElementById("l").value
    c=r*pi*2;
    document.getElementById('p').textContent="Resault"+c;

}
let z=0;
document.getElementById('number').textContent=z;
const plus=document.getElementById('plus');
const moins=document.getElementById('moins');
const rest=document.getElementById('rest');


plus.onclick=function(){
    z++;   
    document.getElementById('number').textContent=z;
 
}
moins.onclick=function(){
    z--;
    document.getElementById('number').textContent=z;

}
rest.onclick=function(){
    z=0;
    document.getElementById('number').textContent=z;

}
const sub=document.getElementById('sub');
const mastercart=document.getElementById('mastercart');
const visacart=document.getElementById('visacart');
const paypal=document.getElementById('paypal');
const choix=document.getElementById('choix');
const choixx=document.getElementById('choixx');

const submit=document.getElementById('submit');
submit.onclick=function(){
    if(sub.checked){
        choixx.textContent="You are subcrip";
    }else{
        choixx.textContent="You aren t subscrip";
    }
    if(visacart.checked){
        choix.textContent="Your payment method is visacard";
    }else if(paypal.checked){
        choix.textContent="Your payment method is paypal";
    }else if(mastercart.checked){
        choix.textContent="Your payment methed is mastercard"
    }else{
        choix.textContent="wahlen sie bitte eine modus fur einkaufen"
    }
}

let x=120;
let res=x>=120?"yes":"no";
document.getElementById('choix').textContent=res;
let z=true;
let res1=z==true?"ok":"nop";
document.getElementById('choix2').textContent=res1;

const max=100;
const min=1;
const guess=Math.floor(Math.random()*(max-min +1));
let nbrtry=0;
let ur=true;
let nbr=0;
while(ur){
    nbrtry++;
    nbr=window.prompt("Guess a number btw 1-100");

    if(guess==nbr){
        window.alert("Correct nubr is "+nbr+"u tried "+nbrtry);
        ur=false;
    }else{
        window.alert("Nicht recht versucht noch einmale bitte");
    }

}
*/

