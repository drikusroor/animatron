/*
  Warnings:

  - Added the required column `css` to the `AnimationRevisionLayer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `html` to the `AnimationRevisionLayer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `AnimationRevisionLayer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `style` to the `AnimationRevisionLayer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "AnimationRevisionLayerFrame" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "layerId" INTEGER NOT NULL,
    "css" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    CONSTRAINT "AnimationRevisionLayerFrame_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "AnimationRevisionLayer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnimationRevisionLayer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "revisionId" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sortNumber" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "css" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    CONSTRAINT "AnimationRevisionLayer_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "AnimationRevision" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AnimationRevisionLayer" ("createdAt", "description", "id", "name", "revisionId", "sortNumber", "updatedAt", "uuid", "version") SELECT "createdAt", "description", "id", "name", "revisionId", "sortNumber", "updatedAt", "uuid", "version" FROM "AnimationRevisionLayer";
DROP TABLE "AnimationRevisionLayer";
ALTER TABLE "new_AnimationRevisionLayer" RENAME TO "AnimationRevisionLayer";
CREATE UNIQUE INDEX "AnimationRevisionLayer_uuid_key" ON "AnimationRevisionLayer"("uuid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "AnimationRevisionLayerFrame_uuid_key" ON "AnimationRevisionLayerFrame"("uuid");
