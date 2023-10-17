const express = require('express');
const controlador = require('../controladores/aluno');

const router = express.Router();

router.get('/aluno', controlador.get);

router.post('/aluno', controlador.post);

router.delete('/aluno', controlador.delete);

router.patch('/aluno', controlador.patch);

module.exports = router;