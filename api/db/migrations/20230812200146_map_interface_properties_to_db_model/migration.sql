/*
  Warnings:

  - You are about to drop the column `start` on the `AnimationTrackKeyframe` table. All the data in the column will be lost.
  - Added the required column `sort` to the `AnimationTrackKeyframe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `AnimationTrack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `AnimationTrack` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnimationTrackKeyframe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "sort" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "css" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "animationTrackClipId" INTEGER,
    CONSTRAINT "AnimationTrackKeyframe_animationTrackClipId_fkey" FOREIGN KEY ("animationTrackClipId") REFERENCES "AnimationTrackClip" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AnimationTrackKeyframe" ("animationTrackClipId", "css", "duration", "html", "id", "style", "uuid") SELECT "animationTrackClipId", "css", "duration", "html", "id", "style", "uuid" FROM "AnimationTrackKeyframe";
DROP TABLE "AnimationTrackKeyframe";
ALTER TABLE "new_AnimationTrackKeyframe" RENAME TO "AnimationTrackKeyframe";
CREATE UNIQUE INDEX "AnimationTrackKeyframe_uuid_key" ON "AnimationTrackKeyframe"("uuid");
CREATE TABLE "new_AnimationTrack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "revisionId" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sortNumber" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "css" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    CONSTRAINT "AnimationTrack_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "Animation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AnimationTrack" ("createdAt", "css", "description", "html", "id", "image", "name", "revisionId", "sortNumber", "style", "updatedAt", "uuid", "version") SELECT "createdAt", "css", "description", "html", "id", "image", "name", "revisionId", "sortNumber", "style", "updatedAt", "uuid", "version" FROM "AnimationTrack";
DROP TABLE "AnimationTrack";
ALTER TABLE "new_AnimationTrack" RENAME TO "AnimationTrack";
CREATE UNIQUE INDEX "AnimationTrack_uuid_key" ON "AnimationTrack"("uuid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
