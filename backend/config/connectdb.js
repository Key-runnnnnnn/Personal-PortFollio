const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI, {});
    console.log(
      "MongoDB connected successfully at:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    setTimeout(connectdb, 3000);
  }
};

module.exports = connectdb;
