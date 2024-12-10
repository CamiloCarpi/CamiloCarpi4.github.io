const tarea = document.getElementById('tarea')
const fecha = document.getElementById('fecha')
const tareas = document.getElementById('tareas')

let listaTareas = JSON.parse(localStorage.getItem('tareas')

let boton = document.getElementById("miBoton");

let contenedor = document.getElementById("contenedor");


contenedor.addEventListener("mouseover", function() {
    contenedor.style.backgroundColor = "blue";
});

contenedor.addEventListener("mouseout", function() {
    contenedor.style.backgroundColor = "white";
});

// Agregar un evento de clic
document.addEventListener("keydown", function(evento) {
    console.log("Tecla presionada: " + evento.key);
    if (evento.key == "Enter"){
        evento.preventDefault();
        GuardarTarea()
        
    }
});

function GuardarTarea(){

    let txtTarea= tarea.value
    let txtFecha= fecha.value

    localStorage.setItem('nombre', 'Juan');
    let nombre = localStorage.getItem('nombre');
    console.log(nombre); // Muestra "Juan"

    console.log(txtTarea)
    console.log(txtFecha)

    const nuevaTarea = document.createElement('li');
    nuevaTarea.innerHTML = '<h1>' + txtTarea+ '</h1><p>' + txtFecha +'</p>' 
    tareas.appendChild(nuevaTarea)
    let tareaGuardar = {'tarea':txtTarea, 'fecha':txtFecha}
    listaTareas.push(tareaGuardar)
    localStorage.setItem('tareas', JSON.stringify(listaTareas))

}
function cargarTareas(){

    let listaTareas = JSON.parse(localStorage.getItem('tareas');
    


}
