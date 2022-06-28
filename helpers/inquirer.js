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

const listadoTareasBorar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.description}`, 
    }
  })

  choices.unshift({
    value: "0",
    name: "0. ".green + " Cancelar"
  })

  const questions = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices
    }
  ]

  const { id } = await inquirer.prompt(questions);
  return id;
};

const confirmar = async(message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message
    }
  ];

  const {ok} = await inquirer.prompt(question);
  return ok;
}

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

const leerInput = async (message) => {
  const question = {
    type: "input",
    name: "description",
    message,

    validate(value) {
      if (value.length == 0) {
        return "Por favor ingrese un valor";
      } else {
        return true;
      }
    },
  };

  const { description } = await inquirer.prompt(question);
  return description;
};

const mostrarListadoCheckList = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.description}`,
      checked: (tarea.completed) ? true : false 
    }
  });

  const questions = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices
    }
  ]

  const { ids } = await inquirer.prompt(questions);
  return ids;
};

module.exports = {
  inquirerMenu,
  pause,
  leerInput,
  listadoTareasBorar,
  confirmar,
  mostrarListadoCheckList,
};
