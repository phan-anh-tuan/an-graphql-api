import {
  GraphQLSchema, GraphQLObjectType, GraphQLString,
  GraphQLList, GraphQLInt,
} from 'graphql';

const dice = () => 1 + Math.floor(Math.random() * 6);
const queryType = new GraphQLObjectType({
  name: 'rootQuery',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'world!',
    },
    diceRoll: {
      type: new GraphQLList(GraphQLInt),
      description: '**Simulate** a dice roll determined by count',
      args: {
        count: {
          type: GraphQLInt,
        },
      },
      resolve: (_, { count }) => {
        const output = [];
        for (let i = 0; i < count; i++) {
          output.push(dice());
        }
        return output;
      },
    },
    usersCount: {
      type: GraphQLInt,
      resolve: (_, args, request) => request.db.collection('users').count(),
    },
  },
});
const mySchema = new GraphQLSchema({
  query: queryType,
});
export default mySchema;
