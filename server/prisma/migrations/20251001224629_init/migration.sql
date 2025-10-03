-- CreateTable
CREATE TABLE `Player` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `wins` INTEGER NOT NULL,
    `losses` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fight` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `maxRounds` INTEGER NOT NULL DEFAULT 3,
    `winner` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Round` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fightId` INTEGER NOT NULL,
    `roundNum` INTEGER NOT NULL,
    `heroRoll` INTEGER NOT NULL,
    `villainRoll` INTEGER NOT NULL,
    `winner` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Round` ADD CONSTRAINT `Round_fightId_fkey` FOREIGN KEY (`fightId`) REFERENCES `fight`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
