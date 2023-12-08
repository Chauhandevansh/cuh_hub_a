import Product from "../models/productModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
//import ApiFeatures from "../utils/apiFeatures.js";

//Create product
export const createProduct = catchAsyncError(async(req,res,next)=>{
    const {name, description, category, price, image, seller}= req.body;
    const product = await Product.create({
        name, 
        description, 
        category, 
        price,
        image,
        seller
    });
    res.status(201).json({
        success: true,
        product
    });
});

//Get all products
export const getAllProducts = catchAsyncError(async (req,res)=>{
    const products = await Product.find();

    res.status(201).json({
        success: true,
        products
    });
});

//Get single product
export const getProductDetails = catchAsyncError(async (req, res, next) => {
        const product = await Product.findById(req.params.id);

        if (!product) {
            throw new ErrorHandler('Product not found!', 404);
        }

        res.status(200).json({
            success: true,
            product,
        });
});

//Update product
export const updateProduct = catchAsyncError(async(req,res,next)=>{
    let product = await Product.findById(req.params.id);
        if(!product){
            throw new ErrorHandler('Product not found!', 404);
        }
    
        product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
    
        res.status(200).json({
            success: true,
            product
        });
});

//Delete Product
export const deleteProduct = catchAsyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

        if(!product){
            throw new ErrorHandler('Product not found!', 404);
        }

        await product.deleteOne();

        res.status(200).json({
            success: true,
            message: "Product deleted successfully!"
        });
});