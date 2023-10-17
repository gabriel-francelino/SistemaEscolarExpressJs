const express = require('express');
const controlador = require('../controladores/professor');

const router = express.Router();

router.get('/professor', controlador.get);

router.post('/professor', controlador.post);

router.delete('/professor', controlador.delete);

router.patch('/professor', controlador.patch);

module.exports = router;