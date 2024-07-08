const bcrypt = require('bcrypt');
const moment = require('moment');
const usuario = require('../bancoScripts/usuario.js');

async function cadastraUsuario(req,res){
    if(!req.headers.email || !req.headers.senha || !req.headers.apelido || !req.headers.nome || !req.headers.datanascimento){
        res.status(400).send("Faltando dados para cadastro");
        return;
    }
    const dataFormatada = moment(req.headers.datanascimento,'DD/MM/YYYY').format('YYYY-MM-DD');
    const senhaC = await bcrypt.hash(req.headers.senha,8);
    const novoUser = {
        email: req.headers.email,
        senha: senhaC,
        nome: req.headers.nome,
        apelido: req.headers.apelido,
        datanascimento: dataFormatada,
        situa: req.headers.situa
    };

    const inseriu = await usuario.inserirUsuario(novoUser);
    if(inseriu == 0){
        res.status(201).send(`Usuario cadastrado com sucesso`);
        return;
    }else{
        res.status(400).send(`Usuario ${req.headers.email} não foi cadastrado`);
        return;
    }

    return;
}

module.exports = {cadastraUsuario};