class DrawingApp {
    private context: CanvasRenderingContext2D;

    private clickX: number[] = [200,210];
    private clickY: number[] = [200,200];
    private clickDrag: boolean[] = [false, true];

    constructor() {
        let canvas = document.getElementById('canvas') as
                     HTMLCanvasElement;
        let context = canvas.getContext("2d");
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 1;

        this.context = context;

        this.redraw();
    }


    private redraw() {
        let clickX = this.clickX;
        let context = this.context;
        let clickDrag = this.clickDrag;
        let clickY = this.clickY;
        for (let i = 0; i < clickX.length; ++i) {
            context.beginPath();
            if (clickDrag[i] && i) {
                context.moveTo(clickX[i - 1], clickY[i - 1]);
            } else {
                context.moveTo(clickX[i] - 1, clickY[i]);
            }

            context.lineTo(clickX[i], clickY[i]);
            context.stroke();
        }
        context.closePath();
    }

}

new DrawingApp();