const max=100;
const min=1;
const guess=Math.floor(Math.random()*(max-min +1));
let nbrtry=0;
let ur=true;
let nbr=0;
while(ur){
    nbrtry++;
    nbr=window.prompt("Guess a number btw 1-100");

    if(guess==nbr){
        window.alert("Correct nubr is "+nbr+"u tried "+nbrtry);
        ur=false;
    }else{
        window.alert("Nicht recht versucht noch einmale bitte");
    }

}