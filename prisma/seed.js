const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();

async function main() {
  const dummy = await prisma.dummy.createMany({
    data: [
      {
        name: 'Alice',
        email: 'alice@gmail.com',
        password: 'alice',
      },
      {
        name: 'Bob',
        email: 'bob@gmail.com',
        password: 'alice',
      },
    ],
    skipDuplicates: true,
  });
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
  console.log({ dummy, user });
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
  