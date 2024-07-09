const db = require('../banco.js');

async function insereNoticia(req){
    try{
        await db.none(`insert into paradin.noticia(titulo,descri,url,datsistema,datpubli,codadm)
	                    values 
		($1,$2,$3,$4,$5,$6);
        `,[req.body.titulo,req.body.descricao,req.body.url,req.body.datasis,req.body.datapubli,req.body.codadm]);
        return 1;
    }catch(err){
        console.log(err);
        return; 
    }
}

async function projetaNoticia(req){
    try{
        const not = await db.any(`
                select n.titulo,
                       n.descri,
                       n.url,
                       n.datsistema,
                       n.datpubli,
                       u.email 
                    from paradin.noticia n
                    join paradin.usuario u on u.codadm = n.codadm
                    order by datsistema desc;
            `);
        return not;
    }catch(err){  
        return;
    }
}


async function atualizaNoticia(req,res){
    // Array para armazenar os conjuntos de colunas = valores
    const setClauses = [];
        // Array para armazenar os valores
    const values = [];
        console.log(req.body)
        if(!req.body){
            return;
        }
    // Percorrer as chaves do objeto updates
    Object.keys(req.body).forEach((key, index) => {
        setClauses.push(`${key} = $${index + 1}`);
        values.push(req.body[key]);
    });
      
        // Adicionar o cardId aos valores
        values.push(req.headers.idnoticia);
        // Construir a consulta SQL
        const query = `
          UPDATE paradin.noticia
          SET ${setClauses.join(', ')}
          WHERE idnoticia = $${values.length};
        `;
      
        try {
          // Executar a consulta
          const result = await db.none(query, values);
          return 1;
        } catch (error) {
          console.error('Erro ao atualizar o noticia:', error);
          return;
        }
}


async function deletarNoticia(req,res){
    if(!req.headers.idnoticia){
        return 1;
    }
    try{
        db.none(`Delete from paradin.noticia where idnoticia = $1`,[req.headers.idnoticia]);
        return 0; 
    }catch(err){
        console.log(err);
        return 1;
    }
}

module.exports = {insereNoticia,projetaNoticia,atualizaNoticia,deletarNoticia}