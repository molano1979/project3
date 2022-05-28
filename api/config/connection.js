const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://winston:thoughtcrime@2plus2is5.e4cqa.mongodb.net/Mainframe?authMechanism=SCRAM-SHA-1",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
