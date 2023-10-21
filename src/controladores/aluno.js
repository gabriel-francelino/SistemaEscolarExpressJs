const Service = require('../services/aluno');

module.exports = {
    get: (req, res) => {
        return res.send('[GET] Aluno');
    },
    create: async (req, res) => {
        console.log('executou o create');
        try {
            const aluno = req.body;
            const alunoCriado = await Service.create(aluno);
            return res.json(alunoCriado);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
            // return res.status(400).json(error);
        }
    },
    delete: (req, res) => {
        return res.send('[DELETE] Aluno');
    },
    patch: (req, res) => {
        return res.send('[PATCH] Aluno');
    }
};