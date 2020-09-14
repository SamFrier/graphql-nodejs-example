const Query = require("./query")
const Mutation = require("./mutation")
const Subscription = require("./subscription")

const Link = require("./link")
const User = require("./user")
const Vote = require("./vote")

const resolvers = {
  Query,
  Mutation,
  Subscription,
  Link,
  User,
  Vote
}

module.exports = resolvers
