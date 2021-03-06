const info = () => `This is the API of a Hackernews clone`

const feed = async (parent, args, context) => {
  const whereClause = args.filter
    ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } }
        ]
      }
    : {}

  const links = await context.prisma.link.findMany({
    where: whereClause,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy
  })

  const count = await context.prisma.link.count({ where: whereClause })

  return { links, count }
}

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
