const db = require('../banco.js');

async function inserirUsuario(nvuser){   
    await db.none(`INSERT INTO paradin.usuario(email,senha,nome,apelido,datanas,situa)
                    values ($1,$2,$3,$4,$5,$6);`,[nvuser.email,nvuser.senha,nvuser.nome,nvuser.apelido,nvuser.datanascimento,nvuser.situa]);

    return 0;
}

async function buscaUsuario (req){
   const user =  await db.any(`Select email, 
                                      senha 
                               from paradin.usuario
                               where email = $1;`,[req.headers.email]);                          
    if(!user[0].email || !user[0].senha){
        return 0;
    }
    return user;
    
}

module.exports = {inserirUsuario,buscaUsuario};