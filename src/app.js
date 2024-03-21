import express from "express";
import { connectDB } from "./config/connect.js";
import router from "./routes/index.js";
const app = express();
app.use(express.json());
connectDB("mongodb://localhost:27017/server");

app.use("/api", router);

app.listen(2121, () => {
  console.log("app listening on port " + 2121);
});
