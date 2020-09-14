const Query = require("./query")
const Mutation = require("./mutation")
const Subscription = require("./subscription")

const Link = require("./link")
const User = require("./user")

const resolvers = {
  Query,
  Mutation,
  Subscription,
  Link,
  User
}

module.exports = resolvers
