const express = require('express');

const router = express.Router();

router.get('/curso', (req, res) => {
    res.send('[GET] Curso');
    }
);

router.post('/curso', (req, res) => {
    res.send('[POST] Curso');
    }
);

router.delete('/curso', (req, res) => {
    res.send('[DELETE] Curso');
    }
);

router.patch('/curso', (req, res) => {
    res.send('[PATCH] Curso');
    }
);

module.exports = router;