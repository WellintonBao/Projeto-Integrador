const pgp = require("pg-promise")({});
const usuario = "postgres";
const senha = "postgres";
const host = "localhost";
const porta = "5432";
const banco_de_dados = "postgres";
const db = pgp(`postgres://${usuario}:${senha}@${host}:${porta}/${banco_de_dados}`);

const cors = require('cors');

const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3001, () => console.log("Servidor rodando na porta dos fundos"));
app.get('/curso', (req, res) => {
    res.json(db.curso)
  })

app.get('/curso/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const curso = await db.oneOrNone('SELECT * FROM cursos WHERE id = $1', [parseInt(id)])
    if (curso)
      res.json(curso);
    else
      res.status(404).send('Curso não encontrado');
  
  } catch (error) {
    res.status(500).send('Erro ao buscar curso' + error);
  }
})

app.put('/curso/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, turno, coordenador } = req.body;
  try {
    const result = await db.result('UPDATE cursos SET nome = $2, descricao = $3, turno = $4, coordenador = $5 WHERE id = $1', 
                                  [parseInt(id), nome, descricao, turno, coordenador]);
    if (result.rowCount > 0)
      res.send('Curso atualizado com sucesso');
    else
      res.status(404).send('Curso não encontrado');
  } 
  catch (error) {
    res.status(500).send('Erro ao atualizar curso');
  }
})

app.post('/curso', async (req, res) => {
  const { id, nome, descricao, turno, coordenador } = req.body;
  try {
    await db.none('INSERT INTO cursos (id, nome, descricao, turno, coordenador) VALUES ($1, $2, $3, $4, $5)', 
                                      [id, nome, descricao, turno, coordenador]);
    res.status(201).send('Curso adicionado com sucesso');
  }
  catch (error) {
    res.status(500).send('Erro ao adicionar curso.');
  }
})

app.delete('/curso/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const result = await db.result('DELETE FROM cursos WHERE id = $1', [parseInt(id)]);
    if (result.rowCount > 0)
      res.send('Curso removido com sucesso');
    else
      res.status(404).send('Curso não encontrado');
  }
  catch (error) {
    res.status(500).send('Erro ao remover curso');
  }
})