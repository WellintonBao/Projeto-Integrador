const { compareSync } = require('bcrypt');
const db = require('../banco.js');

async function insereCard(req,res){
    console.log(req.nome)
    try{
        console.log("wtfd")
        await db.none(`
            INSERT INTO paradin.card(nome,forca,sabedoria,inteligencia,carisma,destreza,constituicao,
                                    vida,classearm,nvlde,caracteristica,ataque,caminhoimg,familia,
                                    tamanho,tendencia,criador,situa) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,default)
        `,[req.nome,req.forca,req.sabedoria,req.inteligencia,
            req.carisma,req.destreza,req.constituicao,req.vida,req.classearm,
            req.nvlde,req.caracteristica,req.ataque,req.caminhoimg,
            req.familia,req.tamanho,req.tendencia,req.criador
        ]);
    }catch(err){
        console.log(err);
        res.sendstatus(400);
        return 
    }
    
    return 0;
}

async function projetaCard(req,res){
    try{
        const email = req.headers.email

        const cards = await db.any(`select c.nome,
                                        c.idcard,
                                        ta.tipo ,
                                        c.criador 
                                    from paradin.card c
                                    join paradin.tamanho ta on ta.idtamanho = c.tamanho
                                    where c.criador = $1
            ;`,[email]);

        return cards;
    }catch(err){
        console.log(err);
        return 
    }
}

async function detalheCard(req){

    try {
        const cardId = await db.any(`select c.nome,
            c.idcard,
            c.forca,
            c.inteligencia,
            c.sabedoria,
            c.carisma,
            c.destreza,
            c.constituicao,
            c.vida,
            c.classearm,
            c.nvlde,
            c.caracteristica,
            c.ataque,
            f.tipo as familia,
            te.tipo as tendencia,
            ta.tipo as tamanho,
            c.criador 
         from paradin.card c
         join paradin.familia f on f.idfamilia = c.familia
         join paradin.tendencia te on te.idtendencia = c.tendencia 
         join paradin.tamanho ta on ta.idtamanho = c.tamanho
         where idcard = $1
                 ;`,[req.headers.id]);
         return cardId; 
    } catch (error) {
        console.log(error)
        return;
    }
    
}

async function deletaCard(req,res){
    try{
        console.log('Deletado')
        await db.none(`
            delete from paradin.card 
                where idcard = $1;
        `,[req.headers.id]);
        return req.headers.id; 
    }catch(err){
        res.status(400);
    }
    
}


async function atualizaCard(req,res){
        // Array para armazenar os conjuntos de colunas = valores
        const setClauses = [];
        // Array para armazenar os valores
        const values = [];
        if(!req.body){
            return;
        }
        // Percorrer as chaves do objeto updates
        console.log(req.body)
        Object.keys(req.body).forEach((key, index) => {
            console.log(req.body[key])
            setClauses.push(`${key} = $${index + 1}`);
            values.push(req.body[key]);
        });
        // Adicionar o cardId aos valores
        //values.push(req.headers.idcard);
        // Construir a consulta SQL
        const query = `
          UPDATE paradin.card
          SET ${setClauses.join(', ')}
          WHERE idcard = ${req.headers.id};
        `;

      
        try {
          // Executar a consulta
          const result = await db.none(query, values);
          return 1;
        } catch (error) {
          console.error('Erro ao atualizar o card:', error);
          return;
        }
}
      

module.exports ={insereCard,projetaCard,deletaCard,atualizaCard,detalheCard};