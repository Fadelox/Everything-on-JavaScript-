//inheritance allows a class to inherit prop and method of other class
class me{
    name='Fadel';
    typo(){
        console.log("He is "+this.type);
    }
}
class other extends me{
    type='Gentil';
}
class others extends me{
    type='Sucks';
}
const f1=new other();
f1.typo();
const f2=new others();
f2.typo();