/*
  Warnings:

  - You are about to alter the column `type` on the `transports` table. The data in that column could be lost. The data in that column will be cast from `Enum("transports_type")` to `Int`.

*/
-- AlterTable
ALTER TABLE `transports` MODIFY `type` INTEGER NOT NULL;
