const prisma = require("@prisma/client");

const prismaClient = new prisma.PrismaClient();

module.exports = {
    create: async (curso) => {
        await prismaClient.professor.findUniqueOrThrow({
            where: {
                id: matricula.professor_id,
            },
        });
        const cursoCriado = await prismaClient.curso.create({
            data: curso,
        });

        return cursoCriado;
    },

    getAll: async () => {
        const cursos = await prismaClient.curso.findMany({
            include: {
                professor: {
                    select: {
                        p_nome: true,
                        u_nome: true,
                    },
                },
            },
        });
        return cursos;
    },

    getById: async (id) => {
        const curso = await prismaClient.curso.findUnique({
            where: {
                id,
            },
            include: {
                professor: {
                    select: {
                        p_nome: true,
                        u_nome: true,
                    },
                },
            },
        });

        return curso;
    },

    delete: async (id) => {
        const cursoDeletado = await prismaClient.curso.delete({
            where: {
                id,
            },
        });

        return cursoDeletado;
    },

    update: async (id, parcialCurso) => {
        if(parcialCurso.professor_id) {
            await prismaClient.professor.findUniqueOrThrow({
                where: {
                    id: parcialCurso.professor_id,
                },
            });
        }

        const cursoAtualizado = await prismaClient.curso.update({
            where: {
                id,
            },
            data: parcialCurso,
        });

        return cursoAtualizado;
    },
};
