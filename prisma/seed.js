const PrismaClient = require('@prisma/client').PrismaClient
const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'Alice',
        email: ' alice@gmail.com',
      },
      {
        name: 'Bob',
        email: 'bob@gmail.com',
      },
    ],
    skipDuplicates: true,
  })
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