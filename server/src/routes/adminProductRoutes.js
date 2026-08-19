const express = require("express");
const router = express.Router();

// Destructure authMiddleware from the exported object
const { authMiddleware } = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductStatus,
} = require("../controllers/adminProductController");

// Use them in your router
router.use(authMiddleware);
router.use(adminMiddleware);

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id/status", updateProductStatus);

module.exports = router;