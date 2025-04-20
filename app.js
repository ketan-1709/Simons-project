let gameseq = [];
let userseq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let highScore = 0;


let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;


        levelup();
    }
});


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
   gameseq.push(randcolor);
   console.log(gameseq);
    gameflash(randBtn);
    
}

function chechAns(idx){
   if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
    }
   }else{
    h2.innerHTML = `Game over! Your score was <b>${level}</b><br>Highest Score: <b>${highScore}</b><br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
   }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    chechAns(userseq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    if (level > highScore) {
        highScore = level;
    }
    started =  false;
    gameseq = [];
    userseq = [];
    level = 0;
}
