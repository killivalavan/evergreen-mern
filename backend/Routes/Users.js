import express from "express";
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    res.send({
      email,
      password,
    });
  } catch (err) {
    res.json({ message: "User not Found" });
  }
});

export default router;
