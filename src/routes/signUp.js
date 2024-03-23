import { Router } from "express";
import { signUp } from "../controllers/auth.js";
const routerAuth = Router();

routerAuth.post("/register", signUp);

export default routerAuth;
