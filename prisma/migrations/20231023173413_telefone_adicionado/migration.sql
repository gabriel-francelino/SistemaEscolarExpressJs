-- CreateTable
CREATE TABLE `Telefone` (
    `telefone` VARCHAR(191) NOT NULL,
    `aluno_id` INTEGER NULL,
    `professor_id` INTEGER NULL,

    PRIMARY KEY (`telefone`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Telefone` ADD CONSTRAINT `Telefone_professor_id_fkey` FOREIGN KEY (`professor_id`) REFERENCES `Professor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Telefone` ADD CONSTRAINT `Telefone_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Aluno`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
