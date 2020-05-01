const canvas = document.getElementById('background');
const context = canvas.getContext('2d');
let pxScale = window.devicePixelRatio;
const image = document.getElementById('paper');

let rate = 0.1;
let newRate = 0;

//big wave variables
let scale = 0.3;
let scaleChange = 0.005;
let scale2 = 1;
let scaleChange2 = -0.005;

const rightWave = document.querySelector('.waveR-image');
const leftWave = document.querySelector('.waveL-image');

//person variables
const person = document.querySelector('.person-image');
let yPos = 0;
let yChange = 1;

//wave variables
const wave1 = document.querySelector('.image1');
const wave2 = document.querySelector('.image2');
const wave3 = document.querySelector('.image3');
const wave4 = document.querySelector('.image4');
const wave5 = document.querySelector('.image5');
const wave6 = document.querySelector('.image6');
const wave7 = document.querySelector('.image7');
const wave8 = document.querySelector('.image8');
const wave9 = document.querySelector('.image9');
const wave10 = document.querySelector('.image10');
const wave11 = document.querySelector('.image11');
const wave12 = document.querySelector('.image12');

function shift(){
    newRate += rate;


wave1.style.transform = 'translateX(' + newRate + '%)';
  wave3.style.transform = 'translateX(' + (newRate * -1) + '%)';
  wave6.style.transform = 'translateX(' + (newRate * -1) + '%)';
  wave8.style.transform = 'translateX(' + newRate + '%)';
  wave9.style.transform = 'translateX(' + (newRate * -1) + '%)';
  wave12.style.transform = 'translateX(' + (newRate * -1) + '%)';
wave11.style.transform = 'translateX(' + newRate + '%)';

  if (newRate > 5 || newRate < 0){
    rate *= -1;
  }
requestAnimationFrame(shift);
}

//right wave animation
function crash(){
  scale += scaleChange; 
  scale2 += scaleChange2; 
  leftWave.style.transform = 'scale(' + scale + ')';
  rightWave.style.transform = 'scale(' + scale2 + ')';

if(scale > 1 || scale <= 0.3){
    scaleChange *= -1;
    scaleChange2 *= -1;
  }

requestAnimationFrame(crash);

}

function float(){
    yPos += yChange; 
    person.style.transform = 'translateY(' + yPos + 'px)';

if(yPos > 70 || yPos <= 0){
    yChange *= -1;
  }

requestAnimationFrame(float);

}



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


window.requestAnimationFrame(shift);
window.requestAnimationFrame(crash);
window.requestAnimationFrame(float);

window.addEventListener('load', setup);
window.addEventListener('resize', setup);