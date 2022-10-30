/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[email,name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qualifications` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('ADMIN', 'CONTRACTOR', 'GUEST');

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "qualifications" JSONB NOT NULL,
ADD COLUMN     "role" "ROLE" NOT NULL DEFAULT 'GUEST',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "Bid" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT NOT NULL,
    "votedById" TEXT,

    CONSTRAINT "Bid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scope" (
    "id" TEXT NOT NULL,
    "containerId" TEXT NOT NULL,

    CONSTRAINT "Scope_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Container" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Container_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BidToContainer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Scope_containerId_key" ON "Scope"("containerId");

-- CreateIndex
CREATE UNIQUE INDEX "_BidToContainer_AB_unique" ON "_BidToContainer"("A", "B");

-- CreateIndex
CREATE INDEX "_BidToContainer_B_index" ON "_BidToContainer"("B");

-- CreateIndex
CREATE INDEX "User_name_idx" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_name_key" ON "User"("email", "name");

-- AddForeignKey
ALTER TABLE "Bid" ADD CONSTRAINT "Bid_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bid" ADD CONSTRAINT "Bid_votedById_fkey" FOREIGN KEY ("votedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scope" ADD CONSTRAINT "Scope_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BidToContainer" ADD CONSTRAINT "_BidToContainer_A_fkey" FOREIGN KEY ("A") REFERENCES "Bid"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BidToContainer" ADD CONSTRAINT "_BidToContainer_B_fkey" FOREIGN KEY ("B") REFERENCES "Container"("id") ON DELETE CASCADE ON UPDATE CASCADE;
