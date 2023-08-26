var timer = 60;
var hitrn = 0;
var score = 0;



function makeBubble() {
    var clutter = "";
    for (var b = 1; b <= 200; b++) {
        var hitrn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${hitrn}</div>`;
    }
    document.querySelector('.pbottom').innerHTML = clutter;
}

function runTimer() {
    var clint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerValue').textContent = timer;
        } else {
            clearInterval(clint);
            document.querySelector('.pbottom').innerHTML = `<div style="filter: drop-shadow(1px 1px 1px black); color: white ; text-align: center;"><h1>Time Over </h1> <h1>Your score is ${score}</h1></div>`


        }
    }, 1000);
}



document.querySelector('.pbottom')
.addEventListener('click', (det) => {

  var clickednum =  parseInt(det.target.textContent) 

if(clickednum === hitrn){

    increaseScore()
    makeBubble()
    getNewHit();   
}else{
    
    document.querySelector('.pbottom').innerHTML = `<h1 style="filter: drop-shadow(1px 1px 1px black); color: white ; text-align: center;">Wrong</h1>`
    setTimeout(() => {
      getNewHit();   
      makeBubble()
  }, 2000);
}

})



function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitValue').textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector('#score').textContent = score; // Update score display
}





runTimer();     // Start the timer
makeBubble();   // Generate bubbles