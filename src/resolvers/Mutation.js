const Mutation = {
  createGrain(root, args, context, info) {
    return context.prisma.createGrain({
      name: args.name,
      ebc: args.ebc,
      description: args.description
    })
  }
}

module.exports = Mutation;
