var nroFilas    = document.getElementById ("nrofilas_id");
var nroColumnas = document.getElementById ("nrocolumna_id");
var buttonPush  = document.getElementById ("inputButton");
buttonPush.addEventListener("click", DrawByClick);

var areaDibujo = document.getElementById("dibujoid");
var lienzo = areaDibujo.getContext("2d");

var colorLinea="red";
var colorLineb="blue";

// Función para dibujar una línea
function DibujaLinea ( xIni, yIni, xFinal, yFinal, colorLine)  {
lienzo.beginPath();
lienzo.strokeStyle= colorLine;
lienzo.moveTo(xIni,yIni);
lienzo.lineTo(xFinal,yFinal);
lienzo.stroke();
lienzo.closePath();
}

// función para cuando se presiona el botón.
function DrawByClick(){

// Limpiamos el canvas de cualquier imagen anterior antes de hacer una nueva
lienzo.clearRect(0, 0, areaDibujo.width, areaDibujo.height);

// dibujo lineas horizontales
    var xIni=0;         
    var yIni=0;
    var xFinal=300;
    var yFinal=0;  
    var x = (parseInt(nroFilas.value));
    for (lineInicial=0; lineInicial<=x; lineInicial++) { 
        DibujaLinea(xIni, yIni, xFinal, yFinal, colorLinea);
        yIni+=300/x;
        yFinal+=300/x;
    }

// dibujo lineas verticales
    var xIni=0;         
    var yIni=0;
    var xFinal=0;
    var yFinal=300;     
    var y = parseInt(nroColumnas.value);
    for (lineInicial=0; lineInicial<=y; lineInicial++) { 
    DibujaLinea(xIni, yIni, xFinal, yFinal, colorLineb);
    xIni+=300/y;
    xFinal+=300/y;
}
// Se limpian variables iniciales (ejes x , y)
var xIni=0;         
var yIni=0;
var xFinal=300;
var yFinal=0; 

}
