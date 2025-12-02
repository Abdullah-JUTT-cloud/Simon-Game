let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
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
    level++;
    h2.innerText=`Level ${level}`;
    let randNum=Math.floor(Math.random()*3);
    let randColor=boxColors[randNum];
    let randBox=document.querySelector(`.${randColor}`);
    console.log(randNum);
    console.log(randColor);
    console.log(randBox);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBox);
    

}
function boxClick(){
    let box=this;
    console.log(this);
    userflash(box);

}
let allBox=document.querySelectorAll(".box");
for(box of allBox){
    box.addEventListener("click",boxClick);
}




