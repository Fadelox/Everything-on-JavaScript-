 const pi=3.14;
 let c;
 let r;
 
 document.getElementById("send").onclick= function(){

    r=document.getElementById("l").value
    c=r*pi*2;
    document.getElementById('p').textContent="Resault "+c;

}