let blue = document.getElementById('blue');
let race = document.getElementById('race');
let scoreBoard = document.getElementById('scoreBoard');
let score = document.getElementById('score');
let s = 0;
let gameOver = document.getElementById('gameOver');
let jumpAudio = document.getElementById('jumpAudio');

// race car movement
document.addEventListener('keydown', (e)=> {  
    console.log(e.key)  ;
    if(e.key=="ArrowUp"){
        rt = parseInt(window.getComputedStyle(race).getPropertyValue('top'));
        if(rt>-100){
            race.style.top = `${rt-100}px`;
            jumpAudio.play();
        }
    }
    if(e.key=="ArrowDown"){
        rd = parseInt(window.getComputedStyle(race).getPropertyValue('top'));
        if(rd<400){
            race.style.top = `${rd+100}px`;
            jumpAudio.play();
        }
    }
    if(e.key=="ArrowRight"){
        rr = parseInt(window.getComputedStyle(race).getPropertyValue('left'));
        if(rr<700){
            race.style.left = `${rr+190}px`;
            jumpAudio.play();
        }
    }
    if(e.key=="ArrowLeft"){
        rl = parseInt(window.getComputedStyle(race).getPropertyValue('left'));
        if(rl>300){
            race.style.left = `${rl-190}px`;
            jumpAudio.play();
        }
    }
});

// blue car random Animation
blue.addEventListener('animationiteration',()=>{
    let l = ((Math.floor(Math.random() *4)) * 180)
    blue.style.left = `${300+l}px`;
    s += 1;
    score.innerText = `Your Score: ${s}`;
});

// game over code here
setInterval(()=>{
    rt = parseInt(window.getComputedStyle(race).getPropertyValue('top'));
    rl = parseInt(window.getComputedStyle(race).getPropertyValue('left'));
    bt = parseInt(window.getComputedStyle(blue).getPropertyValue('top'));
    bl = parseInt(window.getComputedStyle(blue).getPropertyValue('left'));
    let diffX = Math.abs(rt-bt);
    let diffY = Math.abs(rl-bl);
    if(diffX<30 && diffY<50){
        race.style.top = "3px"
        scoreBoard.style.display = "block";
        blue.classList.remove('blueCarMove');
        gameOver.style.display = "block";
        gameOver.style.top = "-250px";
        score.innerText = `Your Score: ${s-1}`;
    }   
},10)

setTimeout(()=>{
    aniDur = parseFloat(window.getComputedStyle(blue).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.1;
    blue.style.animationDuration = `${newDur}s`;
},1000);