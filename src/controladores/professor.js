const Service = require('../services/professor');

module.exports = {
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const professor = await Service.getById(+id);
            if (!professor) {
                throw new Error('professor não encontrado');
            }
            return res.json(professor);

        } catch (error) {
            return res.status(404).send(error.message);
        }
    },
    getAll: async (req, res) => {
        console.log('getAll');
        try {
            const professors = await Service.getAll();
            return res.json(professors);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },
    create: async (req, res) => {
        try {
            const professor = req.body;
            const professorCriado = await Service.create(professor);
            return res.json(professorCriado);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
            // return res.status(400).json(error);
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        const professorDeletado = await Service.delete(+id);
        return res.json(professorDeletado);
    },
    update: async (req, res) => {
        const { id } = req.params;
        const parcialprofessor = req.body;
        const professorAtualizado = await Service.update(+id, parcialprofessor);
        return res.json(professorAtualizado);
    }
};