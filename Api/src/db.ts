import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    };
    const db = await mongoose.connect(
      `mongodb://127.0.0.1:27017/dani`,
      mongooseOptions
    );

    console.log("db is connected to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
