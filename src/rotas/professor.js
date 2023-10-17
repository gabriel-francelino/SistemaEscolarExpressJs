const express = require('express');

const router = express.Router();

router.get('/professor', (req, res) => {
    res.send('[GET] Professor');
    }
);

router.post('/professor', (req, res) => {
    res.send('[GET] Professor');
    }
);

router.delete('/professor', (req, res) => {
    res.send('[DELETE] Professor');
    }
);

router.patch('/professor', (req, res) => {
    res.send('[PATCH] Professor');
    }
);

module.exports = router;