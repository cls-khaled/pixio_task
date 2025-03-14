// console.log('home.js loaded');

const 
    timerSeconeds= document.querySelector('#timer-seconds') ,
    mouseCircle = document.querySelector('#mouse-circle') ,
    mouse = {x: 0, y:0},
    circle = {x:0, y:0},
    speed = 0.5; 

// ##### Events ##### 
window.addEventListener('mousemove', actionGetMouseCoordinates) ;
// ##### -END- Events ##### 

// ##### Actions ##### 
function actionGetMouseCoordinates(event){
   mouse.x = event.x;
   mouse.y = event.y;
}
// ##### -END- Actions ##### 

// ##### Functions  ##### 
function tick () {
    circle.x += (mouse.x - circle.x) * speed; 
    circle.y += (mouse.y - circle.y) * speed; 
    mouseCircle.style.transform= `translate(${circle.x}px, ${circle.y}px)`
    window.requestAnimationFrame(tick); 
}; 

function timer(){
    var sec = 60;
    var timer = setInterval(function(){
        timerSeconeds.innerHTML=sec--;
        if (sec < 0) sec=60; 
    }, 1000);
}
// ##### -END- Functions ##### 


// ##### Invocations ##### 
tick(); 
timer(); 
// ##### -END- Invocations ##### 
