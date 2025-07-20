import express from "express"
import notes_routes from "./route/notes_routes.js"


 const port = 5007 ;

const app = express();


app.use("/api/notes", notes_routes);


app.listen(port,()=>{
    console.log("Server is starting");
});





