require("dotenv").config //habilito leer un archivo .env
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env //destructuring el archivo .env
const { Sequelize } = require('sequelize');
const fs = require("fs")
const path = require("path")

// Option 1: Passing a connection URI
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/ecommerce`) // Example for postgres

const basename = path.basename(_filename) // para la ruta de los archivos 

const modelDefiners = [] //para pushear todos los models de la carpeta (tablas)



// Leemos todos los archivos "QUE SEAN .Js de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync (path.join(_dirname, "/models"))
.filter(
  (file) =>
    file.indexOf(".") !== 0 && file !== basename && file.slice (-3) === ".js"
    )
    .forEach((file) => {
modelDefiners.push(require(path.join(_dirname, "/models", file)));
});











// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "dvd rental",
//   password: "Jerrypro3",
//   port: 5432, // Puerto por defecto de PostgreSQL
// });

