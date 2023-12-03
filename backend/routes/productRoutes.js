import express from "express";
 import { getAllProducts, createProduct} from "../controllers/productControllers.js";
 import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";

const productRouter = express.Router();

productRouter.get("/products",getAllProducts);

productRouter.post("/admin/products/new",createProduct);

export default productRouter;
