import express from "express"
import { getAllNotes ,create_Note,Update_note,Delete_note} from "../notescontroller.js";

const router= express.Router();

// 1 . GET ALL NODES 
router.get("/",getAllNotes);

// 2 .CREATE A NEW NODE 
router.post("/",create_Note)

// 3 . PUT (UPDATE ) A NEW NODE 
router.put("/:id",Update_note)

// 4 . DELETE THE NODE BY ID 
router.delete("/:id",Delete_note)

export default router ;





