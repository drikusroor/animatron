-- CreateTable
CREATE TABLE "Animation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "currentRevisionId" INTEGER
);

-- CreateTable
CREATE TABLE "AnimationRevision" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "animationId" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "AnimationRevision_animationId_fkey" FOREIGN KEY ("animationId") REFERENCES "Animation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AnimationRevisionLayer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "uuid" TEXT NOT NULL,
    "revisionId" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sortNumber" INTEGER NOT NULL,
    CONSTRAINT "AnimationRevisionLayer_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "AnimationRevision" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Animation_uuid_key" ON "Animation"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "AnimationRevision_uuid_key" ON "AnimationRevision"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "AnimationRevisionLayer_uuid_key" ON "AnimationRevisionLayer"("uuid");
