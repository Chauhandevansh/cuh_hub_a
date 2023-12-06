import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter product name"],
        trim: true
    },
    description:{
        type: String,
        required: [true,"Please enter product description"]
    },
    category:{
        type: String,
        required: [true,"Please enter product category"]
    },
    price:{
        type: Number,
        required: [true, "Please enter product price"],
        maxLength: [8,"Price cannot exceed 8 characters"]
    },
    seller:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: true
    },
    buyer:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "unsold"
    },
    image: String
});

export default mongoose.model("Product",productSchema);