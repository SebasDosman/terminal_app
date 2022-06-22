const color = require("colors"); 
const { inquirerMenu, pause, leerInput } = require("./helpers/inquirer"); 
const Tareas = require("./models/tareas");

console.clear();

const main = async() => {
    console.clear();

    let option = "";
    const tareas = new Tareas();

    do {
        option = await inquirerMenu();

        switch(option) {
            case "1":
                const description = await leerInput("Descripcion:");
                tareas.crearTarea(description);
            break;
            case "2":
                console.log(tareas.listadoArray);
            break;
            case "3":
            break;
            case "4":
            break;
            case "5":
            break;
            case "6":
            break;
            case "7":
            break;
            default:

        }

        if (option !== "7") await pause();
    } while (option !== "7");

    // pause();    
}

main();