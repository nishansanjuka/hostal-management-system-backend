-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'STANDARD_USER');

-- CreateEnum
CREATE TYPE "GenderType" AS ENUM ('MALE', 'FEMALE', 'MIXED');

-- CreateEnum
CREATE TYPE "Year" AS ENUM ('FIRST', 'SECOND', 'THIRD', 'FOURTH');

-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'STANDARD_USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "studentId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "roomId" INTEGER,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("studentId")
);

-- CreateTable
CREATE TABLE "PrivateBoardingOwner" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PrivateBoardingOwner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hostel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "genderType" "GenderType" NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "location" TEXT DEFAULT 'Not specified',
    "year" "Year" NOT NULL,

    CONSTRAINT "Hostel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 2,
    "beds" INTEGER NOT NULL,
    "hostelId" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExchangeRequest" (
    "id" SERIAL NOT NULL,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "fromUserId" TEXT NOT NULL,
    "toUserId" TEXT,

    CONSTRAINT "ExchangeRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrivateBoarding" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'Not specified',
    "distance" DOUBLE PRECISION NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "PrivateBoarding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoardingRoom" (
    "id" SERIAL NOT NULL,
    "capacity" INTEGER NOT NULL,
    "facilities" TEXT NOT NULL,
    "boardingId" INTEGER NOT NULL,
    "rent" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "BoardingRoom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentId_key" ON "Student"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userId_key" ON "Student"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PrivateBoardingOwner_userId_key" ON "PrivateBoardingOwner"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Hostel_name_key" ON "Hostel"("name");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateBoardingOwner" ADD CONSTRAINT "PrivateBoardingOwner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_hostelId_fkey" FOREIGN KEY ("hostelId") REFERENCES "Hostel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExchangeRequest" ADD CONSTRAINT "ExchangeRequest_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "Student"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExchangeRequest" ADD CONSTRAINT "ExchangeRequest_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "Student"("studentId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateBoarding" ADD CONSTRAINT "PrivateBoarding_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "PrivateBoardingOwner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardingRoom" ADD CONSTRAINT "BoardingRoom_boardingId_fkey" FOREIGN KEY ("boardingId") REFERENCES "PrivateBoarding"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
