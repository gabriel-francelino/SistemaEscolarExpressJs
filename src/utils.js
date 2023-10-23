module.exports = {
    buildTelefonePrismaQuery: (telefones) => {
        return telefones && {
            createMany: {
                data: telefones?.map(telefone => ({ telefone })),
            }
        }
    }
}