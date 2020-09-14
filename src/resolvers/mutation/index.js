const post = (parent, args, context) => {
  const newLink = context.prisma.link.create({
    data: {
      description: args.description,
      url: args.url
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
  post,
  updateLink,
  deleteLink
}
module.exports = Mutation
