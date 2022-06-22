const inquirer = require("inquirer");
const colors = require("colors");

const menuOptions = [
  {
    type: "list",
    name: "option",
    message: "Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2.".green} Listar tareas`,
      },
      {
        value: "3",
        name: `${"3.".green} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar tarea`,
      },
      {
        value: "6",
        name: `${"6.".green} Borrar tarea`,
      },
      {
        value: "7",
        name: `${"7.".green} Salir \n`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();

  console.log("-------------------------".green);
  console.log("  Seleccione una opcion  ".green);
  console.log("-------------------------".green);

  const { option } = await inquirer.prompt(menuOptions);

  return option;
};

const pauseOption = [
  {
    type: "input",
    name: "enter",
    message: `Presione ${"enter".green} para continuar`,
  },
];

const pause = async () => {
  console.log("\n");
  await inquirer.prompt(pauseOption);
};

const leerInput = async(message) => {
  const question = {
    type: "input",
    name: "description",
    message,
    
    validate(value) {
      if(value.length == 0) {
        return "Por favor ingrese un valor";
      } else {
        return true;
      }
    }
  }

  const { description } = await inquirer.prompt(question);
}

module.exports = {
  inquirerMenu,
  pause,
  leerInput
};
