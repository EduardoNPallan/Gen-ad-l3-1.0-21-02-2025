// Función para cambiar el color del texto
function cambiarColor() {
    var colors = ['red', 'green', 'blue'];
    document.getElementById("change").style.color = colors[Math.floor(Math.random() * colors.length)];
}
