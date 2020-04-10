

var canvas = document.getElementById('canvas');
var clickX = [0, 450, 200, 50];
var clickY = [0, 200, 450, 50];
var clickDrag = [false, true,false,true];
var context = canvas.getContext("2d");
context.lineCap = 'round';
context.lineJoin = 'round';
context.strokeStyle = 'red';
context.lineWidth = 1;

var redraw = function () {
    for (var i = 0; i < clickX.length; ++i) {
        context.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i - 1], clickY[i - 1]);
        }
        else {
            context.moveTo(clickX[i] - 1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.stroke();
    }
    context.closePath();
};
var clearCanvas = function () {
    context
        .clearRect(0, 0, this.canvas.width, this.canvas.height);

};


var plus = function(a , b) {
    return a + b
}

var redrawLouis = function() {
    //context.beginPath();
    context.moveTo(200,200);
    context.lineTo(300,300);
    context.stroke();

    context.moveTo(0,200);
    context.lineTo(100,300);
    context.stroke();
 
    //context.closePath();
}

clearCanvas()
redrawLouis()