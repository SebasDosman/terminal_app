const Tarea = require('../models/tarea');

class Tareas {
    listado = {};

    get listadoArray() {
        const listado = [];
        Object.keys(this.listado).forEach(key => {
            const tarea = this.listado[key];

            listado.push(tarea)
        });
        
        return listado;
    }

    constructor() {
        this.listado = {};
    }

    crearTarea(description = "") {
        const tarea = new Tarea(description);

        this.listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;