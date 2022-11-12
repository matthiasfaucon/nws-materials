-- AlterTable
ALTER TABLE `materials` MODIFY `denomination` VARCHAR(191) NULL,
    MODIFY `quantite` INTEGER NULL,
    MODIFY `availability` ENUM('AVAILABLE', 'RENTED') NULL DEFAULT 'AVAILABLE';
