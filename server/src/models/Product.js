const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      index: true,
    },

    brand: {
      type: String,
      default: "",
    },

    condition: {
      type: String,
      enum: [
        "NEW",
        "LIKE_NEW",
        "GOOD",
        "FAIR",
        "USED",
        "REFURBISHED",
      ],
      default: "GOOD",
    },

    images: [
      {
        type: String,
      },
    ],

    specifications: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },

    location: {
      city: {
        type: String,
        default: "",
      },

      state: {
        type: String,
        default: "",
      },

      country: {
        type: String,
        default: "India",
      },
    },

    status: {
      type: String,
      enum: [
        "DRAFT",
        "ACTIVE",
        "SOLD",
        "AUCTIONED",
        "REMOVED",
      ],
      default: "DRAFT",
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);