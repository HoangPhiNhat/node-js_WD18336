import { Router } from "express";
import routerPost from "./post.js";
import routerAuth from "./signUp.js";
const router = Router();
router.use("/post", routerPost);
router.use("/auth", routerAuth);

export default router;
