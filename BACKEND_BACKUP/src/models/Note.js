// step 1 - you need to creatw a create a schema 
// step 2 - you would create a model based of that schema

import mongoose from "mongoose";

const notesSchema= new mongoose.Schema({
    title: {
        type:string,
        required:true
    },
    content:{
    type:string,
    requird:true
    },
 
},{timestamps:true}); // createat , updatedAt 


const Note=mongoose.model("Note",notesSchema);

export default Note ;




