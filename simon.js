let gameseq=[];
let userseq=[];

let btns=["yellow","red","green","purple"];

let started=false;
let level=0;

let val=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    //console.log("Game started")
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

// increase the level and flash one colour for the user and also level up the heading h2

function levelup(){

    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    // flash random btn again and again make a function

    let ran=Math.floor(Math.random()*3);
    let rancol=btns[ran];
    let ranbtn=document.querySelector(`.${rancol}`);
    gameseq.push(rancol);
    console.log(gameseq);// for hint
    gameflash(ranbtn);

};

function check(ind){
    
    //console.log("current level=",level);
   // let ind=level-1;
    if(userseq[ind]==gameseq[ind]){
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else{
        if(val<level){
            val=level;
        }
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b><br>Highest Score =${val}<br>Press any key to start`
        // after game over start game gain by reset it
        document.querySelector("body").style.color="red";
        setTimeout(function(){
            document.querySelector("body").style.color="red";
        }, 200);
        reset();
    }
}

function btnpress(){
    let btn=this;
    userflash(btn);

    usercol=btn.getAttribute("id");
    userseq.push(usercol);

    check(userseq.length-1);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}
let allbtns=document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}