const canvas = document.getElementById('background');
const context = canvas.getContext('2d');
let pxScale = window.devicePixelRatio;
const image = document.getElementById('paper');


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

window.addEventListener('load', setup);
window.addEventListener('resize', setup);