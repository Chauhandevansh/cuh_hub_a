import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true,"userId field can't be empty!"]
  },
  name: {
    type: String,
    required: [true,"name field can't be empty!"]
  },
  phone: {
    type: String,
    //required: [true,"userId field can't be empty!"]
  },
  email: {
    type: String,
    //required: [true,"userId field can't be empty!"]
  },
  imageUrl: {
    type: String,
    required: [true,"imageUrl field can't be empty!"]
  },
  usertype: {
    type: String,
  },
  userIdCard: {
    type: String,
  },
  sellerRating: {
    type: Number,
  },
  ratingCount: {
    type: Number,
  },
  saleItems: {
    type: Array,
    default: []
  },
  bids: {
    type: Array,
    default: []
  },
});

export default mongoose.model("User",userSchema);