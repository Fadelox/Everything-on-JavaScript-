//super is used for superclass the ihertance class we shoud write super danach chose the method or the propoties that u want to use
class first{
    constructor(name,typ){
        this.name=name;
        this.typ=typ;
    }
    model(mode){
        console.log('it s model '+this.mode);
    }
}
class Person extends first{
    constructor(name,typ,mode){
        super(name,typ);
        this.mode=mode;
    }
    do(){
        super.model(this.mode);}
}
const p1=new Person('fadel',2,455);
p1.model(this.mode);

