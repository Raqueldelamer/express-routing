import { Router } from "express";

const mainRoutes = new Router();

mainRoutes.get("/", (req, res) => {
    res.send("Hello from the main router!");
});
mainRoutes.get("/about", (req, res) => {
    res.send("About us.");
});

export default mainRoutes;