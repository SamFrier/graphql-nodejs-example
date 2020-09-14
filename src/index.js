const { GraphQLServer } = require("graphql-yoga")
const { PrismaClient } = require("@prisma/client")
const resolvers = require("./resolvers")

const prisma = new PrismaClient()
const typeDefs = "./src/schema.graphql"

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { prisma }
})
server.start(() => console.log(`Server running on http://localhost:4000`))
