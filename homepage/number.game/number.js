const canvas = document.getElementById("mycanvas");

const ctx = canvas.getContext("2d");

//main background where the game will be.    
ctx.fillStyle = "PowderBlue";
ctx.fillRect(0,0, 700, 700);

//side bar where lives left will be calculated. 
ctx.fillStyle="CadetBlue";
ctx.fillRect(700, 0, 900, 700);

//bottom bar where points and options to input number will be. 
ctx.fillStyle="Blue";
ctx.fillRect=(0, 700, 900, 900);

//making bottom right circle. 
ctx.beginPath();
ctx.arc(800, 800, 250, 0, 2 * Math.PI);
ctx.fillStyle = "DarkSlateGray"
ctx.fill(); 
ctx.stroke();

//title of game on the top-left
ctx.font = "50px Arial";
ctx.fillText("New Numbers", 10, 50);


