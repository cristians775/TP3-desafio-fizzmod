import express from "express";
import { errorHandler } from "./errors/errorHandler.js";
import { Routes } from "./routes/routes.js";
import notFound from "./consts/notFound.js";
const app = express();
const PORT = process.env.PORT || 8081;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
Routes.forEach((route) => app.use(route.path, route.route));
app.use(errorHandler);
app.get("*", (req, res) => res.send(notFound.ENDPOINT_NOT_FOUND));
app.post("*", (req, res) => res.send(notFound.ENDPOINT_NOT_FOUND));
app.put("*", (req, res) => res.send(notFound.ENDPOINT_NOT_FOUND));
app.delete("*", (req, res) => res.send(notFound.ENDPOINT_NOT_FOUND));
app.listen(PORT, () => console.log("Server running in port:", PORT));
