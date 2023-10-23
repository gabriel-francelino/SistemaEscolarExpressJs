const prisma = require('@prisma/client');
const { buildTelefonePrismaQuery } = require('../utils');

const prismaClient = new prisma.PrismaClient();

module.exports = {
    create: async ({ telefones, ...aluno }) => {
        const alunoCriado = await prismaClient.aluno.create({
            data: { ...aluno, telefones: buildTelefonePrismaQuery(telefones) }
        });

        return alunoCriado;
    },

    getAll: async () => {
        const alunos = await prismaClient.aluno.findMany({
            include: {
                telefones: {
                    select: {
                        telefone: true
                    }
                }
            }
        });
        return alunos;
    },

    getById: async (id) => {
        const aluno = await prismaClient.aluno.findUnique({
            where: {
                id,
            },
            include: {
                telefones: {
                    select: {
                        telefone: true
                    }
                }
            }
        })

        return aluno
    },

    delete: async (id) => {
        const alunoDeletado = await prismaClient.aluno.delete({
            where: {
                id,
            }
        })

        return alunoDeletado;
    },

    update: async (id, { telefones, ...parcialAluno }) => {
        const alunoAtualizado = await prismaClient.aluno.update({
            where: {
                id
            },
            data: {
                ...parcialAluno,
                telefones: buildTelefonePrismaQuery(telefones)
            }
        });

        return alunoAtualizado;
    }
};