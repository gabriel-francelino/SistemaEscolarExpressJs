const express = require('express');
const morgan = require('morgan');
const professorRouter = require('./rotas/professor');
const cursoRouter = require('./rotas/curso');
const alunoRouter = require('./rotas/aluno');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use([professorRouter, cursoRouter, alunoRouter]);

app.listen(8080, () => {
    console.log('Server está executando na porta 8080');
});