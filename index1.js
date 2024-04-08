//foreach provied element, index , array to call back

let nbrs=[1,2,3,4,5,6];
nbrs.forEach(zweifach);

nbrs.forEach(bieten);



function zweifach(element,index,array){
    array[index]=element*2;
}
function bieten(element){
    console.log(element);

}