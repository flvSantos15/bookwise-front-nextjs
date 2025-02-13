import { prisma } from '@/libs/prisma'

import { books } from '../src/constants/books'
import { categories } from '../src/constants/categories'
import { ratings } from '../src/constants/ratings'
import { users } from '../src/constants/users'

async function main() {
  await prisma.rating.deleteMany()
  await prisma.user.deleteMany()
  await prisma.categoriesOnBooks.deleteMany()
  await prisma.category.deleteMany()
  await prisma.book.deleteMany()

  const usersSeed = users.map((user) => {
    return prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        avatar_url: user.avatar_url
      }
    })
  })

  const categoriesSeed = categories.map((category) => {
    return prisma.category.create({
      data: {
        name: category.name,
        id: category.id
      }
    })
  })

  const booksSeed = books.map((book) => {
    return prisma.book.create({
      data: {
        id: book.id,
        name: book.name,
        author: book.author,
        summary: book.summary,
        cover_url: book.cover_url,
        total_pages: book.total_pages,
        categories: {
          create: [
            ...book.categories.map((category) => {
              return {
                category: {
                  connect: {
                    id: category.id
                  }
                }
              }
            })
          ]
        }
      }
    })
  })

  const ratingsSeed = ratings.map((rating) => {
    return prisma.rating.create({
      data: {
        id: rating.id,
        rate: rating.rate,
        description: rating.description,
        user: {
          connect: { id: rating.user_id }
        },
        book: {
          connect: { id: rating.book_id }
        }
      }
    })
  })

  await prisma.$transaction([
    ...categoriesSeed,
    ...booksSeed,
    ...usersSeed,
    ...ratingsSeed
  ])
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
