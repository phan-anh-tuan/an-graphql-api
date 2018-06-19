# an-graphql-api
Learning about GraphQL. Happy learning

# Dependencies
To fetch dependencies
``` bash
npm install
```

# Usage
Start GraphQL server
``` bash
npm run start
```
Browse to http://localhost:4000/graphql

**To create a message**
``` javascript
mutation {
  createMessage(input: {
    content: "first message"
    author: "Tuan"
  }) {
    id
    content
    author
  }
}
```

**To update a message**
``` javascript
mutation {
  updateMessage(id: "71ae8ac3b634f3835e1a", input: {
    content: "updated message"
    author: "Tuan Phan"
  }){
    id
  }
}
```

**To get a message**
``` javascript
{
  getMessage(id: "71ae8ac3b634f3835e1a"){
    id
    content
    author
  }
}
```
