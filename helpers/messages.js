const colors = require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("-------------------------".red);
    console.log("  Seleccione una opcion  ".red);
    console.log("-------------------------".red);

    console.log(`${"1.".red} Crear tarea`);
    console.log(`${"2.".red} Listar tareas`);
    console.log(`${"3.".red} Listar tareas completadas`);
    console.log(`${"4.".red} Listar tareas pendientes`);
    console.log(`${"5.".red} Completar tarea`);
    console.log(`${"6.".red} Borrar tarea`);
    console.log(`${"7.".red} Salir \n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Selecciones una opcion: ", (option) => {
      readline.close();
      resolve(option);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`Presione ${"enter".red} para continuar`, (option) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  mostrarMenu,
  pause,
};
