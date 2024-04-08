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