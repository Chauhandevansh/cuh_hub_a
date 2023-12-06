import express from "express";
import { getAllProducts, createProduct, getProductDetails, updateProduct, deleteProduct} from "../controllers/productControllers.js";
//  import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";

const productRouter = express.Router();

productRouter.get("/products",getAllProducts);

productRouter.post("/products/new",createProduct);

productRouter.get("/products/:id",getProductDetails);

productRouter.put("/products/:id",updateProduct);

productRouter.delete("/products/:id",deleteProduct);

export default productRouter;