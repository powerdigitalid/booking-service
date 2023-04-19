/*
  Warnings:

  - Added the required column `date` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Made the column `status` on table `Customer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Customer` ADD COLUMN `date` VARCHAR(191) NOT NULL,
    MODIFY `status` VARCHAR(191) NOT NULL;
