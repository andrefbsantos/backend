
const Query = {
  hopses(root, args, context) {
    return context.prisma.hopses()
  },
  grains(root, args, context) {
    return context.prisma.grains()
  }
}

module.exports = Query;
