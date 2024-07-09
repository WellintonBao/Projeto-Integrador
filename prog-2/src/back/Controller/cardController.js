const card = require('../bancoScripts/card.js');

async function criaCard(req,res){
    if(!req.headers.nome || !req.headers.forca || !req.headers.sabedoria || !req.headers.inteligencia ||
        !req.headers.carisma || !req.headers.destreza || !req.headers.constituicao || !req.headers.vida ||
        !req.headers.classearm || !req.headers.nvlde || !req.headers.caracteristica || !req.headers.ataque ||
        !req.headers.caminhoimg || !req.headers.familia || !req.headers.tamanho || !req.headers.tendencia ||
        !req.headers.criador){
            res.status(400).send("Faltando dados para criar card");
    }
    await card.insereCard(req);
    res.status(201).send('Novo card criado com sucesso');

}

async function verificaCard(req,res){
    if(!req.body.email){
            res.status(400).send("Faltando email");
    }
    const carUser = await card.projetaCard(req);
    res.status(200).send(carUser);

}

async function apagaCard(req,res){
    if(!req.body.idcard){
            res.status(400).send("Faltando id do card");
            return
    }
    const carUser = await card.deletaCard(req);
    res.status(200).send(`Card de id ${carUser} deletado com sucesso`);

}

async function updateCard(req,res){
    const cardAtu = await card.atualizaCard(req);
    if(cardAtu){
        res.status(200).send('Atualizado!');
    }else{
        res.status(400).send('Não foi possivel atualizar o card.');
    }
}

module.exports = {criaCard,verificaCard,apagaCard,updateCard};