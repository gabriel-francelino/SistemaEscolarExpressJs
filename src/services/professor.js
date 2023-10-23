const prisma = require('@prisma/client');
const { buildTelefonePrismaQuery } = require('../utils');

const prismaClient = new prisma.PrismaClient();

module.exports = {
    create: async ({ telefones, ...professor }) => {
        const professorCriado = await prismaClient.professor.create({
            data: { ...professor, telefones: buildTelefonePrismaQuery(telefones) }
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

    update: async (id, {telefones, ...parcialProfessor}) => {
        const professorAtualizado = await prismaClient.professor.update({
            where: {
                id
            },
            data: {
                ...parcialProfessor,
                telefones: buildTelefonePrismaQuery(telefones)
            }
        });

        return professorAtualizado;
    }
};