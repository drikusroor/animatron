/*
  Warnings:

  - You are about to drop the column `forkedFromId` on the `AnimationHistory` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnimationHistory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "currentRevisionId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "forkedFromHistoryId" TEXT
);
INSERT INTO "new_AnimationHistory" ("createdAt", "currentRevisionId", "description", "id", "name", "updatedAt") SELECT "createdAt", "currentRevisionId", "description", "id", "name", "updatedAt" FROM "AnimationHistory";
DROP TABLE "AnimationHistory";
ALTER TABLE "new_AnimationHistory" RENAME TO "AnimationHistory";
CREATE UNIQUE INDEX "AnimationHistory_id_key" ON "AnimationHistory"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
