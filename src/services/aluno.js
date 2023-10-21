const prisma = require('@prisma/client');

const prismaClient =  new prisma.PrismaClient();

module.exports = {
    create: async (aluno) => {
        console.log(aluno);
        const alunoCriado = await prismaClient.aluno.create({
            data: aluno,
        });

        return alunoCriado;
    }
};