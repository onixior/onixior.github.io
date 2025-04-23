const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0,0,400,400);

ctx.fillStyle="red";
ctx.fillRect(0,300,400,100);

function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.fillStyle = "brown";
	ctx.fill();
}

function creamcircle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.fillStyle = "blue";
	ctx.fill();
}

function donut(x,y){
	circle(x,y,40);
	creamcircle(x,y,20);
}

donut(100,100);
donut(200,100);
donut(300,100);
donut(100,200);
donut(300,200);
