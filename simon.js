let gameSeq = [];
let userSeq = [];
let colors = ["red","blue","green","yellow"]
let level = 0;
let started = false;



let h2 = document.querySelector("h2")

function flash(randomBtnElement)
{
    console.log(randomBtnElement);
    randomBtnElement.classList.add("flash");
    setTimeout(()=>{
        randomBtnElement.classList.remove("flash");
    },250)
    
}

function Userflash(randomBtnElement)
{
    console.log(randomBtnElement);
    randomBtnElement.classList.add("userFlash");
    setTimeout(()=>{
        randomBtnElement.classList.remove("userFlash");
    },250)
    
}

function matching(inx){
  
    if(gameSeq[inx]===userSeq[inx])
    {
        if(gameSeq.length === userSeq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else
    {
       h2.innerHTML = `Game Over! Your score is <b>${level-1}</b> <br>Press any key to Restart the Game...`;
       document.querySelector("body").style.backgroundColor = "brown";
       setTimeout(function (){
        document.querySelector("body").style.backgroundColor = "white";
       },150)
       restart();
    }
}

function levelup()
{
    userSeq = [];
    level++;
    h2.innerHTML = `Level ${level}`
    let randomInx = Math.floor(Math.random()*4);
    let randomColor = colors[randomInx];
    gameSeq.push(randomColor);
    console.log("game sequence = "+ gameSeq);
    let randomBtn = document.querySelector(`.${randomColor}`);
    flash(randomBtn);
}
function btnPressed()
{
    let pressedBtn = this;
    let userColor = pressedBtn.getAttribute("id")
    userSeq.push(userColor)
    console.log("user sequence = "+userSeq);
    Userflash(pressedBtn);
    matching(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btns of allBtns)
{
    btns.addEventListener("click",btnPressed);
}

document.addEventListener("keypress",()=>{
    if(started == false)
    {
        h2.innerText = `Level ${level}`;
         started = true;
    }
    levelup()
})

function restart()
{
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}