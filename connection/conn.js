const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const DATABASE_URI = process.env.DATABASE_URI;
    await mongoose.connect(`${process.env.DATABASE_URI}`);

    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("MongoDB connection failes:", error);
    process.exit(1);
  }
};

connectDB();
