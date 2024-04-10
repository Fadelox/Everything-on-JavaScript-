//constructors  method use to define properties and method of an object 
function Cars(name,type,model,hores){
    this.name=name;
    this.type=type;
    this.model=model;
    this.hores=hores;
    this.dispo=function() {console.log("Still one")};
}
const c1=new Cars("BMW","A4",2009,788,);
console.log(c1.name);
c1.dispo();