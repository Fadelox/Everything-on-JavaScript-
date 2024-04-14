//nested it s for object or array in other object 
const Person={
    name:'this',
    last:55,
    live:{
        job:'pc',
        age:45,
        non:'doz',
    },
    mind:[55,55,55,55],
}
console.log(Person.live.age);
console.log(Person.mind[2])