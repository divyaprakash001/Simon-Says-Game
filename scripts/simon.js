let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (event) {
    if (started == false) {
        console.log("game is started");
        started = true;



        levelUp()
    }
})


function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(() => {
        btn.classList.remove("userflash")
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor)
    console.log(gameSeq);
    gameFlash(randBtn)

}


function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx]){
        // console.log('same value');
        if(userSeq.length==gameSeq.length){
            setTimeout(() => {
                levelUp()
            }, 1000);
        }
    }else{
        h2.innerText = `Game Over! Press any key to start`;
        reset()
    }

}


function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor)
    console.log(userSeq);

    checkAns(userSeq.length-1)
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}