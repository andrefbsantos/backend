const Mutation = {
  createGrain(parent, args, ctx) {
    return ctx.prisma.createGrain({
        ...args.data
    })
  },
  createHops(parent, args, ctx) {
    return ctx.prisma.createHops({
        ...args.data
    })
  },
  updateHops(parent, args, ctx) {
    console.log(args)
    return ctx.prisma.updateHops({
        data: {...args.data},
        where: { ...args.where}
    })
  }
}

module.exports = Mutation;
