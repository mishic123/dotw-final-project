//cloud variables
const backClouds = document.querySelector('.image1');
const frontClouds = document.querySelector('.image2');

let rate = 0.1;
let newRate = 0;

//fire variables
const fire = document.querySelector('img.fire');
let opacity = 0;
let opacityChange = 0.005;

let scale = 1;
let scaleChange = 0.005;

//dragon  body variables
const dragon = document.querySelector('.dragon-body');
console.log(dragon);
let yPos = window.innerHeight;
let yChange = -3;
let yChange2 = 2;
let yPos2 = -300;

//person variables
const person = document.querySelector('.person');
let rotation = 0;
let rotationRate = 0.5;

//cloud animation
function floatingClouds(){
  newRate += rate;
  backClouds.style.transform = 'translateX(' + newRate + '%)';
  frontClouds.style.transform = 'translateX(' + (newRate * -1) + '%)';

  if (newRate > 50 || newRate < -5){
    rate *= -1;
  }
cancelAnimationFrame(floatingClouds); 
requestAnimationFrame(floatingClouds);
}


//fire animation
function fireBreathing(){
  opacity += opacityChange;
  fire.style.opacity = opacity;

  if(opacity > 1 || opacity < 0){
    opacityChange *= -1;
  }

  scale += scaleChange; 
  fire.style.transform = 'scale(' + scale + ')';

if(scale > 1.5 || scale < 1){
    scaleChange *= -1;
  }

cancelAnimationFrame(fireBreathing); 
requestAnimationFrame(fireBreathing);

}

//initial fly
function enter(){
if(yPos > -300){
  yPos += yChange;
  dragon.style.top = yPos + 'px';
}
  
  if(yPos <= -300){
    yPos = -300;
    yPos2 += yChange2;
    dragon.style.top = yPos2 + 'px';
  }
  if(yPos2 > 0|| yPos2 < -300){
   yChange2 *= -1;
  }


cancelAnimationFrame(enter); 
requestAnimationFrame(enter);
}


//person animation
function swing(){
person.style.transformOrigin = "0 0";
rotation += rotationRate;
  person.style.transform = 'rotateZ(' + rotation + 'deg)';

  if(rotation > 25 || rotation < -10){
    rotationRate *= -1;
  }

  cancelAnimationFrame(swing); 
requestAnimationFrame(swing);
}





window.requestAnimationFrame(floatingClouds);
window.requestAnimationFrame(fireBreathing);
window.requestAnimationFrame(enter);
window.requestAnimationFrame(swing);
// window.requestAnimationFrame(fly);
// window.addEventListener('load', setup);
// window.addEventListener('resize', setup);


