/*
  Warnings:

  - Added the required column `updatedAt` to the `AnimationHistory` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnimationHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "currentRevisionId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "forkedFromId" INTEGER
);
INSERT INTO "new_AnimationHistory" ("currentRevisionId", "description", "id", "name", "uuid") SELECT "currentRevisionId", "description", "id", "name", "uuid" FROM "AnimationHistory";
DROP TABLE "AnimationHistory";
ALTER TABLE "new_AnimationHistory" RENAME TO "AnimationHistory";
CREATE UNIQUE INDEX "AnimationHistory_uuid_key" ON "AnimationHistory"("uuid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
