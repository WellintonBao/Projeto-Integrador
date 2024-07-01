const user = require('../bancoScripts/usuario.js');
const bcrypt = require('bcrypt');

async function verificaLogin(req,res){
    if(!req.headers.email || !req.headers.senha){
        res.status(400).send("Faltando dados para login");
    }
    const login = await user.buscaUsuario(req);
    if(login == 0){
        res.status(400).send("Email ou senha incorretos.");
    }
    const result = await bcrypt.compare(req.headers.senha,login[0].senha);
    if(result){
        res.status(200).send("Usuario logado com sucesso!");
    }else{
        res.status(401).send("NÃO ACHOU OTARIO");
    }
    
}

module.exports = {verificaLogin};