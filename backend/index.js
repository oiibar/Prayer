import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cityRoutes from "./routes/cities.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", cityRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
