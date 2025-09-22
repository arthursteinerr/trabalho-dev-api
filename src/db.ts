//Arthur Steiner Morais Silva

import express from "express";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

export default app;
