const express = require('express');

const router = express.Router();

router.get('/aluno', (req, res) => {
    res.send('[GET] Aluno');
    }
);

router.post('/aluno', (req, res) => {
    res.send('[POST] Aluno');
    }
);

router.delete('/aluno', (req, res) => {
    res.send('[DELETE] Aluno');
    }
);

router.patch('/aluno', (req, res) => {
    res.send('[PATCH] Aluno');
    }
);

module.exports = router;