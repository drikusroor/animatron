/*
  Warnings:

  - You are about to drop the column `animationId` on the `Animation` table. All the data in the column will be lost.
  - Added the required column `animationHistoryId` to the `Animation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Animation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "animationHistoryId" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Animation_animationHistoryId_fkey" FOREIGN KEY ("animationHistoryId") REFERENCES "AnimationHistory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Animation" ("createdAt", "description", "id", "name", "updatedAt", "uuid", "version") SELECT "createdAt", "description", "id", "name", "updatedAt", "uuid", "version" FROM "Animation";
DROP TABLE "Animation";
ALTER TABLE "new_Animation" RENAME TO "Animation";
CREATE UNIQUE INDEX "Animation_uuid_key" ON "Animation"("uuid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
