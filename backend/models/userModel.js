import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter your name"],
        maxLength: [30,"Name cannot exceed 30 characters"],
        minLength: [4,"Name should have more than 4 characters"]
    },
    userId: {
        type: String,
        required: [true,"userId field can't be empty"]
    },
    email: {
        type: String,
        required: [true, "Please enter your Email"],
        unique: true,
        validate: [validator.isEmail,"Please enter a valid Email"]
    },
    userType: {
        type: String,
        required: [true, "userType field cannot be empty"],
        default: "student"
    },
    ratings:{
        type: Number,
        default:0
    },
    numOfReviews:{
        type: Number,
        default: 0
    },
    userImg: String,
    phone: String,
    idCard: String,
});

export default mongoose.model("User",userSchema);