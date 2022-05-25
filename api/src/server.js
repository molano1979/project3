const { ApolloServer, gql, AuthenticationError } = require("apollo-server");
const jwksClient = require("jwks-rsa");
const { find, filter } = require("lodash");
const { typeDefs, resolvers } = require('../schemas');
const { authMiddleware } = require('./utils/auth');

const client = jwksClient({
  jwksUri:
    "https://" + process.env.REACT_APP_AUTH0_DOMAIN + "/.well-known/jwks.json",
});

function getKey(header, cb) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

const options = {
  audience: process.env.REACT_APP_AUTH0_CLIENT_ID,
  issuer: "https://" + process.env.REACT_APP_AUTH0_DOMAIN,
  algorithms: ["RS256"],
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
