//?Buttons
let restart = document.querySelector("#restartButton");
let roleDiceButton = document.querySelector("#rollDiceButton");
let holdButton = document.querySelector("#holdButton");

//?pointler HTML
let sum1 = document.querySelector(".sum1");
let sum2 = document.querySelector(".sum2");
let point1 = document.querySelector(".currentResult1");
let point2 = document.querySelector(".currentResult2");
let dice = document.querySelector(".dice");

//?pointler Number
let active = 1;
let sum1Num = 0;
let sum2Num = 0;

let leftSide = document.querySelector(".leftSide");
let rightSide = document.querySelector(".rightSide");
let active1 = document.querySelector(".active1");
let active2 = document.querySelector(".active2");


function randomDice(){
    return Math.floor(Math.random()*6+1)
}
function winner(numb,player){
    if(numb>=100){
        alert("WİNNER"+player);
        // setTimeout(() => {
        //     location.reload();
        // }, 3000);
    }    
}


restart.addEventListener("click", ()=> location.reload());

roleDiceButton.addEventListener("click", ()=>{
    let randomDiceNumber = randomDice();
    
    if(active==1 && randomDiceNumber !=1){
        point1.innerText = Number(point1.innerText)+randomDiceNumber;
        dice.innerHTML = '<img src="./images/dice-'+randomDiceNumber+'.png" alt="" class="diceImg"></img>';
        dice.style.display = "block";
    }else if(active==1 && randomDiceNumber ==1){
        active = 2;
        leftSide.style.backgroundColor = "rgba(174,47,68,0.2)";
        rightSide.style.backgroundColor = "rgba(174,47,68,0.1)";
        active2.style.display = "block";
        active1.style.display ="none";
        dice.innerHTML = '<img src="./images/dice-'+randomDiceNumber+'.png" alt="" class="diceImg"></img>';
        point1.innerText = 0;
        dice.style.display = "block";
    }else if(active==2 && randomDiceNumber !=1){
        point2.innerText = Number(point2.innerText)+randomDiceNumber;
        dice.innerHTML = '<img src="./images/dice-'+randomDiceNumber+'.png" alt="" class="diceImg"></img>';
        dice.style.display = "block";
    }else{
        active = 1;
        leftSide.style.backgroundColor = "rgba(174,47,68,0.1)";
        rightSide.style.backgroundColor = "rgba(174,47,68,0.2)";
        active1.style.display = "block";
        active2.style.display ="none";
        dice.innerHTML = '<img src="./images/dice-'+randomDiceNumber+'.png" alt="" class="diceImg"></img>';
        point2.innerText = 0;
        dice.style.display = "block";
    }

})

holdButton.addEventListener("click", ()=>{
    if(active==1){
        sum1Num += Number(point1.innerText);
        sum1.innerText = sum1Num;
        active=2;
        leftSide.style.backgroundColor = "rgba(174,47,68,0.2)";
        rightSide.style.backgroundColor = "rgba(174,47,68,0.1)";
        active2.style.display = "block";
        active1.style.display ="none";
        point1.innerText =0;
        winner(sum1Num,"PLAYER1");
    }else{
        sum2Num += Number(point2.innerText);
        sum2.innerText = sum2Num;
        active=1;
        leftSide.style.backgroundColor = "rgba(174,47,68,0.1)";
        rightSide.style.backgroundColor = "rgba(174,47,68,0.2)";
        active1.style.display = "block";
        active2.style.display ="none";
        point2.innerText =0;
        winner(sum2Num,"PLAYER2")

    }
})





