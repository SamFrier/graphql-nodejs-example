let idCount = 0
let links = [
  {
    id: `link-${idCount++}`,
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
]

module.exports = { links, idCount }
