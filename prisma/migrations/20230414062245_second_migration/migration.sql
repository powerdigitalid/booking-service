/*
  Warnings:

  - Made the column `password` on table `dummy` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `dummy` MODIFY `password` VARCHAR(191) NOT NULL;
