import express, { type Express } from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";

const app: Express = express();

app.use(express.json({ limit: "50mb" }));

// cors policies
app.use(cors());

app.use(express.urlencoded({ limit: "50mb", extended: true }));

// logging
app.use(morgan("dev"));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});