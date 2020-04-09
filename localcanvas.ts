var Canvas = require('canvas');
var image = Canvas.Image;
var canvas = new Canvas(800, 800);
var context = canvas.getContext('2d');
var r = Math.floor((Math.random() * 256));
var g = Math.floor((Math.random() * 256));
var b = Math.floor((Math.random() * 256));
var color = "rgb("+r+","+g+","+b+")";


// draw box
context.beginPath();
context.moveTo(0, 0);
context.lineTo(0, 800);
context.lineTo(800, 800);
context.lineTo(800, 0);
context.closePath();
context.lineWidth = 5;
context.fillStyle = color;
context.fill();

// save canvas image as data url (png format by default)
var dataURL = canvas.toDataURL();

// set canvasImg image src to dataURL
// so it can be saved as an image
document.getElementById('canvasImg').setAttribute( 'src', dataURL );

// .src = ;