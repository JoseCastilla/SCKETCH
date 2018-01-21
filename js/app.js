var canvas = document.getElementById('drawn_area');
var ctx = canvas.getContext("2d");

/* Elegimos el color para trabajar
 * extraerémos la información de los 
 * botones
 */
var colorDrawn;
var width = 1;

 function selectColor (color) {
 	colorDrawn = color.id;
 }

var mouseStatus = false;
var actualPos;

canvas.addEventListener("mousedown", changeStatus);
canvas.addEventListener("mousemove", drawnLine);
canvas.addEventListener("mouseup", changeStatus);

function changeStatus () {
	mouseStatus = !mouseStatus;
	actualPos = getMouseCoor(event);
}

/* Creamos la función dibujarLinea
 * que recibe como parametros el color
 * punto inicial y punto final del dibujo
 * incluyendo el objeto canvas en contexto 2d
 */

function drawnLine () {
	if (mouseStatus) {
		var newPos = getMouseCoor(event);
		ctx.beginPath();
		ctx.moveTo(actualPos.x, actualPos.y);
		ctx.lineWidth = width;
		ctx.strokeStyle = colorDrawn;
		ctx.lineTo(newPos.x,newPos.y);
		ctx.stroke();
		ctx.closePath();

		actualPos = {
			x : newPos.x,
			y : newPos.y
		}
	}
}

function getMouseCoor (event) {
	return {
		x: event.offsetX,
		y: event.offsetY
	}
}
