import express from "express";
const router = express.Router();
import Products from "../Models/product.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.json({ message: "Product not Found" });
  }
});

export default router;
