const { v4: uudiv4 } = require('uuid');

class Tarea {
    id = "";
    description = "";
    completed = null;

    constructor(description) {
        this.id = uudiv4();
        this.description = description;
    }
}

module.exports = Tarea;