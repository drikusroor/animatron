/*
  Warnings:

  - You are about to drop the column `style` on the `AnimationTrackKeyframe` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnimationTrackKeyframe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "sort" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "css" TEXT NOT NULL,
    "animationTrackClipId" INTEGER,
    CONSTRAINT "AnimationTrackKeyframe_animationTrackClipId_fkey" FOREIGN KEY ("animationTrackClipId") REFERENCES "AnimationTrackClip" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AnimationTrackKeyframe" ("animationTrackClipId", "css", "duration", "id", "sort", "uuid") SELECT "animationTrackClipId", "css", "duration", "id", "sort", "uuid" FROM "AnimationTrackKeyframe";
DROP TABLE "AnimationTrackKeyframe";
ALTER TABLE "new_AnimationTrackKeyframe" RENAME TO "AnimationTrackKeyframe";
CREATE UNIQUE INDEX "AnimationTrackKeyframe_uuid_key" ON "AnimationTrackKeyframe"("uuid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
