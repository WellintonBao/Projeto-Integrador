const express = require('express');
const jwt = require('jsonwebtoken');
const card = require('./Controller/cardController.js');
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

passport.use(
	new LocalStrategy(
		{
			usernameField: "email", // Assuming the user logs in with an email
			passwordField: "password",
		},
		async (username, password, done) => {
			try {
				// Find the user by email in the database
				const user = await db.oneOrNone(
					"SELECT * FROM paradin.usuario WHERE email = $1;",
					[username],
				);

				// If the user is not found, return an error
				if (!user) {
					return done(null, false, { message: "Usuário incorreto." });
				}

				// Compare the provided password with the hashed password in the database
				const passwordMatch = await bcrypt.compare(
					password,
					user.senha,
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

app.listen(3033, () => console.log("Servidor rodando na porta 3033."));

//CRUD DE CARD
app.post('/card/criar',card.criaCard);

app.get('/card/projeta',card.verificaCard);

app.delete('/card/deletar',card.apagaCard);

app.put('/card/atualiza',card.updateCard);

app.get('/detalhes',card.validaId);

app.post(
	"/login",
	passport.authenticate("local", {
		failureMessage: true,
	}),
	function (req, res) {
		console.log(req.user.email)
		const tokenj = jwt.sign({email: req.user.email },process.env.CHAVE_TOKEN
		)
		res.send({ token: tokenj }).status(200);
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


app.post("/novoUsuario", async (req, res) => {
	const saltRounds = 10;
	try {
		const userEmail = req.body.email;
		const userPasswd = req.body.senha;
		const salt = bcrypt.genSaltSync(saltRounds);
		const dataFormatada = moment(req.body.dataNascimento,'DD/MM/YYYY').format('YYYY-MM-DD');
		const hashedPasswd = bcrypt.hashSync(userPasswd, salt);
        const novoUser = {
            nome: req.body.nome,
            apelido: req.body.apelido,
            datanascimento: dataFormatada
        };

		console.log(`Email: ${userEmail} - Passwd: ${hashedPasswd}`);
		db.none(`INSERT INTO paradin.usuario (email,senha,nome,datanas,apelido,situa) 
                VALUES ($1, $2,$3,$4,$5,default);`, [
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


