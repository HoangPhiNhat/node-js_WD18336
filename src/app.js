import express from "express";
import { connect } from "./config/connect.js";
import router from "./routes/index.js";
const app = express();
console.log(process.env.DB_URI);
app.use(express.json());
connect(process.env.DB_URI);

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log("app listening on port " + process.env.PORT);
});
