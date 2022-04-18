const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(process.env.MONGO_DB_URL);
};
