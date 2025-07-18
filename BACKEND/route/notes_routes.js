import express from "express"

const router= express.Router();

// 1 . GET ALL NODES 

router.get("/",(req,res)=>{
    res.send("You got   notes");
})

// 2 .CREATE A NEW NODE 
router.post("/",(req,res)=>{
    res.status(202).json({message:"Post created successfully"});
})

// 3 . PUT (UPDATE ) A NEW NODE 
router.put("/:id",(req,res)=>{
    res.status(201).json({message:"Post updated successfully"});
})


// 4 . DELETE THE NODE BY ID 
router.delete("/:id",(req,res)=>{
    res.status(200).json({message:"Post deleted  successfully"});
})


export default router ;



