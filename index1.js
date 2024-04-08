
let total=0;
function getnbr(...nbrs){
    for(let nbr of nbrs){
        total +=nbr;
    }
    return total;
}
document.getElementById("choix").textContent=getnbr(1,2,3,4,5,6);

