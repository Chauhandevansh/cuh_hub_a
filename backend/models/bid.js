import mongoose from "mongoose";

const bidSchema = new mongoose.Schema({
    bidId: {
        type: String,
        required: [true,"bidId field can't be empty!"]
    },
    bidderId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true,"bidderId field can't be empty!"]
    },
    amount: {
      type: Number,
      //required: [true,"userId field can't be empty!"]
    },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: [true,"productId field can't be empty!"]
    },
    bidTimestamp: {
      type: Number,
      //required: [true,"userId field can't be empty!"]
    },
    bidStatus: {
      type: Boolean,
      //required: [true,"userId field can't be empty!"]
      default: false
    },
});

export default mongoose.model("Bid",bidSchema);