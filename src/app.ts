import express, { Express } from "express";
import morgan from "morgan";

import chatbotRoutes from "./api/v1/routes/chatbotRoutes"
import gamesRoutes from "./api/v1/routes/gamesRoutes"


const app: Express = express();


// Use morgan for HTTP request logging
app.use(morgan("combined"));
app.use(express.json());


app.use("api/v1/games", gamesRoutes)
app.use("api/v1/chatbot", chatbotRoutes)
