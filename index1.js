//arrays of object 
const All=[{name:'fadel',age:12},
           {name:'youssef',age:15},
           {name:'lalo',age:78},
           {name:'yess',age:45},];

console.log(All.reduce((a,e)=>a.age+e.age))