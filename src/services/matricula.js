const prisma = require("@prisma/client");
const { buildTelefonePrismaQuery } = require("../utils");

const prismaClient = new prisma.PrismaClient();

module.exports = {
    create: async (matricula) => {
        await prismaClient.aluno.findUniqueOrThrow({
            where: {
                id: matricula.aluno_id,
            },
        });
        await prismaClient.curso.findUniqueOrThrow({
            where: {
                id: matricula.curso_id,
            },
        });
        const matriculaCriada = await prismaClient.matricula.create({
            data: matricula,
        });

        return matriculaCriada;
    },

    getAll: async () => {
        const matriculas = await prismaClient.matricula.findMany();
        return matriculas;
    },

    getByCurso: async (idCurso) => {
        const matricula = await prismaClient.matricula.findMany({
            where: {
                curso_id: idCurso,
            },
            include: {
                aluno: true,
            },
        });

        return matricula;
    },

    getByAluno: async (idAluno) => {
        const matricula = await prismaClient.matricula.findMany({
            where: {
                aluno_id: idAluno,
            },
            include: {
                curso: true,
            },
        });

        return matricula;
    },

    delete: async (idCurso, idAluno) => {
        const matriculaDeletada = await prismaClient.matricula.delete({
            where: {
                matricula_id: {
                    curso_id: idCurso,
                    aluno_id: idAluno,
                },
            },
        });

        return matriculaDeletada;
    },

    getByMatricula: async (idCurso, idAluno) => {
        const matricula = await prismaClient.matricula.findUnique({
            where: {
                matricula_id: {
                    curso_id: idCurso,
                    aluno_id: idAluno,
                },
            },
        });

        return matricula;
    },
};
