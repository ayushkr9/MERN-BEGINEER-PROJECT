export function getAllNotes(req,res){
    res.status(200).send("You fetched all notes");
}


export function create_Note(req,res){
    res.status(201).json({message:"You fetched all notes"});
}


export function Update_note(req,res){
    res.status(202).json({message:"You Updated all notes"});
}

export function Delete_note(req,res){
    res.status(203).json({message:"You Deleted all notes"});
}
