const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  await prisma.link.deleteMany()
  const newLink = await prisma.link.create({
    data: {
      description: "www.howtographql.com",
      url: "Fullstack tutorial for GraphQL"
    }
  })
  const allLinks = await prisma.link.findMany()
  console.log(allLinks)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
