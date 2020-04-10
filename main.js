var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
context.lineCap = 'round';
context.lineJoin = 'round';
context.strokeStyle = 'green';
context.lineWidth = 1;

var clearCanvas = function () {
    context
        .clearRect(0, 0, this.canvas.width, this.canvas.height);

};

var line = function(x1, y1, x2, y2, colour){
    context.strokeStyle = colour;
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

var redrawLouis = function() {
    line(200, 0, 200, 490,'yellow')    
    line(0, 200, 100, 200,'red')
}
 
clearCanvas()
redrawLouis()

line(0, 5000, 300, 300,'green')
line(300, 200, 4000, 300,'purple')