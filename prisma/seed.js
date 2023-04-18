const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.createMany({
    data: [
      {
        name: 'Alice',
        username: 'alice',
        password: 'alice',
      },
      {
        name: 'Admin',
        username: 'admin',
        password: 'admin',
      },
    ],
    skipDuplicates: true,
  });
  const customer = await prisma.customer.createMany({
    data: [
      {
        name: 'Alice',
        date: '2023-04-18',
        information: 'Information',
        duration: 1,
        queue: 1,
      },
      {
        name: 'Bob',
        date: '2023-04-18',
        information: 'Information',
        duration: 1,
        queue: 2,
      },
      {
        name: 'Clara',
        date: '2023-04-18',
        information: 'Information',
        duration: 1,
        queue: 3,
      },
      {
        name: 'Diana',
        date: '2023-04-18',
        information: 'Information',
        duration: 1,
        queue: 4,
      },
    ],
    skipDuplicates: true,
  });
  console.log({ user, customer });
} 

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
  });
  