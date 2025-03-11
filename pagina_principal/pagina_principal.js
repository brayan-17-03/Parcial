window.onload = function() {
    mostrarSeccion('inicio');
}
function cambiarContenido() {
    document.getElementById("mensaje").innerHTML = "HOLA MUNDO!";
}

function cambiarColor() {
    document.body.style.backgroundColor = "#d66";
    document.getElementById("mensaje").style.color = "#8fe";

}
