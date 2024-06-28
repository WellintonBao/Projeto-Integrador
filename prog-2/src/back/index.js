const express = require('express');
const cadastro = require('./Controller/cadastro.js');
require('dotenv').config()

//Servidor
const app = express();
app.listen(3333, () => console.log("Servidor rodando na porta 3001, use a URL http://localhost:3333, para consumir a API!"));

//ROTAS

//Cadastrar usuario
app.get("/cadastro", cadastro.cadastraUsuario);

//Login 
    app.get('/login', async (req,res)=>{
})