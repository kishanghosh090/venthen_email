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
apiRouter.post("/logout", (req, res) => {
  // Handle logout logic here
  res.send("Logout route");
});

// is user exists
apiRouter.get("/user-exists/:username", (req, res) => {
  const { username } = req.params;
  // Check if user exists logic here
  res.send(`User exists check for: ${username}`);
});
export default apiRouter;
