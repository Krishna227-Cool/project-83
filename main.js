var mouseEvent = "empty";
var lastposofx, lastposofy;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "Black";
widthoflien = 1;
canvas.addEventListener("mousedown", mymousedown );
function mymousedown(e) {
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    currentposofmousex = e.clientX-canvas.offsetLeft;   
    currentposofmousey = e.clientY-canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth = widthoflien;
        console.log("Last position of x and y are");
        console.log(lastposofx, lastposofy);
        ctx.moveTo(lastposofx, lastposofy);
        console.log("Current Position");
        console.log(currentposofmousex, currentposofmousey);
        ctx.lineTo(currentposofmousex, currentposofmousey);
        ctx.stroke();
    }
    lastposofx = currentposofmousex;
    lastposofy = currentposofmousey;
} 
canvas.addEventListener("mouseup", myMouseUp());
function myMouseUp(e) {
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", myMouseLeave()) ;
function myMouseLeave(e) {
    mouseEvent="mouseleave";
}
function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.hieght);
}
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;