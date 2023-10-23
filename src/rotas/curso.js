const express = require('express');
const Controlador = require('../controladores/curso');

const router = express.Router();

router.post('/curso', Controlador.create);

router.get('/curso/', Controlador.getAll);

router.get('/curso/:id', Controlador.getById);

router.delete('/curso/:id', Controlador.delete);

router.patch('/curso/:id', Controlador.update);

module.exports = router;