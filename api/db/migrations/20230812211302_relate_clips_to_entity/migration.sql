/*
  Warnings:

  - You are about to drop the `AnimationRevisionEntity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `html` on the `AnimationTrackKeyframe` table. All the data in the column will be lost.
  - Added the required column `animationEntityId` to the `AnimationTrackClip` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "AnimationRevisionEntity_uuid_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AnimationRevisionEntity";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "AnimationEntity" (
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
    CONSTRAINT "AnimationEntity_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "Animation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnimationTrackClip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "trackId" INTEGER NOT NULL,
    "start" INTEGER NOT NULL,
    "animationEntityId" INTEGER NOT NULL,
    CONSTRAINT "AnimationTrackClip_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "AnimationTrack" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AnimationTrackClip_animationEntityId_fkey" FOREIGN KEY ("animationEntityId") REFERENCES "AnimationEntity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AnimationTrackClip" ("id", "start", "trackId", "uuid") SELECT "id", "start", "trackId", "uuid" FROM "AnimationTrackClip";
DROP TABLE "AnimationTrackClip";
ALTER TABLE "new_AnimationTrackClip" RENAME TO "AnimationTrackClip";
CREATE UNIQUE INDEX "AnimationTrackClip_uuid_key" ON "AnimationTrackClip"("uuid");
CREATE TABLE "new_AnimationTrackKeyframe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "sort" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "css" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "animationTrackClipId" INTEGER,
    CONSTRAINT "AnimationTrackKeyframe_animationTrackClipId_fkey" FOREIGN KEY ("animationTrackClipId") REFERENCES "AnimationTrackClip" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AnimationTrackKeyframe" ("animationTrackClipId", "css", "duration", "id", "sort", "style", "uuid") SELECT "animationTrackClipId", "css", "duration", "id", "sort", "style", "uuid" FROM "AnimationTrackKeyframe";
DROP TABLE "AnimationTrackKeyframe";
ALTER TABLE "new_AnimationTrackKeyframe" RENAME TO "AnimationTrackKeyframe";
CREATE UNIQUE INDEX "AnimationTrackKeyframe_uuid_key" ON "AnimationTrackKeyframe"("uuid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "AnimationEntity_uuid_key" ON "AnimationEntity"("uuid");
