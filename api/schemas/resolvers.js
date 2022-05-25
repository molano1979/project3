const { AuthenticationError } = require('apollo-server');
const { } = require('../models');
const { signToken } = require('../utils/auth');
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const { find, filter } = require("lodash");
import { Athlete, Segment } from "./store";

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

module.exports = resolvers;