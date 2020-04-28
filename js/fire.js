//cloud variables
const backClouds = document.querySelector('.image1');
const frontClouds = document.querySelector('.image2');

const canvas = document.getElementById('background');
const context = canvas.getContext('2d');
let pxScale = window.devicePixelRatio;
const image = document.getElementById('paper');

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
const person = document.querySelector('img.person');
let rotation = 0;
let rotationRate = 0.5;

 function setup() {
        // full browser canvas

        width = window.innerWidth;
        height = window.innerHeight;

        // set the CSS display size
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        canvas.width = width * pxScale;
        canvas.height = height * pxScale;

        // normalize the coordinate system
        context.scale(pxScale, pxScale);

        draw();
      }

function draw(){

    //background
    context.drawImage(image, 0, 0, width, height);
      }

//cloud animation
function floatingClouds(){
  newRate += rate;
  backClouds.style.transform = 'translateX(' + newRate + '%)';
  frontClouds.style.transform = 'translateX(' + (newRate * -1) + '%)';

  if (newRate > 50 || newRate < -5){
    rate *= -1;
  }
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

requestAnimationFrame(swing);
}


window.requestAnimationFrame(floatingClouds);
window.requestAnimationFrame(fireBreathing);
window.requestAnimationFrame(enter);
window.requestAnimationFrame(swing);

window.addEventListener('load', setup);
// window.requestAnimationFrame(fly);
// window.addEventListener('load', setup);
// window.addEventListener('resize', setup);


