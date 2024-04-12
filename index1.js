//class containes constructor and method used it with object
class Lalo{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    taxes(val){
        return this.price*val;

    }
}
const l1=new Lalo('Fadel',155);
let x=0.2;
console.log(l1.taxes(x));