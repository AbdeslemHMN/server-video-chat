import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({limit : "50mb" , extended: true }));





app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});