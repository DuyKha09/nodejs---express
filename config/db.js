const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(`Database connected successfully! `);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
