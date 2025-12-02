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
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    let randNum=Math.floor(Math.random()*3);
    let randColor=boxColors[randNum];
    let randBtn=document.querySelector(`.${randColor}`);
    console.log(randNum);
    console.log(randColor);
    console.log(randBtn);
    btnflash(randBtn);

}

