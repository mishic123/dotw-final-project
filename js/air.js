const canvas = document.getElementById('background');
const context = canvas.getContext('2d');
let pxScale = window.devicePixelRatio;
const image = document.getElementById('paper');

let width;
let height;



//branch variable
const branches = document.querySelector('.branches');
const branchContainer = document.querySelector('.branches-image');
let rotateBranches = 0;
let rotation = 0.1;


//swing variable
const swing = document.querySelector('.swing');
let swingRotate = 0;
let swingRate = -0.3;

//petal variables
const petal1 = document.querySelector('.petal1');
const petal2 = document.querySelector('.petal2');
const petal3 = document.querySelector('.petal3');


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

function sway(){

    rotateBranches += rotation
    branches.style.transform = 'rotateZ(' + rotateBranches + 'deg)';
    swing.style.transform = 'rotateZ(' + (rotateBranches * -1) + 'deg)';
    if(rotateBranches < -5 || rotateBranches > 10) {
        rotation *= -1;
    }

    requestAnimationFrame(sway);
}

function fly(){
    
}


window.requestAnimationFrame(sway);
// window.requestAnimationFrame(swingAnimation);

window.addEventListener('load', setup);
window.addEventListener('resize', setup);