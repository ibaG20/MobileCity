-- CreateTable
CREATE TABLE `transports` (
    `id` VARCHAR(191) NOT NULL,
    `registerDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `type` ENUM('Bicycle', 'Rollerblades', 'PedalBoat') NOT NULL,
    `status` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `leases` (
    `clientId` VARCHAR(191) NOT NULL,
    `transportId` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`clientId`, `transportId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `leases` ADD CONSTRAINT `leases_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `leases` ADD CONSTRAINT `leases_transportId_fkey` FOREIGN KEY (`transportId`) REFERENCES `transports`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
