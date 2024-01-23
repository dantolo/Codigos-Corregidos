// Obtener el formulario y asignar una función al evento submit
var formulario = document.querySelector(".formulario");
formulario.onsubmit = function(e) {
  // Prevenir la recarga de la página al enviar el formulario
  e.preventDefault();

  // Obtener elementos del formulario
  var nombreElemento = formulario.elements[0];
  var edadElemento = formulario.elements[1];
  var nacionalidadElemento = formulario.elements[2];

  // Obtener valores del formulario
  var nombre = nombreElemento.value;
  var edad = edadElemento.value;
  var indiceNacionalidad = nacionalidadElemento.selectedIndex;
  var nacionalidad = nacionalidadElemento.options[indiceNacionalidad].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  // Validar y agregar invitado si cumple con los requisitos
  if (nombre.length === 0) {
    nombreElemento.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadElemento.classList.add("error");
  }

  if (
    nombre.length > 0 &&
    (edad >= 18 && edad <= 120)
  ) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};



// Función para agregar invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {
  // Mapear códigos de nacionalidad a nombres de países
  var nacionalidadMap = {
    ar: "Argentina",
    mx: "Mexicana",
    vnzl: "Venezolana",
    per: "Peruana"
  };

  // Crear contenedor de lista de invitados
  var lista = document.getElementById("lista-de-invitados");

  // Crear elemento de lista
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // Función para crear elementos de nombre, edad y nacionalidad
  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  // Crear elementos para nombre, edad y nacionalidad
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidadMap[nacionalidad]);

  // Crear botón para eliminar invitado dentro del elemento de lista
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  // Asignar función al botón para eliminar el invitado actual
  botonBorrar.onclick = function() {
    elementoLista.remove();
  };
}
