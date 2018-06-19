import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schemas/schema2';
import { getMessage, createMessage, updateMessage } from './resolvers/resolver2';

// The root provides a resolver function for each API endpoint
const root = {
  getMessage,
  createMessage,
  updateMessage,
};

const app = express();
const formatError = error => ({
  message: error.message,
  locations: error.locations,
  stack: error.stack ? error.stack.split('\n') : [],
  path: error.path,
});

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
  formatError,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
