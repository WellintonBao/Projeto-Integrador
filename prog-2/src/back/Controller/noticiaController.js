const { func } = require('../banco.js');
const noticia = require('../bancoScripts/noticia.js');

async function insere(req,res){
    if(!req.body.titulo || !req.body.descricao || !req.body.url || !req.body.datasis || !req.body.datapubli || !req.body.codadm){
        res.status(400).send('Esta faltando dados para inserir');
        return;
    }
    const result = await noticia.insereNoticia(req);
    if(result == 1){
        res.status(201).send('Nova noticia cadastrada');
    }
}

async function projeta(req,res){
    const noticias = await noticia.projetaNoticia(req);
    console.log(noticias)
    if(!noticias){
        res.status(400).send("Sem noticias cadastradas");
    }else{
        res.send(noticias);
    }

    res.status(400).send('Erro ao projetar as noticias');
}

async function atualiza(req,res){
    if(!req.headers.idnoticia){
        res.status(400).send('Esta sem o ID para atualizar');
        return;
    }
    if(!req.body){
        res.status(400).send('Esta sem dados para atualizar');
        return;
    }
    const not = await noticia.atualizaNoticia(req);
    if(not){
        res.status(200).send('Atualizado!');
    }else{
        res.status(400).send('Não foi possivel atualizar a noticia.');
    }

}

async function deletar(req,res){
    if(!req.headers.idnoticia){
        res.status(400).send('Sem ID noticia');
        return;
    }
    const dele = await noticia.deletarNoticia(req);
    if(dele == 0){
        res.status(200).send('Deletado com sucesso');
    }else{
        res.status(200).send('Erro ao deletar');
    }
}
module.exports = {insere,projeta,atualiza,deletar};