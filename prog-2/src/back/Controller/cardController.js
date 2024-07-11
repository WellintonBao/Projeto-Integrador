const card = require('../bancoScripts/card.js');

async function criaCard(req, res) {
    console.log(req.body.familia)
    const { nome, forca, sabedoria, inteligencia, carisma, destreza, constituicao, vida,
            classearm, nvlde, caracteristica, ataque, caminhoimg, familia, tamanho, tendencia, criador } = req.body;

    if (!nome || !forca || !sabedoria || !inteligencia || !carisma || !destreza || !constituicao || !vida ||
        !classearm || !nvlde || !caracteristica || !ataque || !caminhoimg || !familia || !tamanho || !tendencia ||
        !criador) {
        res.status(400).send("Faltando dados para criar card");
        return;
    }

    try {
        console.log("ksakjd")
        await card.insereCard({
            nome, forca, sabedoria, inteligencia, carisma, destreza, constituicao, vida,
            classearm, nvlde, caracteristica, ataque, caminhoimg, familia,
            tamanho, tendencia, criador
        });

        res.status(201).send('Novo card criado com sucesso');
    } catch (error) {
        console.error('Erro ao inserir card:', error);
        res.status(500).send('Erro ao criar card');
    }
}


async function verificaCard(req,res){
    console.log(req.headers.email)
    if(!req.headers.email){
            res.status(400).send("Faltando email");
    }
    const carUser = await card.projetaCard(req);
    console.log(carUser)
    res.status(200).send(carUser);

}

async function apagaCard(req,res){
    console.log(req.headers.id)
    if(!req.headers.id){
            res.status(400).send("Faltando id do card");
            return
    }
    const carUser = await card.deletaCard(req);
    res.status(200).send(`Card de id ${carUser} deletado com sucesso`);

}

async function updateCard(req,res){
    console.log(req.body)
    const cardAtu = await card.atualizaCard(req);
    if(cardAtu){
        res.status(200).send('Atualizado!');
    }else{
        res.status(400).send('Não foi possivel atualizar o card.');
    }
}

async function validaId(req,res){

    if(!req.headers.id){
        res.status(400);
    }else{
        const cardId = await card.detalheCard(req);
        res.send(cardId);
        console.log(cardId);
        return cardId;
    }
}

module.exports = {criaCard,verificaCard,apagaCard,updateCard,validaId};