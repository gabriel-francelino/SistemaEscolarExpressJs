const prisma = require('@prisma/client');

const prismaClient = new prisma.PrismaClient();

module.exports = {
    create: async (professor) => {
        console.log(professor);
        const professorCriado = await prismaClient.professor.create({
            data: professor,
        });

        return professorCriado;
    },

    getAll: async () => {
        const professores = await prismaClient.professor.findMany();
        return professores;
    },

    getById: async (id) => {
        const professor = await prismaClient.professor.findUnique({
            where: {
                id,
            }
        })

        return professor
    },

    delete: async (id) => {
        const professorDeletado = await prismaClient.professor.delete({
            where: {
                id,
            }
        })

        return professorDeletado;
    },

    update: async (id, parcialprofessor) => {
        const professorAtualizado = await prismaClient.professor.update({
            where: {
                id
            },
            data: parcialprofessor
        });

        return professorAtualizado;
    }
};