/*
  Warnings:

  - You are about to drop the `dummy` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Customer` MODIFY `status` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `dummy`;
