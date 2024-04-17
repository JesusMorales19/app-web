import mongoose from "mongoose";
const MONGO_URL = "mongodb+srv://jesuhernan232:Jesus160504@cluster1.ysho4ut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

//Este archivo es para crear la conexion a base de datos
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect DB");
  } catch (error) {
    console.log(error);
  }
};
