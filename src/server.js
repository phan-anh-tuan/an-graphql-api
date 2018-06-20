import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schemas/schema2';
// import schema from './schemas/main';
import { getMessage, createMessage, updateMessage } from './resolvers/resolver2';
import connect from './db';

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

connect().then((mongoClient) => {
  app.use(
    '/graphql',
    (req, res, next) => {
      req.db = mongoClient.db('graphql');
      next();
    },
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true,
      formatError,
    }),
  );
  app.listen(4000, () => console.log('Running a GraphQL API server at localhost:4000/graphql'));
  process.on('exit', () => console.log('db connection closed'));
  process.on('SIGINT', () => {
    mongoClient.close(() => process.exit());
  });
});
