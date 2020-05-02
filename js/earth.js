//canvas background
const canvas = document.getElementById('background');
const context = canvas.getContext('2d');
let pxScale = window.devicePixelRatio;
const image = document.getElementById('paper');

const mountainR = document.querySelector('.mountain-right');
const mountainL = document.querySelector('.mountain-left');

const mountainRinner = document.querySelector('.mountainR');
const mountainLinner = document.querySelector('.mountainL');

const leftRocks = document.querySelector('.leftRock');
const fallingRock = document.querySelector('.fallingRock');
const fallingRock2 = document.querySelector('.fallingRock2');

const person = document.querySelector('.person');
const personContainer = document.querySelector('.person-image');





let width;
 let height;

let yPos = 0;
let yChange = 0.15;

let yPos2 = 0;
let yChange2 = 0.15;

let xPos = 0;
let xChange = 0.05;





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
 function shake(){
 	yPos += yChange;

 	mountainRinner.style.transform = 'translateY(' + yPos + '%)';
 	mountainLinner.style.transform = 'translateY(' + (yPos * -1) + '%)';
 	leftRocks.style.transform = 'translateY(' + yPos + '%)';
 	fallingRock.style.transform = 'translateY(' + (yPos * -1) + '%)';
 	fallingRock2.style.transform = 'translateY(' + yPos + '%)';
 	personContainer.style.transform = 'translateX(' + yPos + '%)'; //only one shaking on x axis


 	if (yPos > 0.2 || yPos < 0){
    yChange *= -1;
  }
  requestAnimationFrame(shake);
 }

  function shift(){
 	xPos += xChange;

 	mountainR.style.transform = 'translateX(' + xPos + '%)';
 	mountainL.style.transform = 'translateX(' + (xPos * -1) + '%)';

 	if (xPos > 10 || xPos < 0){
    xChange *= -1;
  }
  requestAnimationFrame(shift);
 }

window.requestAnimationFrame(shake);
// window.requestAnimationFrame(push);
window.requestAnimationFrame(shift);
window.addEventListener('load', setup);
window.addEventListener('resize', setup);