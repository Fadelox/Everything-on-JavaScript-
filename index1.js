// .map()  accept call back and applies a fucnt on every elment of an array
let date=["2000-1-10","2000-2-20","200-3-30"];
const dt=date.map(format);
console.log(dt);

function format(elment){
    const f=elment.split("-");
    return f[2]+"/"+f[1]+"/"+f[0];
}