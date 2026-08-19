const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("../models/Product");
const Category = require("../models/Category");
const User = require("../models/User");

const products = [
  {
    title: "Apple MacBook Air M3",
    description: "Apple MacBook Air with M3 chip, 16GB RAM and 512GB SSD.",
    category: "electronics",
    brand: "Apple",
    condition: "LIKE_NEW",
    specifications: {
      processor: "Apple M3",
      ram: "16GB",
      storage: "512GB SSD",
      display: "13.6 inch",
    },
  },

  {
    title: "iPhone 16 Pro",
    description: "Apple iPhone 16 Pro in excellent condition.",
    category: "electronics",
    brand: "Apple",
    condition: "LIKE_NEW",
    specifications: {
      storage: "256GB",
      display: "6.3 inch",
      camera: "48MP",
    },
  },

  {
    title: "Sony Alpha A7 IV",
    description: "Full-frame mirrorless camera suitable for professional photography.",
    category: "electronics",
    brand: "Sony",
    condition: "GOOD",
    specifications: {
      sensor: "33MP Full Frame",
      video: "4K",
      lensMount: "Sony E",
    },
  },

  {
    title: "Royal Enfield Classic 350",
    description: "Classic 350 motorcycle in good condition.",
    category: "vehicles",
    brand: "Royal Enfield",
    condition: "GOOD",
    specifications: {
      engine: "349cc",
      fuel: "Petrol",
      transmission: "5 Speed",
    },
  },

  {
    title: "Honda City",
    description: "Honda City sedan with excellent maintenance history.",
    category: "vehicles",
    brand: "Honda",
    condition: "GOOD",
    specifications: {
      fuel: "Petrol",
      transmission: "Automatic",
      year: 2023,
    },
  },

  {
    title: "Vintage Mechanical Watch",
    description: "Vintage mechanical wristwatch suitable for collectors.",
    category: "collectibles",
    brand: "Vintage",
    condition: "USED",
    specifications: {
      movement: "Mechanical",
      material: "Stainless Steel",
    },
  },

  {
    title: "Traditional Indian Painting",
    description: "Hand-painted traditional Indian artwork.",
    category: "art",
    brand: "Independent Artist",
    condition: "NEW",
    specifications: {
      medium: "Acrylic",
      size: "24 x 36 inches",
    },
  },

  {
    title: "Premium Office Chair",
    description: "Ergonomic premium office chair.",
    category: "furniture",
    brand: "Ergonomic",
    condition: "LIKE_NEW",
    specifications: {
      material: "Mesh",
      adjustable: true,
      armrests: true,
    },
  },
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    // Find a normal user to act as seller
    const seller = await User.findOne({ role: "USER" });

    if (!seller) {
      console.log(
        "No USER found. Please register a user through Firebase first."
      );

      process.exit(1);
    }

    for (const product of products) {
      const category = await Category.findOne({
        slug: product.category,
      });

      if (!category) {
        console.log(
          `Category not found: ${product.category}`
        );
        continue;
      }

      await Product.findOneAndUpdate(
        {
          title: product.title,
        },
        {
          ...product,
          category: category._id,
          seller: seller._id,
          status: "LIVE",
        },
        {
          upsert: true,
          new: true,
        }
      );
    }

    console.log("Products seeded successfully");

    await mongoose.disconnect();
  } catch (error) {
    console.error("Product seed error:", error);
    process.exit(1);
  }
}

seedProducts();