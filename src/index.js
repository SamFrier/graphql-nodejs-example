const { GraphQLServer, PubSub } = require("graphql-yoga")
const { PrismaClient } = require("@prisma/client")
const resolvers = require("./resolvers")

const prisma = new PrismaClient()
const pubsub = new PubSub()
const typeDefs = "./src/schema.graphql"

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: request => ({ ...request, prisma, pubsub })
})
server.start(() => console.log(`Server running on http://localhost:4000`))
