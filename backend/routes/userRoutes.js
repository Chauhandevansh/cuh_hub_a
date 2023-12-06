import express from "express";
import { createUser, deleteUser, getSingleUser, updateProfile } from "../controllers/userControllers.js";
// import { isAuthenticatedUser, authorizeRoles} from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/create",createUser);

userRouter.get("/users/:id",getSingleUser);

userRouter.put("/me/update/:id",updateProfile);

userRouter.delete("/users/:id",deleteUser);

export default userRouter;