/*
  Warnings:

  - Added the required column `status` to the `leases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `leases` ADD COLUMN `status` BOOLEAN NOT NULL;
