const prisma = require('@prisma/client');

const prismaClient =  new prisma.PrismaClient();

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

    // getById: async (id) => {
    //     const aluno = await prismaClient.aluno.findUnique({
    //         // where: {
    //         //     id: Number(id),
    //         // }
    //     });

    //     return aluno;
    // }
};