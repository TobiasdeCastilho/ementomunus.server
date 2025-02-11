-- CreateEnum
CREATE TYPE "State" AS ENUM ('ACTIVE', 'BANNED', 'INACTIVE', 'WAITING');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "state" "State" NOT NULL DEFAULT 'WAITING';
