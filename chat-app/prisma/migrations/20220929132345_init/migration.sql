-- CreateTable
CREATE TABLE "UserBase" (
    "id" UUID NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "UserBase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserBase_username_key" ON "UserBase"("username");
