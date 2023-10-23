const prisma = require('@prisma/client');

const prismaClient = new prisma.PrismaClient();

module.exports = {
    create: async (curso) => {
        console.log(curso);
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
                        u_nome: true
                    }
                }
            }
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
                        u_nome: true
                    }
                }
            }
        })

        return curso
    },

    delete: async (id) => {
        const cursoDeletado = await prismaClient.curso.delete({
            where: {
                id,
            }
        })

        return cursoDeletado;
    },

    update: async (id, parcialcurso) => {
        const cursoAtualizado = await prismaClient.curso.update({
            where: {
                id
            },
            data: parcialcurso
        });

        return cursoAtualizado;
    }
};