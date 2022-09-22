/*
  Warnings:

  - The primary key for the `clients` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `clients` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `leases` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `clientId` on the `leases` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `transportId` on the `leases` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `transports` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `transports` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `leases` DROP FOREIGN KEY `leases_clientId_fkey`;

-- DropForeignKey
ALTER TABLE `leases` DROP FOREIGN KEY `leases_transportId_fkey`;

-- AlterTable
ALTER TABLE `clients` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `leases` DROP PRIMARY KEY,
    MODIFY `clientId` INTEGER NOT NULL,
    MODIFY `transportId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`clientId`, `transportId`);

-- AlterTable
ALTER TABLE `transports` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `leases` ADD CONSTRAINT `leases_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `leases` ADD CONSTRAINT `leases_transportId_fkey` FOREIGN KEY (`transportId`) REFERENCES `transports`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
