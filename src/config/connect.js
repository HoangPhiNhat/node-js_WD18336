import mongoose from "mongoose";

export const connect = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("successfully");
  } catch (error) {
    console.log("error: " + error);
  }
};
