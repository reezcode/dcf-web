-- CreateTable
CREATE TABLE `lkti` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `id_ketua` INTEGER NOT NULL,
    `nama_tim` VARCHAR(191) NOT NULL,
    `nama_anggota1` VARCHAR(191) NOT NULL,
    `nama_anggota2` VARCHAR(191) NOT NULL,
    `email_anggota1` VARCHAR(191) NOT NULL,
    `email_anggota2` VARCHAR(191) NOT NULL,
    `asal_instansi` VARCHAR(191) NOT NULL,
    `link_abstrak` VARCHAR(191) NOT NULL,
    `link_fullpaper` VARCHAR(191) NOT NULL,
    `nilai_abstrak` INTEGER NOT NULL,
    `nilai_fullpaper` INTEGER NOT NULL,
    `bukti_pembayaran` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kompetisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `asal_instansi` VARCHAR(191) NOT NULL,
    `nilai_ujicoba` INTEGER NOT NULL,
    `nilai_ujian` INTEGER NOT NULL,
    `bukti_pembayaran` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `kompetisi_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `semnas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `asal_instansi` VARCHAR(191) NOT NULL,
    `no_hp` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `semnas_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_lomba` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `no_hp` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `asal_sekolah` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `ktm` VARCHAR(191) NOT NULL,
    `reset_token` VARCHAR(191) NOT NULL,
    `reset_token_date` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
