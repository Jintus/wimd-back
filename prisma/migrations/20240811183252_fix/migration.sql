/*
  Warnings:

  - A unique constraint covering the columns `[userId,name]` on the table `Location` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "QuantityUnit" AS ENUM ('GRAM', 'LITER', 'UNIT');

-- CreateTable
CREATE TABLE "Drawer" (
    "locationId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Drawer_pkey" PRIMARY KEY ("locationId","name")
);

-- CreateTable
CREATE TABLE "SealedFood" (
    "barCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit" "QuantityUnit" NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SealedFood_pkey" PRIMARY KEY ("barCode")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_userId_name_key" ON "Location"("userId", "name");

-- AddForeignKey
ALTER TABLE "Drawer" ADD CONSTRAINT "Drawer_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
