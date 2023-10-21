const express = require('express');
const Controlador = require('../controladores/aluno');

const router = express.Router();


router.get('/aluno/all', Controlador.getAll);

router.get('/aluno/:id', Controlador.getById);

router.post('/aluno', Controlador.create);

router.delete('/aluno', Controlador.delete);

router.patch('/aluno', Controlador.patch);

module.exports = router;