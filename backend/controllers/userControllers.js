import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
// import sendToken from "../utils/jwtToken.js";
// import sendEmail from "../utils/sendEmail.js";
// import crypto from "crypto";

//Create user
export const createUser = catchAsyncError(async(req,res,next)=>{
    const {name, userId, email, userType, userImg, phone, idCard}= req.body;
    const user = await User.create({
        name,
        userId, 
        email, 
        userType,
        userImg,
        phone,
        idCard
    });

    res.status(200).json({
        success: true,
        user
    });
});

//Get single user
export const getSingleUser = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`User does not exit with Id: ${req.params.id}`,404));
    }

    res.status(200).json({
        success: true,
        user
    });
});

//Update user profile
export const updateProfile = catchAsyncError(async(req,res,next)=>{
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        userImg: req.body.userImg,
        idCard: req.body.idCard
    };

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
    });
});

//Delete User
export const deleteUser = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler(`User does not exist with Id: ${req.params.id}`,400));
    }

    await user.deleteOne();

    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    });
});
