-- CreateTable
CREATE TABLE `lugares_turisticos` (
    `id_lugares_turisticos` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `direction` VARCHAR(191) NOT NULL,
    `travelers_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_lugares_turisticos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lugares_turisticos` ADD CONSTRAINT `lugares_turisticos_travelers_id_fkey` FOREIGN KEY (`travelers_id`) REFERENCES `travelers`(`id_travelers`) ON DELETE RESTRICT ON UPDATE CASCADE;
