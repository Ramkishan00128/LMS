import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//Using middleware

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
app.use(
  cors({
    // origin: process.env.FRONTEND_URL,
    // origin: "*",
    origin: "https://frontend-ramkishan00128-gmailcom.vercel.app/",

    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// app.use(cors());

config({
  path: "./config/config.env",
});

//Importing & Using Routes
import course from "./routes/CourseRoutes.js";
import user from "./routes/userRoute.js";
import payment from "./routes/paymentRoutes.js";
import other from "./routes/otherRoutes.js";

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use("/api/v1", other);

export default app;

app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  )
);

app.use(ErrorMiddleware);
