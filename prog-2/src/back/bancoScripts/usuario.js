const db = require('../banco.js');

async function inserirUsuario(nvuser){   
    await db.none(`INSERT INTO paradin.usuario(email,senha,nome,apelido,datanas,situa)
                    values ($1,$2,$3,$4,$5,$6);`,[nvuser.email,nvuser.senha,nvuser.nome,nvuser.apelido,nvuser.datanascimento,nvuser.situa]);

    return 0;
}   

module.exports = {inserirUsuario};