const express = require('express');
const controlador = require('../controladores/curso');

const router = express.Router();

router.get('/curso', controlador.get);

router.post('/curso', controlador.post);

router.delete('/curso', controlador.delete);

router.patch('/curso', controlador.patch);

module.exports = router;