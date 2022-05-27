const Sequelize = require("sequelize");
const casual = require("casual");
const { _ } = require('lodash');

const db = new Sequelize("favorites", null, null, {
  dialect: "sqlite",
  storage: "./favorites.sqlite",
});

const AthleteModel = db.define("athlete", {
  athlete_type: { type: Sequelize.STRING },
  activity_type: { type: Sequelize.STRING },
});

const SegmentModel = db.define("segment", {
  name: { type: Sequelize.STRING },
  elevation_profile: { type: Sequelize.STRING },
  average_grade: { type: Sequelize.STRING },
  climb_length: { type: Sequelize.FLOAT },
  lat_location: { type: Sequelize.FLOAT },
  lon_location: { type: Sequelize.FLOAT },
});

AthleteModel.hasMany(SegmentModel);
SegmentModel.belongsTo(AthleteModel);

const Athlete = db.models.athlete;
const Segment = db.models.segment;

module.exports = { Athlete, Segment };
