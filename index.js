import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/UserRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
mongoose.connect("mongodb+srv://angga:angga1234@mern.f27przc.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected..."));

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));
