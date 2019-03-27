
const Query = {
  hops(parent, args, ctx) {
    return ctx.prisma.hops({
      ...args.where
    })
  },
  hopses(parent, args, ctx) {
    return ctx.prisma.hopses()
  },
  grains(parent, args, ctx) {
    return ctx.prisma.grains()
  }
}

module.exports = Query;
