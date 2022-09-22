/*
  Warnings:

  - A unique constraint covering the columns `[serialNumber]` on the table `transports` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `serialNumber` to the `transports` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transports` ADD COLUMN `serialNumber` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `transports_serialNumber_key` ON `transports`(`serialNumber`);
