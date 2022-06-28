const Tarea = require("../models/tarea");
const colors = require("colors");

class Tareas {
  listado = {};

  get listadoArray() {
    const listado = [];

    Object.keys(this.listado).forEach((key) => {
      const tarea = this.listado[key];

      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this.listado = {};
  }

  borrarTarea(id = "") {
    if (this.listado[id]) {
      delete this.listado[id];
    }
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this.listado[tarea.id] = tarea;
    });
  }

  crearTarea(description = "") {
    const tarea = new Tarea(description);

    this.listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    this.listadoArray.forEach((tarea, index) => {
      let idx = ``;
      const { description, completed } = tarea;
      let estado = null;

      if (completed) {
        idx = `${index + 1}.`.green;
        estado = `Completado`.green;
      } else {
        idx = `${index + 1}.`.red;
        estado = `Pendiente`.red;
      }

      console.log(`${idx} ${description} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(complete = true) {
    let idx = 0;

    this.listadoArray.forEach(tarea => {
      const { description, completed } = tarea;
      let estado = null;

      if (complete) {
        if (completed) {
          idx++;

          estado = `Completado`.green;

          console.log(`${(idx + ".").green} ${description} :: ${estado.green}`);
        }
      } else {
        if (!completed) {
          idx++;

          estado = `Pendiente`.red;

          console.log(`${(idx + ".").red} ${description} :: ${estado}`);
        }
      }
    });
  }

  toggleCompleted(ids = []) {
    ids.forEach(id => {
      const tarea = this.listado[id];

      if (!tarea.completed) {
        tarea.completed = new Date().toISOString();
      }
    });

    this.listadoArray.forEach(tarea => {
      if (!ids.includes(tarea.id)) {
        this.listado[tarea.id].completed = null; 
      }
    });
  }
}

module.exports = Tareas;
