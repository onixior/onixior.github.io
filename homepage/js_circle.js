const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");


ctx.fillStyle="red";
ctx.beginPath();
ctx.arc(100,300,25,0,2*Math.PI);
ctx.fill();


function circle(x,y){
ctx.fillStyle="red";
ctx.beginPath();
ctx.arc(x,y,25,0,2*Math.PI);
ctx.fill();
}

circle(100,200);
circle(500,300);
circle(100,100);
circle(200,200);
circle(600,600);

