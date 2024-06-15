-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_phoneNumber_key`(`phoneNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `studentId` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `roomId` INTEGER NULL,

    UNIQUE INDEX `Student_studentId_key`(`studentId`),
    UNIQUE INDEX `Student_userId_key`(`userId`),
    PRIMARY KEY (`studentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrivateBoardingOwner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `PrivateBoardingOwner_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hostel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `genderType` ENUM('MALE', 'FEMALE', 'MIXED') NOT NULL,
    `distance` DOUBLE NOT NULL,
    `location` VARCHAR(191) NULL DEFAULT 'Not specified',
    `year` ENUM('FIRST', 'SECOND', 'THIRD', 'FOURTH') NOT NULL,

    UNIQUE INDEX `Hostel_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `capacity` INTEGER NOT NULL,
    `beds` INTEGER NOT NULL,
    `hostelId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExchangeRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `fromUserId` VARCHAR(191) NOT NULL,
    `toUserId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrivateBoarding` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL DEFAULT 'Not specified',
    `distance` DOUBLE NOT NULL,
    `ownerId` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BoardingRoom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `capacity` INTEGER NOT NULL,
    `facilities` VARCHAR(191) NOT NULL,
    `boardingId` INTEGER NOT NULL,
    `rent` DOUBLE NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PrivateBoardingOwner` ADD CONSTRAINT `PrivateBoardingOwner_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_hostelId_fkey` FOREIGN KEY (`hostelId`) REFERENCES `Hostel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExchangeRequest` ADD CONSTRAINT `ExchangeRequest_fromUserId_fkey` FOREIGN KEY (`fromUserId`) REFERENCES `Student`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExchangeRequest` ADD CONSTRAINT `ExchangeRequest_toUserId_fkey` FOREIGN KEY (`toUserId`) REFERENCES `Student`(`studentId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PrivateBoarding` ADD CONSTRAINT `PrivateBoarding_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `PrivateBoardingOwner`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BoardingRoom` ADD CONSTRAINT `BoardingRoom_boardingId_fkey` FOREIGN KEY (`boardingId`) REFERENCES `PrivateBoarding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
