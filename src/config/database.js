const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nagababo_db_user:WsxRbDC3WZpStEOL@cluster0.i1xaite.mongodb.net/devTinder",
  );
};

module.exports = connectDB;

