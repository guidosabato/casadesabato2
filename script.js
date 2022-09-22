//  seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});

let imagenes = document.querySelectorAll('img:not(.contenedor-cabecera img)') // Agarrar todas las imagenes con el tag img
console.log(imagenes); // Mostrar por consola 



imagenes.forEach((imagen) => { // Imagenes para cada imagen, dar atributo loading valor lazy 
  console.log(imagen);
  imagen.setAttribute("loading", "lazy")
})