/*
  Warnings:

  - You are about to drop the `CategoriesOnBooks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `provider_account_id` on the `accounts` table. All the data in the column will be lost.
  - Added the required column `providerAccountId` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CategoriesOnBooks";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "categories_on_books" (
    "book_id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    PRIMARY KEY ("book_id", "categoryId"),
    CONSTRAINT "categories_on_books_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "categories_on_books_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_accounts" ("access_token", "expires_at", "id", "id_token", "provider", "refresh_token", "scope", "session_state", "token_type", "type", "user_id") SELECT "access_token", "expires_at", "id", "id_token", "provider", "refresh_token", "scope", "session_state", "token_type", "type", "user_id" FROM "accounts";
DROP TABLE "accounts";
ALTER TABLE "new_accounts" RENAME TO "accounts";
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "accounts"("provider", "providerAccountId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
