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