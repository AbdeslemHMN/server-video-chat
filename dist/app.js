import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import cors from "cors";
import morgan from "morgan";
import { Server } from "socket.io";
import http from "http";
const app = express();
const server = http.createServer(app);
dotenv.config();
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
const PORT = process.env.PORT || 5000;
//middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use("/api", router);
export { io, server };
//# sourceMappingURL=app.js.map