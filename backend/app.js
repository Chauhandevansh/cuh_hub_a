import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./routes/user-routes.js";
import bidRouter from "./routes/bid-routes.js";
import productRouter from "./routes/product-routes.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/users",userRouter);
app.use("/api/bids",bidRouter);
app.use("/api/products",productRouter);

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
.then(()=>console.log("Database connection successful!"))
.catch((err)=>console.log(err));

app.listen(port,()=>{
    console.log("Server is running on port: "+port);
});