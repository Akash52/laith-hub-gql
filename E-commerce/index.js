const { ApolloServer, gql } = require('apollo-server');

//String,Int,Float,Boolean

const typeDefs = gql`
  type Query {
    hello: String
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello World!';
    },
    numberOfAnimals: () => {
      return 55;
    },
    price: () => {
      return 200.44;
    },
    isCool: () => {
      return false;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log('Server is reat at' + url);
});
