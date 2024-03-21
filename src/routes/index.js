import { Router } from "express";
import routerBook from "./book.js";
const router = Router();
router.use("/book", routerBook);

export default router;
