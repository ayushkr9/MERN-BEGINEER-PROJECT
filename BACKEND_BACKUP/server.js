import express from "express"
import notes_routes from "./route/notes_routes.js"


 

const app = express();


app.use("/api/notes", notes_routes);


app.listen(5006,()=>{
    console.log("Server is starting");
});





