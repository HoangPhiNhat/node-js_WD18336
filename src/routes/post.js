import { Router } from "express";
import {
  create,
  remove,
  getAll,
  getDetail,
  update,
} from "../controllers/post.js";
const routerPost = Router();

routerPost.post("/", create);
routerPost.get("/", getAll);
routerPost.get("/:id", getDetail);
routerPost.delete("/:id", remove);
routerPost.put("/:id", update);

export default routerPost;
