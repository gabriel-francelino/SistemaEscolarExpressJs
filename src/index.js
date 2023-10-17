const express =  require('express');

const app = express();

app.get('/professor', (req, res) => {
    return res.send('[GET] Professor');
});

app.post('/professor', (req, res) => {
    return res.send('[POST] Professor');
});

app.listen(8080, () => {
    console.log('Server está executando na porta 8080');
});