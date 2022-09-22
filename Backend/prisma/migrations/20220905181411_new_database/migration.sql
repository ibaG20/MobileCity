/*
  Warnings:

  - The primary key for the `leases` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `leases` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `leases` DROP FOREIGN KEY `leases_clientId_fkey`;

-- DropForeignKey
ALTER TABLE `leases` DROP FOREIGN KEY `leases_transportId_fkey`;

-- AlterTable
ALTER TABLE `leases` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `clientId` INTEGER NULL,
    MODIFY `transportId` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `leases` ADD CONSTRAINT `leases_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `leases` ADD CONSTRAINT `leases_transportId_fkey` FOREIGN KEY (`transportId`) REFERENCES `transports`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
