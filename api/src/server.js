const express = require('express');
// changed the apollo server to -express
const { ApolloServer } = require("apollo-server-express");
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const path = require('path');
const { authMiddleware } = require('../utils/auth');

const { typeDefs, resolvers } = require('../schemas');
const db = require('../config/connection');
const { max } = require('lodash');

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
app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000"
}

// const requestEndpoint = 'https://randomuser.me/api/';
// const requestEndpoint = 'https://shielded-atoll-03134.herokuapp.com/api/users/62929c53b3ce2bd17280bec0';
const requestEndpoint = (bounds, current_token, activity_type, minClimb, maxClimb) => {
  console.log(`https://www.strava.com/api/v3/segments/explore?bounds=${bounds}&activity_type=${activity_type}&min_cat=${minClimb}&max_cat=${maxClimb}&access_token=${current_token}`)
  return `https://www.strava.com/api/v3/segments/explore?bounds=${bounds}&activity_type=${activity_type}&min_cat=${minClimb}&max_cat=${maxClimb}&access_token=${current_token}`;
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/src/index'));
});

app.get('/api/:bounds/:current_token/:activity_type/:minClimb/:maxClimb', cors(corsOptions), async (req, res) => {
  bounds = req.params.bounds;
  current_token = req.params.current_token;
  activity_type = req.params.activity_type;
  minClimb = req.params.minClimb;
  maxClimb = req.params.maxClimb;
  console.log(requestEndpoint(requestEndpoint(bounds, current_token, activity_type, minClimb, maxClimb)))
  const fetchOptions = {
    method: 'GET',
  }
  const response = await fetch(requestEndpoint(bounds, current_token, activity_type, minClimb, maxClimb), fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
})

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