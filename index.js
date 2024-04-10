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

function all(name,vorname){
    document.getElementById('choix').textContent="Hallo "+name+" "+vorname+" Wie geht es bei dir ?";
}
all("Fadel","Youssef");
let fruits=["Apfel","BAnana","Erdbeern","Kartofeln"];
fruits[0]="Nie"

let x=fruits.indexOf("BAnana");
console.log(x);


let total=0;
function getnbr(...nbrs){
    for(let nbr of nbrs){
        total +=nbr;
    }
    return total;
}
document.getElementById("choix").textContent=getnbr(1,2,3,4,5,6);

//Call back wir verwenden das wenn ein function verspatung ist oder nicht fonctioniert oder mehr wollen wir es nach eines verwenden
calcul(Bieten,8,9);
function calcul(callback,x,y){
    let r=x+y;
    callback(r);

}
function Bieten(x){
    document.getElementById('choix').textContent=x;

}
//foreach provied element, index , array to call back

let nbrs=[1,2,3,4,5,6];
nbrs.forEach(zweifach);

nbrs.forEach(bieten);



function zweifach(element,index,array){
    array[index]=element*2;
}
function bieten(element){
    console.log(element);

}
// .map()  accept call back and applies a fucnt on every elment of an array
let date=["2000-1-10","2000-2-20","200-3-30"];
const dt=date.map(format);
console.log(dt);

function format(elment){
    const f=elment.split("-");
    return f[2]+"/"+f[1]+"/"+f[0];
}
//.filter()  filter each element from array to an other array
let ages=[12,78,55,45,26];
const yg=ages.filter(ftr);
console.log(yg);
function ftr(elment){
    return elment<=45;
}
//.reduce()  it use to do some calcule on every indice of an array 
const nbrs=[1,2,3,4,5,6];
const total=nbrs.reduce(sum);
function sum(acc,el){
    return acc+el;
}
document.getElementById('choix2').textContent=total;
// function as expression we use it when we want use a funct einmal
const nbrs=[1,2,3,4,5,6,7,8,9];
const filtr=nbrs.filter(function(e){
    return e<5;
});
console.log(filtr);
const mp=nbrs.map(function(e){
    return Math.pow(e,2);
});
console.log(mp);
const rd=nbrs.reduce(function(a,e){
    return a+e;
});
console.log(rd);
// arrow function use it when u want to use a funct once it can t accept also parameters
const nbrs=[1,2,3,4,5,6,7,8,9];
const mp=nbrs.map((e)=>e*2);
console.log(mp)

//object it's a collection of properties wie variable / funct...


const p1={
    name:"fadel",
    lastname:"youssef",
    age:54,
    inpraktikum:true,
    all:() => console.log("Full name"),

}
p1.all();
console.log(p1.name,p1.age);
//this   we use it for gain time we write it place of the name of the object where we are in 
const div={
    lname:"fadelox",
    call:function() {console.log(this.lname)},
}
div.call();
*/

