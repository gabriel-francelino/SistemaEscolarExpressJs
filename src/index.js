const express =  require('express');
const professorRouter = require('./rotas/professor');
const cursoRouter = require('./rotas/curso');

const app = express();

app.use([professorRouter, cursoRouter]);

app.listen(8080, () => {
    console.log('Server está executando na porta 8080');
});