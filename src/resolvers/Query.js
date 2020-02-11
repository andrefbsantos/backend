
const Query = {
  grains(root, args, context) {
    return context.prisma.grains()
  }
}

module.exports = Query;
