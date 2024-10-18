const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contato.html'));
});

app.get('/novidades', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/novidades.html'));
});

app.get('/cursos', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/cursos.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/sobre.html'));
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
    res.json({ message: 'Mensagem enviada com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
