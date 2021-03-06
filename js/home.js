let width, height;

let opacity = 0;
let opacityChange = 0.02;

let opacity2 = 0;
let opacityChange2 = 0.02;

let opacity3 = 0;
let opacityChange3 = 0.02;

let opacity4 = 0;
let opacityChange4 = 0.02;

const canvas = document.getElementById('background');
const context = canvas.getContext('2d');
let pxScale = window.devicePixelRatio;
const image = document.getElementById('paper');

const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const air = document.getElementById('air');

const fireIcon = document.getElementById('fire-icon');
const waterIcon = document.getElementById('water-icon');
const earthIcon = document.getElementById('earth-icon');
const airIcon = document.getElementById('air-icon');

const elements = document.querySelector('.elements');




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

		//circle interface
		// context.strokeStyle = 'rgba(194,33,33,1)';
		context.strokeStyle = 'rgba(0,0,0,1)';
		context.lineWidth = 1;
		context.beginPath();
		context.ellipse(canvas.width/4, canvas.height/4, 200, 200,0, 0, 2 * Math.PI, false);
		context.closePath();
		context.stroke();

}

function load(){


	if(opacity < 1){
		opacity += opacityChange;
		water.style.opacity = opacity;
	}

	if(opacity >= 1 && opacity2 < 1){
		opacity2 += opacityChange2;
		earth.style.opacity = opacity2;
	}

	if(opacity2 >= 1 && opacity3 < 1){
	opacity3 += opacityChange3;
	fire.style.opacity = opacity3;
	}

	if(opacity3 >= 1 && opacity4 < 1){
	opacity4 += opacityChange4;
	air.style.opacity = opacity4;
	}

	requestAnimationFrame(load);
}

function waterOn(){
	requestAnimationFrame(waterOn);
	waterIcon.style.transitionDuration = '0.5s';
	waterIcon.style.opacity = '1';
	fire.style.transitionDuration = '0.5s';
	fire.style.opacity = '0.0';
	earth.style.transitionDuration = '0.5s';
	earth.style.opacity = '0.0';
	air.style.transitionDuration = '0.5s';
	air.style.opacity = '0.0';
	
}
function waterOff(){
	requestAnimationFrame(waterOff);
	waterIcon.style.opacity = '0';
	fire.style.opacity = '1';
	earth.style.opacity = '1';
	air.style.opacity = '1';

}

function fireOn(){
	requestAnimationFrame(fireOn);
	fireIcon.style.transitionDuration = '0.5s';
	fireIcon.style.opacity = '1';
	water.style.transitionDuration = '0.5s';
	water.style.opacity = '0.0';
	earth.style.transitionDuration = '0.5s';
	earth.style.opacity = '0.0';
	air.style.transitionDuration = '0.5s';
	air.style.opacity = '0.0';
	
}
function fireOff(){
	requestAnimationFrame(fireOff);
	fireIcon.style.opacity = '0';	
	water.style.opacity = '1';
	earth.style.opacity = '1';
	air.style.opacity = '1';
}

function earthOn(){
	requestAnimationFrame(earthOn);
	earthIcon.style.transitionDuration = '0.5s';
	earthIcon.style.opacity = '1';
	fire.style.transitionDuration = '0.5s';
	fire.style.opacity = '0.0';
	water.style.transitionDuration = '0.5s';
	water.style.opacity = '0.0';
	air.style.transitionDuration = '0.5s';
	air.style.opacity = '0.0';
	
}
function earthOff(){
	requestAnimationFrame(earthOff);
	earthIcon.style.opacity = '0';
	water.style.opacity = '1';
	fire.style.opacity = '1';
	air.style.opacity = '1';	
}

function airOn(){
	requestAnimationFrame(airOn);
	airIcon.style.transitionDuration = '0.5s';
	airIcon.style.opacity = '1';
	fire.style.transitionDuration = '0.5s';
	fire.style.opacity = '0.0';
	water.style.transitionDuration = '0.5s';
	water.style.opacity = '0.0';
	earth.style.transitionDuration = '0.5s';
	earth.style.opacity = '0.0';
	
}
function airOff(){
	requestAnimationFrame(airOff);
	airIcon.style.opacity = '0';	
	water.style.opacity = '1';
	fire.style.opacity = '1';
	earth.style.opacity = '1';

}


function hoverPause(){
	fire.style.animationPlayState = "paused";
	earth.style.animationPlayState = "paused";
	water.style.animationPlayState = "paused";
	air.style.animationPlayState = "paused";
	elements.style.animationPlayState = "paused";
}

function hoverPlay(){
	fire.style.animationPlayState = "running";
	earth.style.animationPlayState = "running";
	water.style.animationPlayState = "running";
	air.style.animationPlayState = "running";
	elements.style.animationPlayState = "running";
}


window.addEventListener('load', setup);
window.addEventListener('resize', setup);
window.requestAnimationFrame(load);

fire.addEventListener('mouseenter', hoverPause);
fire.addEventListener('mouseleave', hoverPlay);
earth.addEventListener('mouseenter', hoverPause);
earth.addEventListener('mouseleave', hoverPlay);
water.addEventListener('mouseenter', hoverPause);
water.addEventListener('mouseleave', hoverPlay);
air.addEventListener('mouseenter', hoverPause);
air.addEventListener('mouseleave', hoverPlay);

water.addEventListener('mouseenter', waterOn);
water.addEventListener('mouseleave', waterOff);

fire.addEventListener('mouseenter', fireOn);
fire.addEventListener('mouseleave', fireOff);

earth.addEventListener('mouseenter', earthOn);
earth.addEventListener('mouseleave', earthOff);

air.addEventListener('mouseenter', airOn);
air.addEventListener('mouseleave', airOff);