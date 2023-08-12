/*
  Warnings:

  - You are about to drop the `AnimationTrackFrame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `startFrame` on the `AnimationTrackClip` table. All the data in the column will be lost.
  - Added the required column `start` to the `AnimationTrackClip` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "AnimationTrackFrame_uuid_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AnimationTrackFrame";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "AnimationTrackKeyframe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "start" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "css" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "animationTrackClipId" INTEGER,
    CONSTRAINT "AnimationTrackKeyframe_animationTrackClipId_fkey" FOREIGN KEY ("animationTrackClipId") REFERENCES "AnimationTrackClip" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnimationTrackClip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "layerId" INTEGER NOT NULL,
    "start" INTEGER NOT NULL,
    CONSTRAINT "AnimationTrackClip_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "AnimationTrack" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AnimationTrackClip" ("id", "layerId", "uuid") SELECT "id", "layerId", "uuid" FROM "AnimationTrackClip";
DROP TABLE "AnimationTrackClip";
ALTER TABLE "new_AnimationTrackClip" RENAME TO "AnimationTrackClip";
CREATE UNIQUE INDEX "AnimationTrackClip_uuid_key" ON "AnimationTrackClip"("uuid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "AnimationTrackKeyframe_uuid_key" ON "AnimationTrackKeyframe"("uuid");
