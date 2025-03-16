// console.log('home.js loaded');


// ##### Elements #####
const
    timerSeconeds = document.querySelector("#timer-seconds"),
    collectionText = document.querySelector("#collection-play-text"),
    mouseCircle = document.querySelector("#mouse-circle"),
    featuredCollectionText= document.querySelector("#featured-collection-text"); 

// ##### vars #####
const
    mouse = { x: 0, y: 0 },
    circle = { x: 0, y: 0 },
    speed = 0.5;


// ##### Functions  #####
// traking circle element under mouse movement 
function tick() {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  mouseCircle.style.transform = `translate(${circle.x}px, ${circle.y}px)`;
  window.requestAnimationFrame(tick);
}

// count 1 min repeatedly, applied on timerSeconds element 
function timer() {
  var sec = 60;
  var timer = setInterval(function () {
    timerSeconeds.innerHTML = sec--;
    if (sec < 0) sec = 60;
  }, 1000);
}

function linearToCircleText(element , angleInc){
  element.innerHTML = element.innerText.split('').map(
      (char , index) => `<span style="transform:rotate(${index * angleInc}deg)">${char}</span>`
  ).join('');
}

// ##### Events #####
window.addEventListener("mousemove", actionGetMouseCoordinates);

// ##### Actions #####
// update mouse coordinates
function actionGetMouseCoordinates(event) {
  mouse.x = event.x;
  mouse.y = event.y;
}

// ##### Manipulations #####
linearToCircleText(collectionText , 14.5); 
linearToCircleText(featuredCollectionText, 14.5); 

// ##### Invocations #####
tick(); 
timer();
