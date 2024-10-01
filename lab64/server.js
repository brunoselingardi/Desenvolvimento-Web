const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fictionalUser = require("./usuario");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api', (req, res) => {
    console.log(req.body);
    const newUsuario = {
        id: req.body.id,
        nome: req.body.nome
    }
    fictionalUser.push(newUsuario);
    res.json({ message: 'TESTE' });
});

// Configura o Express para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'formulario.html'));
});

app.use((req,res) => {
    res.status(404).send('ERRO 404 - página não encontrada)');
});

app.get('/formu', (req, res) => {
    res.send(`<h1>usuario ficticio</h1>
        <h4>${fictionalUser[0].nome}</h4>`)
});
// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});