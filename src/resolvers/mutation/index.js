const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const { getUserId, APP_SECRET } = require("../../utils")

const signup = async (parent, args, context) => {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.user.create({
    data: {
      ...args,
      password
    }
  })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return { token, user }
}

const login = async (parent, args, context) => {
  const user = await context.prisma.user.findOne({
    where: {
      email: args.email
    }
  })
  if (!user) {
    throw new Error("No user found")
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error("Invalid password")
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return { token, user }
}

const post = (parent, args, context) => {
  const userId = getUserId(context)

  const newLink = context.prisma.link.create({
    data: {
      description: args.description,
      url: args.url,
      postedBy: { connect: { id: userId } }
    }
  })
  return newLink
}

const updateLink = async (parent, args, context) => {
  const idAsInt = parseInt(args.id)
  if (isNaN(idAsInt)) {
    return null
  }
  const updatedLink = await context.prisma.link
    .update({
      where: {
        id: idAsInt
      },
      data: {
        url: args.url,
        description: args.description
      }
    })
    .catch(e => {
      if (e.code === "P2016") {
        console.log(e.meta.details)
        return null
      } else {
        throw e
      }
    })
  return updatedLink
}

const deleteLink = async (parent, args, context) => {
  const idAsInt = parseInt(args.id)
  if (isNaN(idAsInt)) {
    return null
  }
  const deletedLink = await context.prisma.link
    .delete({
      where: {
        id: idAsInt
      }
    })
    .catch(e => {
      if (e.code === "P2016") {
        console.log(e.meta.details)
        return null
      } else {
        throw e
      }
    })
  return deletedLink
}

const Mutation = {
  signup,
  login,
  post,
  updateLink,
  deleteLink
}
module.exports = Mutation
