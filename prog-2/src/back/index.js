const express = require('express');
//const cadastro = require('./Controller/cadastro.js');
//const login = require('./Controller/login.js');
const card = require('./Controller/cardController.js');
const noticia = require('./Controller/noticiaController.js');
require('dotenv').config()

const cors = require("cors");
const db = require('./banco.js');
const moment = require('moment');

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const bcrypt = require("bcrypt");



const app = express();
app.use(cors());
app.use(express.json());


//CRUD DE NOTICIA
app.post('/noticia/criar', noticia.insere);

app.get('/noticia/projeta', noticia.projeta);

app.put('/noticia/atualiza', noticia.atualiza);

app.delete('/noticia/deletar', noticia.deletar);

//CRUD DE CARD
app.post('/card/criar',card.criaCard);

app.get('/card/projeta',card.verificaCard);

app.delete('/card/deletar',card.apagaCard);

app.put('/card/atualiza',card.updateCard);




app.use(
	session({
		secret: 'projeto_paradin',
		resave: false,
		saveUninitialized: false,
		cookie: { secure: true },
	}),
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
	new LocalStrategy(
		{
			usernameField: "username", // Assuming the user logs in with an email
			passwordField: "password",
		},
		async (username, password, done) => {
			try {
				// Find the user by email in the database
				const user = await db.oneOrNone(
					"SELECT * FROM usuario WHERE email = $1;",
					[username],
				);

				// If the user is not found, return an error
				if (!user) {
					return done(null, false, { message: "Usuário incorreto." });
				}

				// Compare the provided password with the hashed password in the database
				const passwordMatch = await bcrypt.compare(
					password,
					user.user_password,
				);

				// If the passwords match, return the user object
				if (passwordMatch) {
					console.log("Usuário autenticado!");
					return done(null, user);
				} else {
					// If the passwords don't match, return an error
					return done(null, false, { message: "Senha incorreta." });
				}
			} catch (error) {
				return done(error);
			}
		},
	),
);

passport.serializeUser(function (user, cb) {
	process.nextTick(function () {
		return cb(null, {
			user_id: user.username,
			username: user.username,
		});
	});
});

passport.deserializeUser(function (user, cb) {
	process.nextTick(function () {
		return cb(null, user);
	});
});

app.listen(3010, () => console.log("Servidor rodando na porta 3010."));

app.post(
	"/login",
	passport.authenticate("local", {
		failureMessage: true,
	}),
	function (req, res) {
		res.send({ token: 1234 }).status(200);
	},
);

app.get("/login", (req, res) => {
	res.redirect("/");
});

app.post("/logout", function (req, res, next) {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		res.redirect("/");
	});
});

app.get("/", (req, res) => {
	res.send("Hello, world!");
});

/*app.get(
	"/clientes",
	passport.authenticate("local", { failureMessage: true }),
	async (req, res) => {
		try {
			const clientes = await db.any("SELECT * FROM clientes;");
			console.log("Retornando todos clientes.");
			res.json(clientes).status(200);
		} catch (error) {
			console.log(error);
			res.sendStatus(400);
		}
	},
);

app.get(
	"/cliente",
	passport.authenticate("local", { failureMessage: true }),
	async (req, res) => {
		try {
			const clienteId = parseInt(req.query.id);
			console.log(`Retornando ID: ${clienteId}.`);
			const clientes = await db.one(
				"SELECT id, nome, email FROM clientes WHERE id = $1;",
				clienteId,
			);
			res.json(clientes).status(200);
		} catch (error) {
			console.log(error);
			res.sendStatus(400);
		}
	},
);

app.post(
	"/cliente",
	passport.authenticate("local", { failureMessage: true }),
	async (req, res) => {
		try {
			const clienteNome = req.body.nome;
			const clienteEmail = req.body.email;
			console.log(`Nome: ${clienteNome} - Email: ${clienteEmail}`);
			db.none("INSERT INTO clientes (nome, email) VALUES ($1, $2);", [
				clienteNome,
				clienteEmail,
			]);
			res.sendStatus(200);
		} catch (error) {
			console.log(error);
			res.sendStatus(400);
		}
	},
);*/

app.post("/novoUsuario", async (req, res) => {
	const saltRounds = 10;
	try {
		const userEmail = req.body.email;
		const userPasswd = req.body.passwd;
		const salt = bcrypt.genSaltSync(saltRounds);
		const dataFormatada = moment(req.body.datanascimento,'DD/MM/YYYY').format('YYYY-MM-DD');
		const hashedPasswd = bcrypt.hashSync(userPasswd, salt);
        const novoUser = {
            nome: req.body.nome,
            apelido: req.body.apelido,
            datanascimento: dataFormatada,
            situa: req.body.situa
        };

		console.log(`Email: ${userEmail} - Passwd: ${hashedPasswd}`);
		db.none(`INSERT INTO paradin.usuario (email,senha,nome,datanas,apelido,situa) 
                VALUES ($1, $2,$3,$4,$5,$6);`, [
			userEmail,
			hashedPasswd,
            novoUser.nome,
            novoUser.datanascimento,
            novoUser.apelido,
			novoUser.situa
		]);
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
		res.sendStatus(400);
	}
});

//Servidor
/*const app = express();
app.listen(3333, () => console.log("Servidor rodando na porta 3333, use a URL http://localhost:3333, para consumir a API!"));

//ROTAS

//Cadastrar usuario
app.get('/cadastro', cadastro.cadastraUsuario);

//Login 
app.get('/login', login.verificaLogin);*/

//Card
