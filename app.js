let gameSeq=[];
let userSeq=[];
let level=0;
let highScore=0;
let started=false;
let h3=document.querySelector("h3");
const boxColors=["red","yellow","green","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(!started){
        console.log("Game Started");
        started=true;
        levelUp();
    }
    
});
function gameflash(box){
    box.classList.add("flash");
    setTimeout(function(){
        box.classList.remove("flash");
    },300);
}
function userflash(box){
    box.classList.add("userflash");
    setTimeout(function(){
        box.classList.remove("userflash");
    },300);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level} current score: ${level-1}`;
    let randNum=Math.floor(Math.random()*4);
    let randColor=boxColors[randNum];
    let randBox=document.querySelector(`.${randColor}`);
    console.log(randNum);
    console.log(randColor);
    console.log(randBox);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBox);
    

}
function checkSeq(i){
    console.log(`level: ${level}`);
   
    if(userSeq[i]===gameSeq[i]){
        if(userSeq.length===gameSeq.length){
            console.log("Level Up");
            setTimeout(levelUp,1000);

        }
        console.log("Success");
    }else{
        let currscore=level-1;
        if(currscore>highScore){
            highScore=currscore;
        }
        h2.innerText="Game Over! Press any key to restart. high score: "+(level-1);
        console.log(`gived up at level ${level}`);
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="";
        },200);
        h3.innerHTML=`HIGHEST SCORE TILL NOW: ${highScore}`;
        reset();
        
    }
}
function boxClick(){
    let box=this;
    console.log(this);
    userflash(box);
    useColor=box.getAttribute("id");
    console.log(useColor);
    userSeq.push(useColor);
    console.log(userSeq);
    checkSeq(userSeq.length-1);

}
let allBox=document.querySelectorAll(".box");
for(box of allBox){
    box.addEventListener("click",boxClick);
}
function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}





