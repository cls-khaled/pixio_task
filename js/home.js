console.log('home.js loaded');

const mouseCircle = document.querySelector('#mouse-circle') ; 

const mouse = {x: 0, y:0},
    circle = {x:0, y:0};

window.addEventListener('mousemove', event => {
   mouse.x = event.x;
   mouse.y = event.y;
}); 

const speed = 0.5; 
const tick = () => {
    circle.x += (mouse.x - circle.x) * speed; 
    circle.y += (mouse.y - circle.y) * speed; 
    mouseCircle.style.transform= `translate(${circle.x}px, ${circle.y}px)`
    window.requestAnimationFrame(tick); 
}

tick(); 
