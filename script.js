// Get all particles
const particles = document.querySelectorAll('.p');
const no_btn = document.querySelector('#move');
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;



particles.forEach(p => {
  // random direction and distance
 let x = (Math.random() - 0.5) * 700 + 'px';
  let y = (Math.random() - 0.5) * 700 + 'px';
  const delay = Math.random() * 1 + 's';
  const duration = 1 + Math.random() * 2 + 's';

  // set CSS variables
  p.style.setProperty('--x', x);
  p.style.setProperty('--y', y);
  p.style.animationDelay = delay;
  p.style.animationDuration = duration;
});
let prex = 0;
let prey = 0;
function random_x() {
    let num;
    do{
       num = Math.floor(Math.random() * 300) - 200;
    }
    while(num < 60 && num >-90 || Math.abs(num - prex) < 50);//30 to-50
    prex = num;
    return num;
}
function random_y() {
    let num;
    do{
        num = Math.floor(Math.random() * 340) - 180;
    }
    while(num < 90 && num >-90 || Math.abs(num - prex) < 50);//10 to -60
    prey = num;
    return num;
}
no_btn.addEventListener(isTouchDevice ? "click" : "mouseenter",()=>{
    no_btn.style.transform = `translate(${random_x()}px,${random_y()}px)`
})
