const Service = require('../services/aluno');

module.exports = {
    getById: async (req, res) => {
        const {id} = req.params;
        const aluno = await Service.getById(+id);
        return res.json(aluno);
    },
    getAll: async (req, res) => {
        console.log('getAll');
        try {
            const alunos = await Service.getAll();
            return res.json(alunos);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },
    create: async (req, res) => {
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
    delete: async (req, res) => {
        const {id} = req.params;
        const alunoDeletado = await Service.delete(+id);
        return res.json(alunoDeletado);
    },
    update: async (req, res) => {
        const {id} = req.params;
        const parcialAluno = req.body;
        const alunoAtualizado = await Service.update(+id, parcialAluno);
        return res.json(alunoAtualizado);
    }
};