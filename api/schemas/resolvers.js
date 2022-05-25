const { AuthenticationError } = require('apollo-server');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { find, filter, _} = require("lodash");
const { Athlete, Segment } = require('../src/store');

const resolvers = {
  Query: {
    segments: () => Segment.findAll(),
    segment: (_, args) => Segment.find({ where: args }),
    athlete: (_, args) => Athlete.find({ where: args }),
  },

  Athlete: {
    segments: async (Athlete) => Athlete.getSegments(),
  },

  Segment: {
    Athlete: (segment) => segment.getAthlete(),
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return {token, user};
    },
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

module.exports = resolvers;