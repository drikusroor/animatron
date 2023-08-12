/*
  Warnings:

  - You are about to drop the column `css` on the `AnimationTrack` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `AnimationTrack` table. All the data in the column will be lost.
  - You are about to drop the column `html` on the `AnimationTrack` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `AnimationTrack` table. All the data in the column will be lost.
  - You are about to drop the column `style` on the `AnimationTrack` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnimationTrack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "revisionId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sortNumber" INTEGER NOT NULL,
    "color" TEXT,
    CONSTRAINT "AnimationTrack_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "Animation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AnimationTrack" ("color", "createdAt", "description", "id", "name", "revisionId", "sortNumber", "updatedAt", "uuid") SELECT "color", "createdAt", "description", "id", "name", "revisionId", "sortNumber", "updatedAt", "uuid" FROM "AnimationTrack";
DROP TABLE "AnimationTrack";
ALTER TABLE "new_AnimationTrack" RENAME TO "AnimationTrack";
CREATE UNIQUE INDEX "AnimationTrack_uuid_key" ON "AnimationTrack"("uuid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
