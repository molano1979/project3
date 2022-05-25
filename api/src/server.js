const { ApolloServer, gql, AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const { find, filter } = require("lodash");
// import { Athlete, Segment } from "./store";

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

const typeDefs = gql`
  type Athlete {
    id: Int!
    athlete_type: String!
    activity_type: String!
    segment: [Segment]!
  }

  type Segment {
    id: Int!
    name: String!
    elevation_profile: String!
    average_grade: Float!
    climb_length: Float!
    lat_location: Float!
    lon_location: Float!
    athlete: Athlete!
  }

  type Query {
    segments: [Segment!]!
    segment(id: Int!): Segment!
    athlete(id: Int!): Athlete!
  }

  type Mutation {
    addSegment(
      name: String!
      elevation_profile: String!
      average_grade: Float!
      climb_length: Float!
      lat_location: Float!
      lon_location: Float!
      athleteId: Int!
    ): Segment!
  }
`;

const resolvers = {
  Query: {
    segments: () => Segment.findAll(),
    segment: (_, args) => Segment.find({ where: args }),
    athlete: (_, args) => Athlete.find({ where: args }),
  },

  Athlete: {
    segments: (Athlete) => Athlete.getSegments(),
  },

  Segment: {
    Athlete: (segment) => segment.getAthlete(),
  },

  Mutation: {
    addSegment: async (
      _,
      { name, elevation_profile, average_grade, climb_length, athleteId },
      { user }
    ) => {
      try {
        const email = await user; // catching the reject from the user promise.
        const segment = await Segment.create({
          name: name,
          elevation_profile: elevation_profile,
          average_grade: average_grade,
          climb_length: climb_length,
          athleteId: athleteId,
        });

        return segment;
      } catch (e) {
        throw new AuthenticationError("You must be logged in to do this");
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // simple auth check on every request
    const token = req.headers.authorization;
    const user = new Promise((resolve, reject) => {
      jwt.verify(token, getKey, options, (err, decoded) => {
        if (err) {
          return reject(err);
        }
        resolve(decoded.email);
      });
    });

    return {
      user,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
