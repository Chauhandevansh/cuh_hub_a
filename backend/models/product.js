import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: [true,"productId field can't be empty!"]
      },
      imageUrl: {
        type: String,
        required: [true,"imageUrl field can't be empty!"]
      },
      ownerId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true,"ownerId field can't be empty!"]
      },
      openinigPrice: {
        type: Number,
        required: [true,"openingPrice field can't be empty!"]
      },
      productStatus: {
        type: Boolean,
        default: true
      },
      bidAccepted: {
        type: Boolean,
        default: false
      },
      topBid: {
        type: Number,
        //required: [true,"userId field can't be empty!"]
      },
      description: {
        type: String,
        //maxlength: 100
      },
      productTimestamp: {
        type: Number,
        // required: [true,"userId field can't be empty!"]
      },
      deadline: {
        type: Number,
        // required: [true,"userId field can't be empty!"]
      },
      keyword: {
        type: String,
        // required: [true,"userId field can't be empty!"]
      },
      productType: {
        type: String,
        // required: [true,"userId field can't be empty!"]
      },
      allBids: {
        type: Array,
        default: []
      },
});

export default mongoose.model("Product", productSchema);
