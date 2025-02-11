/*
  Warnings:

  - You are about to drop the column `first_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "QuestState" AS ENUM ('ACTIVE', 'COMPLETED', 'FAILED');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "PrizeType" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "signal" TEXT NOT NULL,

    CONSTRAINT "PrizeType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBalance" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "user_id" TEXT NOT NULL,
    "prize_type_id" TEXT NOT NULL,

    CONSTRAINT "UserBalance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBalanceUse" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "balance_id" TEXT NOT NULL,

    CONSTRAINT "UserBalanceUse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "state" "QuestState" NOT NULL DEFAULT 'ACTIVE',
    "limit" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "mainquest_id" TEXT,

    CONSTRAINT "Quest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestPrize" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "quest_id" TEXT NOT NULL,
    "type_id" TEXT NOT NULL,

    CONSTRAINT "QuestPrize_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserBalance" ADD CONSTRAINT "UserBalance_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBalance" ADD CONSTRAINT "UserBalance_prize_type_id_fkey" FOREIGN KEY ("prize_type_id") REFERENCES "PrizeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBalanceUse" ADD CONSTRAINT "UserBalanceUse_balance_id_fkey" FOREIGN KEY ("balance_id") REFERENCES "UserBalance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quest" ADD CONSTRAINT "Quest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quest" ADD CONSTRAINT "Quest_mainquest_id_fkey" FOREIGN KEY ("mainquest_id") REFERENCES "Quest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestPrize" ADD CONSTRAINT "QuestPrize_quest_id_fkey" FOREIGN KEY ("quest_id") REFERENCES "Quest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestPrize" ADD CONSTRAINT "QuestPrize_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "PrizeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
