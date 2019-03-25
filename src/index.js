require('dotenv').config({ path: 'variables.env' });

const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
  },
  context: req => ({
    ...req,
    prisma,
  }),
});

// You can add options to your server, check the GraphQL-Yoga API
const options = {
  port: process.env.PORT || 4000,
  endpoint: '/graphql',
  playground: '/playground',
}

server.start(options, ({ port }) => console.log(`Server is running on http://localhost:${port}`))