import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Get users route");
});

router.get("/:userId", (req, res) => {
  res.send(`Get user by Id route: ${req.params.userId}`);
});

router.post("/", (req, res) => {
  res.send("Post users route");
});

router.put("/:userId", (req, res) => {
  res.send(`Put user by Id route: ${req.params.userId}`);
});

router.delete("/:userId", (req, res) => {
  res.send(`Delete user by Id route: ${req.params.userId}`);
});


export default router;
