/*
  Warnings:

  - You are about to drop the column `EmailVerified` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "EmailVerified",
ADD COLUMN     "emailVerified" TIMESTAMP(3);
