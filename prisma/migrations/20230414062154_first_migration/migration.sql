/*
  Warnings:

  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `dummy` ADD COLUMN `password` VARCHAR(191) NULL;
