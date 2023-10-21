/*
  Warnings:

  - A unique constraint covering the columns `[ra]` on the table `Aluno` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Aluno_ra_key` ON `Aluno`(`ra`);
