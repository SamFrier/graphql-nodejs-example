const info = () => `This is the API of a Hackernews clone`

const feed = async (parent, args, context) => context.prisma.link.findMany()

const link = async (parent, args, context) => {
  const idAsInt = parseInt(args.id)
  if (isNaN(idAsInt)) {
    return null
  }
  return context.prisma.link.findOne({
    where: {
      id: idAsInt
    }
  })
}

const Query = {
  info,
  feed,
  link
}

module.exports = Query
