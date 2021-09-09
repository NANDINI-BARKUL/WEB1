/*var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var particleOnScreen = 245;
var particleArray =[];
var w,h;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;

function random(min,max)
{
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight; 
};

function clientResize(ev)
{
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;  
}

window.addEventListener("resize", clientResize);

function createSnowFlakes()
{
    for(var i=0; i<particleOnScreen; i++)
    {
        particlesArray.push(
            {
                x: Math.random() * w,
                y: Math.random() * h,
                opacity: Math.random(),
                speedX: random(-11, 11),
                speedY: random(7, 15),
                radius: random(8.5,4.2),
            }
        )
    }
};
 function drawSnowFlakes(){
     for (var i=0; i<particlesArray.length; i++)
     {
         var gradient =ctx.createRadialGradient
         {
            particlesArray[i].x,
            particlesArray[i].y,
            0,
             particlesArray[i].x,
             particlesArray[i].y,
             particlesArray[i].radius
         };
         gradient.addColorStop(0, "rgba(255, 255, 255,"+ particleArray[i].opacity+")");
         gradient.addColorStop(0, "rgba(210, 236, 242,"+ particleArray[i].opacity+")");
         gradient.addColorStop(0, "rgba(237, 247, 249,"+ particleArray[i].opacity+")");

         ctx.beginPath();
         ctx.arc(
            particlesArray[i].x,
            particlesArray[i].y,
            particlesArray[i].radius,
            0,
            Math.PI+2,
            false
         );
         
         ctx.fillStyle = gradient;
         ctx.fill();

        
     }
 };

 function moveSnowFlakes()
 {
     for(var i=0; i<particlesArray.length; i++)
     {
         
        particlesArray[i].x += particlesArray[i].speedX;
        particlesArray[i].y += particlesArray[i].speedY;

        if(particlesArray[i].y > h)
        {
        particlesArray[i].x = Math.random()*w*1.5;
        particlesArray[i].y = -50;
        }
     }
 };

function updateSnowFall ()
{
    ctx.clearRect(0,0,w,h);
    drawSnowFlakes();
    moveSnowFlakes();
} ;

setInterval(updateSnowFall,50);
createSnowFlakes();*/

var words = ['Hi i like HTML', 'I also like css', 'I am a student', 'Learning web development'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});