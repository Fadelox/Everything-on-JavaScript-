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
