import crypto from 'crypto';

const fakeDatabase = {};
class Message {
  constructor(id, { content, author }) {
    this.content = content;
    this.author = author;
    this.id = id;
  }
}

export function createMessage({ input }) {
  // Create a random id for our "database".
  const id = crypto.randomBytes(10).toString('hex');
  fakeDatabase[id] = input;
  return new Message(id, input);
}

export function updateMessage({ id, input }) {
  if (!fakeDatabase[id]) {
    throw new Error(`no message exists with id ${id}`);
  }
  // This replaces all old data, but some apps might want partial update.
  fakeDatabase[id] = input;
  return new Message(id, input);
}

export function getMessage({ id }) {
  if (!fakeDatabase[id]) {
    throw new Error(`no message exists with id ${id}`);
  }
  return new Message(id, fakeDatabase[id]);
}
