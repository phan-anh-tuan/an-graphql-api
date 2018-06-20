import { buildSchema } from 'graphql';

export default buildSchema(`
  input MessageInput {
    content: String
    author: String
  }
  type Message {
    "Get a Message"
    id: ID!
    content: String
    author: String
  }
  type Query {
    getMessage(id: ID!): Message
  }
  type Mutation {
    createMessage(input: MessageInput!): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`);
