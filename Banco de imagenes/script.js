const cruzEmergente = document.querySelector(".cruz-ventana-emergente"); // Cruz que cierra la ventana emergente
const ventanaEmergente = document.querySelector(".ventana-emergente-container"); // Ventana emergente
const containerImagenes = document.querySelectorAll(".img-container"); // el contenedor que tiene a cada imagen
const imagenes = document.querySelectorAll(".img-container #imagen"); // las imagenes del contenedor anterior
const imagenVentanaEmergente = document.querySelector(".ventana-emergente_imagen-container img") // img de la ventana emergente


// abre la ventana emergente cuando apretas una imagen
function abrirVentanaEmergente() {
    containerImagenes.forEach(function (imagen) {
        imagen.addEventListener('click', function() {
            ventanaEmergente.style.display = 'flex';
        });
    });
}
abrirVentanaEmergente()

// Cierra la ventana emergente cuando apretas la cruz
function cerrarVentanaEmergente() {
    cruzEmergente.addEventListener('click', ()=>{
        ventanaEmergente.style.display = "none";
    })
}
cerrarVentanaEmergente()



// pone la altura y el largo de cada imagen
imagenes.forEach(imagen => {
    imagen.nextElementSibling.textContent = `${imagen.naturalHeight} X ${imagen.naturalWidth}`
})
  
// pponer la imagen en la ventana emergente
imagenes.forEach(function(imagen) {
    imagen.addEventListener('click', function() {
      let srcClicado = this.src;
      imagenVentanaEmergente.setAttribute("src", srcClicado)
    });
  });