const Mutation = {
  createGrain(root, args, context, info) {
    return context.prisma.createGrain({
      name: args.name,
      ebc: args.ebc,
      description: args.description
    })
  },
  createBeer(root, args, context, info) {
    const payload = {
      type: args.type,
      name: args.name,
      brewery: args.brewery,
      description: args.description,
      abv: args.abv,
      ibu: args.ibu,
      ebc: args.ebc,
      hopses: {
        connect: args.hopses.map(id => ({ id }))
      },
      grains: {
        connect: args.grains.map(id => ({ id }))
      }
    }

    return context.prisma.createBeer(payload)
  },
  createHops(root, args, context, info) {
    return context.prisma.createHops({
      name: args.data.name,
      alphaAcids: args.data.alphaAcids,
      description: args.data.description
    })
  }
}

module.exports = Mutation;
