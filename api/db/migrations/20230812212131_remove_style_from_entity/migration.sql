/*
  Warnings:

  - You are about to drop the column `style` on the `AnimationEntity` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnimationEntity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "revisionId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "image" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "css" TEXT NOT NULL,
    CONSTRAINT "AnimationEntity_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "Animation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AnimationEntity" ("createdAt", "css", "description", "html", "id", "image", "name", "revisionId", "updatedAt", "uuid") SELECT "createdAt", "css", "description", "html", "id", "image", "name", "revisionId", "updatedAt", "uuid" FROM "AnimationEntity";
DROP TABLE "AnimationEntity";
ALTER TABLE "new_AnimationEntity" RENAME TO "AnimationEntity";
CREATE UNIQUE INDEX "AnimationEntity_uuid_key" ON "AnimationEntity"("uuid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
