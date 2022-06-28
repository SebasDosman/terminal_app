const fs = require("fs");

const archive = "./database/data.json";

const leerDB = () => {
  if (fs.existsSync(archive)) {
    const info = fs.readFileSync(archive, { encoding: "utf-8" });
    const data = JSON.parse(info);

    console.log(data);

    return data;
  } else {
    return null;
  }
};

const guardarDB = (data) => {
  fs.writeFileSync(archive, JSON.stringify(data));
};

module.exports = {
  guardarDB,
  leerDB,
};
