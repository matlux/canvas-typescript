var DrawingApp = /** @class */ (function () {
    function DrawingApp() {
        this.clickX = [0, 450, 200, 50];
        this.clickY = [0, 200, 450, 50];
        this.clickDrag = [false, true,false,true];
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext("2d");
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = 'red';
        context.lineWidth = 1;
        this.context = context;
        this.redraw();
    }
    DrawingApp.prototype.redraw = function () {
        var clickX = this.clickX;
        var context = this.context;
        var clickDrag = this.clickDrag;
        var clickY = this.clickY;
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
    return DrawingApp;
}());
new DrawingApp();