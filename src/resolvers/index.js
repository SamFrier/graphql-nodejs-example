const Query = require("./query")
const Mutation = require("./mutation")

const resolvers = {
  Query,
  Mutation
  // Link: {
  //   id: parent => parent.id,
  //   description: parent => parent.description,
  //   url: parent => parent.url
  // }
}

module.exports = resolvers
