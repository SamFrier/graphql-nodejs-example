const newLinkSubscribe = (parent, args, context) =>
  context.pubsub.asyncIterator("NEW_LINK")

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => payload
}

module.exports = { newLink }
