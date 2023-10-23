const express = require('express');
const Controlador = require('../controladores/professor');

const router = express.Router();

router.post('/professor', Controlador.create);

router.get('/professor/', Controlador.getAll);

router.get('/professor/:id', Controlador.getById);

router.delete('/professor/:id', Controlador.delete);

router.patch('/professor/:id', Controlador.update);

module.exports = router;