import express from "express";
import { createUser, deleteUser, getSingleUser, getUser, updateProfile } from "../controllers/userControllers.js";
// import { isAuthenticatedUser, authorizeRoles} from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/users/create",createUser);

userRouter.get("/users/find",getUser);
userRouter.get("/users/:id",getSingleUser);

userRouter.put("/users/:id",updateProfile);

userRouter.delete("/users/:id",deleteUser);

export default userRouter;