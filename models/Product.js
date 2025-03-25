import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    image1: { type: String },
    drImage: { type: String },
    image3: { type: String },
    image4: { type: String},
    image5: { type: String },
    feature1: { type: String },
    feature2: { type: String },
    feature3: { type: String },
    feature4: { type: String},
    feature5: { type: String },
    downloadFile: { type: String },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
