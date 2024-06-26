const express = require('express');
require('dotenv').config()

const pgp = require("pg-promise")({});
const usuario = process.env.DB_USER;
const senha = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const porta = process.env.DB_PORT;
const banco_de_dados = process.env.DB_NAME;
const db = pgp(`postgres://${usuario}:${senha}@${host}:${porta}/${banco_de_dados}`);

//Servidor
const app = express();
app.listen(3001, () => console.log("Servidor rodando na porta 3001"));




app.get("/", async (req,res)=>{
    const usuar = await db.any("Select * from paradin.usuario;");
    res.send(`Hello, world, ${usuar[0].email}`);
})