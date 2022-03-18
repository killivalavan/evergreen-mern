import express from "express";
import {
  getProduct,
  getProductsById,
} from "../Controllers/ProductController.js";
const router = express.Router();
import Products from "../Models/product.js";

router.route("/").get(getProduct);
router.route("/:id").get(getProductsById);

export default router;
