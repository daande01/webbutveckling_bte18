

var antalflingor=1000;
var particles=[];
var W=window.innerWidth;
var H=window.innerHeight;

for(var i =0; i<antalflingor; i++){

particles.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*4+1,d:Math.random()*antalflingor});

}



var g =2;

  var canvas = document.getElementById("canvas"); // skapar koppling till canvas
  var ctx= canvas.getContext("2d"); // ritar 2d


  //console.log(H);
  canvas.width= W;
  canvas.height=H;

function draw(){
    update();
    console.log("nu körs draw");
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle="rgba(255,255,255,0.8)"; // sätter vit färg på pennan
    ctx.beginPath(); // börjar rita
for(var i =0; i<antalflingor;i++){

  var p = particles[i];

  ctx.moveTo(p.x,p.y);
  ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI,true); // x,y ,r,startpunkt

}



    ctx.fill();
}

var angle=0;
function update(){  // ansvarar för att flytta x och y och kolla om jag har träffat kant

 angle +=0.01;


  for(var i = 0; i<antalflingor;i++){
      var p = particles[i];

      p.y=p.y+1;
      
      p.y=p.y+Math.cos(angle+p.d)+1+p.r/2;

      if (p.y> H){
          p.y=0;

      }

  }




}
setInterval(draw,20);
