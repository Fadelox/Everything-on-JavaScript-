//.filter()  filter each element from array to an other array
let ages=[12,78,55,45,26];
const yg=ages.filter(ftr);
console.log(yg);
function ftr(elment){
    return elment<=45;
}