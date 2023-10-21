const prisma = require('@prisma/client');

const prismaClient = new prisma.PrismaClient();

module.exports = {
    create: async (aluno) => {
        console.log(aluno);
        const alunoCriado = await prismaClient.aluno.create({
            data: aluno,
        });

        return alunoCriado;
    },

    getAll: async () => {
        const alunos = await prismaClient.aluno.findMany();
        return alunos;
    },

    getById: async (id) => {
        const aluno = await prismaClient.aluno.findUnique({
            where: {
                id,
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

    update: async (id, parcialAluno) => {
        const alunoAtualizado = await prismaClient.aluno.update({
            where: {
                id
            },
            data: parcialAluno
        });

        return alunoAtualizado;
    }
};