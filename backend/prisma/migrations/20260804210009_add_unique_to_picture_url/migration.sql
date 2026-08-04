/*
  Warnings:

  - A unique constraint covering the columns `[pictureUrl]` on the table `Picture` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Picture_pictureUrl_key" ON "Picture"("pictureUrl");
