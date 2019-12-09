


var x =100;
var y =100;
var yv=1;

var canvas = document.getElementById("canvas"); // skapar koppling till canvas
var ctx= canvas.getContext("2d"); // ritar 2d
var W=window.innerWidth;
var H=window.innerHeight;

//console.log(H);
canvas.width= W;
canvas.height=H;

function draw(){
  update();
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle="rgba(255,255,255,0.8)"; // sätter vit färg på pennan
  ctx.beginPath(); // börjar rita
  ctx.moveTo(x,y);
  ctx.arc(x, y, 40, 0, 2 * Math.PI,true); // x,y ,r,startpunkt
  ctx.fill();

}

var g=5;

function update(){

  if(y>H-40){
console.log(y);
    yv=-yv;
    y =y-5;
  }

yv=yv+g;
  y=y+yv;

 console.log(yv);

  //console.log(yv);
  //y+=yv;

}


setInterval(draw,20);
