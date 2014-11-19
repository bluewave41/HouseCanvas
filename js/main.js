var canvas;
var ctx;

var drawMainBox = function() {
    canvas = document.getElementById("theCanvas");
    ctx = canvas.getContext("2d"); 
    
    var x = canvas.width / 4 - 10;
    var y = 145;
    
    var width = 125;
    var height = 100;
    
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, width, height);
}

var drawSideWall = function() {
    canvas = document.getElementById("theCanvas");
    ctx = canvas.getContext("2d");
    
    var x = 190;
    var y = 145;
    
    var width =  50;
    var height = 100;
    
    ctx.save();
    
    ctx.fillStyle = "red";
    ctx.transform(1, -0.5, 0, 1, 0, 95.5) //magic shit
    ctx.fillRect(x, y, width, height);
    
    ctx.restore();
    
}

var drawRoof = function () {
    canvas = document.getElementById("theCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(65, 145);
    ctx.lineTo(156, 73);
    ctx.lineTo(190, 145);
    ctx.fill();
}

var drawSideRoof = function() {
    canvas = document.getElementById("theCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(188, 146.5);
    ctx.lineTo(156, 73);
    ctx.lineTo(242, 120);
    ctx.fill();
}

var drawFloor = function () {
    canvas = document.getElementById("theCanvas");
    ctx = canvas.getContext("2d");
    
    var x = canvas.width / 2;
    var y = 475;
    var radius = 100;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    
    ctx.save();
    ctx.scale(1, 0.5);
    
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
    
    ctx.restore();
}

var printMousePos = function(e) {
    var mouseX = e.clientX - 7;
    var mouseY = e.clientY - 79;
    console.log("X: " + mouseX + "Y: " + mouseY);
}

var start = function () {
    canvas = document.getElementById("theCanvas");
    ctx = canvas.getContext("2d");
    
    drawFloor();
    drawMainBox();
    drawSideWall();
    drawRoof();
    drawSideRoof();
    
    document.addEventListener("click", printMousePos);
}