-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NOT NULL,
    `prenom` VARCHAR(255) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `denomination` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `availability` ENUM('AVAILABLE', 'RENTED') NOT NULL DEFAULT 'AVAILABLE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Materials_denomination_key`(`denomination`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rentals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `materialsId` INTEGER NOT NULL,
    `beginingRentals` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endingRentals` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Rentals` ADD CONSTRAINT `Rentals_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rentals` ADD CONSTRAINT `Rentals_materialsId_fkey` FOREIGN KEY (`materialsId`) REFERENCES `Materials`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
