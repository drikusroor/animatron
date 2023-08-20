/*
  Warnings:

  - The primary key for the `AnimationHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `AnimationHistory` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Animation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "animationHistoryId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Animation_animationHistoryId_fkey" FOREIGN KEY ("animationHistoryId") REFERENCES "AnimationHistory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Animation" ("animationHistoryId", "createdAt", "description", "id", "name", "updatedAt", "uuid", "version") SELECT "animationHistoryId", "createdAt", "description", "id", "name", "updatedAt", "uuid", "version" FROM "Animation";
DROP TABLE "Animation";
ALTER TABLE "new_Animation" RENAME TO "Animation";
CREATE UNIQUE INDEX "Animation_uuid_key" ON "Animation"("uuid");
CREATE TABLE "new_AnimationHistory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "currentRevisionId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "forkedFromId" INTEGER
);
INSERT INTO "new_AnimationHistory" ("createdAt", "currentRevisionId", "description", "forkedFromId", "id", "name", "updatedAt") SELECT "createdAt", "currentRevisionId", "description", "forkedFromId", "id", "name", "updatedAt" FROM "AnimationHistory";
DROP TABLE "AnimationHistory";
ALTER TABLE "new_AnimationHistory" RENAME TO "AnimationHistory";
CREATE UNIQUE INDEX "AnimationHistory_id_key" ON "AnimationHistory"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
