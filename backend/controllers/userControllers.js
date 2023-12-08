import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../middleware/catchAsyncError.js";

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

//Get single user using email id
export const getUser = catchAsyncError(async(req,res,next)=>{
    const user = await User.findOne({email: req.query.email});
    if(!user){
        return next(new ErrorHandler(`User does not exit with Id: ${req.body.email}`,404));
    }

    res.status(200).json({
        success: true,
        user
    });
});

//Get single user using id
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
        idCard: req.body.idCard,
        userId: req.body.userId,
        rating: req.body.rating,
        numOfReviews: req.body.numOfReviews,
    };

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    if(!user) {
        return next(new ErrorHandler("User not found with the given _id", 404));
    }

    res.status(200).json({
        success: true,
        message: "updated successfully"
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
