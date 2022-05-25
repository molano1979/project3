const express = require('express');
// changed the apollo server to -express
const { ApolloServer } = require("apollo-server-express");
const path = require('path');
const { authMiddleware } = require('../utils/auth');

const { typeDefs, resolvers } = require('../schemas');
const db = require('../config/connection');

const PORT = 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// added for express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
}

startApolloServer(typeDefs, resolvers);