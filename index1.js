//Call back wir verwenden das wenn ein function verspatung ist oder nicht fonctioniert oder mehr wollen wir es nach eines verwenden
calcul(Bieten,8,9);
function calcul(callback,x,y){
    let r=x+y;
    callback(r);

}
function Bieten(x){
    document.getElementById('choix').textContent=x;

}