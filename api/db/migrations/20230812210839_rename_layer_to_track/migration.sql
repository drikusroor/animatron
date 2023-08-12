/*
  Warnings:

  - You are about to drop the column `layerId` on the `AnimationTrackClip` table. All the data in the column will be lost.
  - Added the required column `trackId` to the `AnimationTrackClip` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnimationTrackClip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "trackId" INTEGER NOT NULL,
    "start" INTEGER NOT NULL,
    CONSTRAINT "AnimationTrackClip_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "AnimationTrack" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AnimationTrackClip" ("id", "start", "uuid") SELECT "id", "start", "uuid" FROM "AnimationTrackClip";
DROP TABLE "AnimationTrackClip";
ALTER TABLE "new_AnimationTrackClip" RENAME TO "AnimationTrackClip";
CREATE UNIQUE INDEX "AnimationTrackClip_uuid_key" ON "AnimationTrackClip"("uuid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
