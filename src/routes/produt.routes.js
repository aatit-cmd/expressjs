import express from "express";
import { create, getAll, getById, remove, update } from "../controllers/product.controller.js";
const router = express.Router();


const mid = (req, res, next) => {
    console.log("get all products mid")
    next();
}
//! CRUD product
//* get all product
//? get  ->product page
router.get("/",mid, getAll);

//* get  product by id
router.get("/:id", getById);

// create
router.post("/", create);

// update
router.put("/:id", update);

// delete
router.delete("/:id", remove);

export default router;
