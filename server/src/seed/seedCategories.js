const mongoose = require("mongoose");
const Category = require("../models/Category");
require("dotenv").config();

const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    description: "Phones, laptops, cameras and other electronic products",
  },

  {
    name: "Vehicles",
    slug: "vehicles",
    description: "Cars, motorcycles and other vehicles",
  },

  {
    name: "Collectibles",
    slug: "collectibles",
    description: "Rare and collectible items",
  },

  {
    name: "Jewelry",
    slug: "jewelry",
    description: "Gold, silver, diamonds and other jewelry",
  },

  {
    name: "Art",
    slug: "art",
    description: "Paintings, sculptures and artwork",
  },

  {
    name: "Furniture",
    slug: "furniture",
    description: "Home and office furniture",
  },

  {
    name: "Fashion",
    slug: "fashion",
    description: "Clothing, shoes, watches and accessories",
  },

  {
    name: "Sports",
    slug: "sports",
    description: "Sports equipment and memorabilia",
  },

  {
    name: "Books",
    slug: "books",
    description: "Books, manuscripts and rare publications",
  },

  {
    name: "Other",
    slug: "other",
    description: "Other auction products",
  },
];

async function seedCategories() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Category.deleteMany({});

    await Category.insertMany(categories);

    console.log("Categories seeded successfully");

    await mongoose.disconnect();
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

seedCategories();