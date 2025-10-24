const mongoose = require("mongoose");
require("dotenv").config(); // make sure .env is loaded

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/Project";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectToMongo;
