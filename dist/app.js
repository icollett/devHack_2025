"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const chatbotRoutes_1 = __importDefault(require("./api/v1/routes/chatbotRoutes"));
const gamesRoutes_1 = __importDefault(require("./api/v1/routes/gamesRoutes"));
const app = (0, express_1.default)();
// Use morgan for HTTP request logging
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("hello world");
});
app.use("/api/v1/games", gamesRoutes_1.default);
app.use("/api/v1/chatbot", chatbotRoutes_1.default);
exports.default = app;
