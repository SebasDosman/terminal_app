const color = require("colors");
const {
  inquirerMenu,
  pause,
  leerInput,
  listadoTareasBorar,
  confirmar,
  mostrarListadoCheckList,
} = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/saveDocument");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  console.clear();

  let option = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();

  do {
    option = await inquirerMenu();

    switch (option) {
      case "1":
        const description = await leerInput("Descripcion:");

        tareas.crearTarea(description);

        break;

      case "2":
        if (tareasDB) {
          tareas.cargarTareasFromArray(tareasDB);
        }

        tareas.listadoCompleto();
        break;

      case "3":
        tareas.listarPendientesCompletadas(true);
        break;

      case "4":
        tareas.listarPendientesCompletadas(false);
        break;

      case "5":
        const ids = await mostrarListadoCheckList(tareas.listadoArray);
        tareas.toggleCompleted(ids);
        break;

      case "6":
        const id = await listadoTareasBorar(tareas.listadoArray);

        if (id !== "0") {
          const ok = await confirmar("Estas seguro de que la deseas borrar?");

          if (ok) {
            tareas.borrarTarea(id);

            console.log(`Tarea borrada correctamente`.green);
          }
        }
        break;

      case "7":
        break;

      default:
    }

    guardarDB(tareas.listadoArray);

    await pause();
  } while (option !== "7");

  // pause();
};

main();
