import express from "express";
import {getAll, getById, create, update, remove} from "../controllers/user.controller.js"
const router = express.Router();


//! CRUD users
//* get all user
//? get /user ->user page
router.get("/",getAll);
// get by id
router.get("/:id",getById);


// create
router.post("/",create );



// update
router.put("/:id",update );

// delete
router.delete("/:id",remove);
export default router;
