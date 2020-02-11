
const Query = {
  beers(root, args, context) {
    return context.prisma.beers()
  },
  hopses(root, args, context) {
    return context.prisma.hopses()
  },
  grains(root, args, context) {
    return context.prisma.grains()
  },
}

module.exports = Query;
