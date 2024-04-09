//.reduce()  it use to do some calcule on every indice of an array 
const nbrs=[1,2,3,4,5,6];
const total=nbrs.reduce(sum);
function sum(acc,el){
    return acc+el;
}
document.getElementById('choix2').textContent=total;