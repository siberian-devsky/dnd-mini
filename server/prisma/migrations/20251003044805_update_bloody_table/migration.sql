/*
  Warnings:

  - You are about to drop the `fight` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Round` DROP FOREIGN KEY `Round_fightId_fkey`;

-- DropIndex
DROP INDEX `Round_fightId_fkey` ON `Round`;

-- DropTable
DROP TABLE `fight`;

-- CreateTable
CREATE TABLE `Fight` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `maxRounds` INTEGER NOT NULL DEFAULT 3,
    `winner` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Round` ADD CONSTRAINT `Round_fightId_fkey` FOREIGN KEY (`fightId`) REFERENCES `Fight`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
