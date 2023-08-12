/*
  Warnings:

  - You are about to drop the `AnimationRevision` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AnimationRevisionLayer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AnimationRevisionLayerFrame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `currentRevisionId` on the `Animation` table. All the data in the column will be lost.
  - Added the required column `animationId` to the `Animation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Animation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `version` to the `Animation` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "AnimationRevision_uuid_key";

-- DropIndex
DROP INDEX "AnimationRevisionLayer_uuid_key";

-- DropIndex
DROP INDEX "AnimationRevisionLayerFrame_uuid_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AnimationRevision";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AnimationRevisionLayer";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AnimationRevisionLayerFrame";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "AnimationHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "currentRevisionId" INTEGER
);

-- CreateTable
CREATE TABLE "AnimationTrack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "revisionId" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sortNumber" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "css" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    CONSTRAINT "AnimationTrack_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "Animation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AnimationTrackClip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "layerId" INTEGER NOT NULL,
    "startFrame" INTEGER NOT NULL,
    CONSTRAINT "AnimationTrackClip_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "AnimationTrack" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AnimationTrackFrame" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "layerId" INTEGER NOT NULL,
    "css" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    CONSTRAINT "AnimationTrackFrame_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "AnimationTrack" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AnimationRevisionEntity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "revisionId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "image" TEXT NOT NULL,
    "css" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    CONSTRAINT "AnimationRevisionEntity_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "Animation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Animation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "animationId" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Animation_animationId_fkey" FOREIGN KEY ("animationId") REFERENCES "AnimationHistory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Animation" ("description", "id", "name", "uuid") SELECT "description", "id", "name", "uuid" FROM "Animation";
DROP TABLE "Animation";
ALTER TABLE "new_Animation" RENAME TO "Animation";
CREATE UNIQUE INDEX "Animation_uuid_key" ON "Animation"("uuid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "AnimationHistory_uuid_key" ON "AnimationHistory"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "AnimationTrack_uuid_key" ON "AnimationTrack"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "AnimationTrackClip_uuid_key" ON "AnimationTrackClip"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "AnimationTrackFrame_uuid_key" ON "AnimationTrackFrame"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "AnimationRevisionEntity_uuid_key" ON "AnimationRevisionEntity"("uuid");
