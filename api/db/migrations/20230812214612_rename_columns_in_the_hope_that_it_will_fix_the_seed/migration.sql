/*
  Warnings:

  - You are about to drop the column `trackId` on the `AnimationTrackClip` table. All the data in the column will be lost.
  - Added the required column `animationTrackId` to the `AnimationTrackClip` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnimationTrackClip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "start" INTEGER NOT NULL,
    "animationTrackId" INTEGER NOT NULL,
    "animationEntityId" INTEGER NOT NULL,
    CONSTRAINT "AnimationTrackClip_animationTrackId_fkey" FOREIGN KEY ("animationTrackId") REFERENCES "AnimationTrack" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AnimationTrackClip_animationEntityId_fkey" FOREIGN KEY ("animationEntityId") REFERENCES "AnimationEntity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AnimationTrackClip" ("animationEntityId", "id", "start", "uuid") SELECT "animationEntityId", "id", "start", "uuid" FROM "AnimationTrackClip";
DROP TABLE "AnimationTrackClip";
ALTER TABLE "new_AnimationTrackClip" RENAME TO "AnimationTrackClip";
CREATE UNIQUE INDEX "AnimationTrackClip_uuid_key" ON "AnimationTrackClip"("uuid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
