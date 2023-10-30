-- DropIndex
DROP INDEX `Matricula_aluno_id_fkey` ON `matricula`;

-- DropIndex
DROP INDEX `Matricula_curso_id_aluno_id_key` ON `matricula`;

-- AlterTable
ALTER TABLE `matricula` ADD PRIMARY KEY (`curso_id`, `aluno_id`);

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_curso_id_fkey` FOREIGN KEY (`curso_id`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
