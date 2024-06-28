require('dotenv').config()

const pgp = require("pg-promise")({});
const usuario = process.env.DB_USER;
const senha = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const porta = process.env.DB_PORT;
const banco_de_dados = process.env.DB_NAME;
const db = pgp(`postgres://${usuario}:${senha}@${host}:${porta}/${banco_de_dados}`);

module.exports = db;