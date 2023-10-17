const express = require('express');

const router = express.Router();

router.get('/curso', (req, res) => {
    res.send('[GET] Curso');
    }
);
module.exports = router;