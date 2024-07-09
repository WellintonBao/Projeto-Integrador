const db = require('../banco.js');

async function insereCard(req,res){
    try{
        await db.none(`
            INSERT INTO paradin.card(nome,forca,sabedoria,inteligencia,carisma,destreza,constituicao,
                                    vida,classearm,nvlde,caracteristica,ataque,caminhoimg,familia,
                                    tamanho,tendencia,criador,situa) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,default)
        `,[req.headers.nome,req.headers.forca,req.headers.sabedoria,req.headers.inteligencia,
            req.headers.carisma,req.headers.destreza,req.headers.constituicao,req.headers.vida,req.headers.classearm,
            req.headers.nvlde,req.headers.caracteristica,req.headers.ataque,req.headers.caminhoimg,
            req.headers.familia,req.headers.tamanho,req.headers.tendencia,req.headers.criador
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
        const email = req.body.email

        const cards = await db.any(`select c.nome,
       c.idcard,
	   c.forca,
	   c.sabedoria,
	   c.carisma,
	   c.destreza,
	   c.constituicao,
	   c.vida,
	   c.classearm,
	   c.nvlde,
	   c.caracteristica,
	   c.ataque,
	   f.tipo ,
	   te.tipo ,
	   ta.tipo ,
	   c.criador 
    from paradin.card c
    join paradin.familia f on f.idfamilia = c.familia
    join paradin.tendencia te on te.idtendencia = c.tendencia 
    join paradin.tamanho ta on ta.idtamanho = c.tamanho
    where c.criador = $1
            ;`,[email]);

        return cards;
    }catch(err){
        console.log(err);
        return 
    }
}

async function deletaCard(req,res){
    try{
        await db.none(`
            delete from paradin.card 
                where idcard = $1;
        `,[req.body.idcard]);
        return req.body.idcard; 
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
        Object.keys(req.body).forEach((key, index) => {
          setClauses.push(`${key} = $${index + 1}`);
          values.push(req.body[key]);
        });
      
        // Adicionar o cardId aos valores
        values.push(req.headers.idcard);
        // Construir a consulta SQL
        const query = `
          UPDATE paradin.card
          SET ${setClauses.join(', ')}
          WHERE idcard = $${values.length};
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
      

module.exports ={insereCard,projetaCard,deletaCard,atualizaCard};