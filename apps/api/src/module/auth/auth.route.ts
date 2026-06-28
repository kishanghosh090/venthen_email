import { Router } from "express";

const apiRouter: Router = Router();

apiRouter.post("/login", (req, res) => {
  // Handle login logic here
  res.send("Login route");
});

apiRouter.post("/register", (req, res) => {
  // Handle registration logic here
  res.send("Register route");
});

export default apiRouter;