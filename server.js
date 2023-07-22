const path = require('path');
const express = require('express');

const { graphqlHTTP } = require('express-graphql');

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync('**/*', {
  extensions: ['graphql'],
  // ignoreIndex: true,
  // cwd: path.join(__dirname, 'types'),
});

const resolversArray = loadFilesSync('**/*.resolvers', { extensions: ['js'] });

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers:resolversArray,
});

// The root provides a resolver function for each API endpoint
const root = {
  products: require('./products/products.model'),
  orders: require('./orders/orders.model'),
};

const app = express();
app.use(express.json()); // Parse incoming JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => console.log('GraphQL server running on port 4000'));
