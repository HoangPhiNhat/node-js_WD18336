import { Router } from "express";
import {
  create,
  remove,
  getAll,
  getDetail,
  update,
} from "../controllers/books.js";
const routerBook = Router();

routerBook.post("/", create);
routerBook.get("/", getAll);
routerBook.get("/:id", getDetail);
routerBook.delete("/:id", remove);
routerBook.put("/:id", update);

export default routerBook;
