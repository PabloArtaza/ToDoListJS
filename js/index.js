import {Tarea} from "./Tarea.js";

 let listaDeTareas = []
 let ul = document.getElementById("lista-de-tareas")

document.getElementById("agregar").addEventListener("click", () => {
    let prioridad = document.getElementById("prioridad").value
    let task = document.getElementById("task").value

   //Creo la tarea con los parametros prioridad y task 
   let tarea = new Tarea(task, prioridad)
   listaDeTareas.push(tarea)

   //reseteo el input
   document.getElementById("task").value = ""

   mostrarLista()
})
function mostrarLista() {
    ul.innerHTML = ""

    listaDeTareas.forEach((tarea, indice) => {
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" id="${indice}">${tarea.nombre} - Prioridad: ${tarea.prioridad}  <button id="botonEliminar${indice}" type="button" class="btn btn-dark"><i  class="far fa-times-circle"></i></li></button>`
    })

    listaDeTareas.forEach((tarea, indice)=>{
        document.getElementById(`botonEliminar${indice}`).addEventListener("click", () =>{
            delete listaDeTareas[indice]
            mostrarLista()
        })
    })
}





