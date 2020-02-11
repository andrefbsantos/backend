const Mutation = {
  createGrain(root, args, context, info) {
    return context.prisma.createGrain({
      name: args.name,
      ebc: args.ebc,
      description: args.description
    })
  },
  createBeer(root, args, context, info) {
    return context.prisma.createHops({
      type: args.type,
      name: args.name,
      brewery: args.brewery,
      description: args.description,
      abv: args.abv,
      ibu: args.ibu,
      ebc: args.ebc
    })
  },
  createHops(root, args, context, info) {
    console.log(args)
    return context.prisma.createHops({
      name: args.data.name,
      alphaAcids: args.data.alphaAcids,
      description: args.data.description
    })
  }
}

module.exports = Mutation;
