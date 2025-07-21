import express from "express";
import notes_routes from "./route/notes_routes.js";
import {connectDB} from "../config/db.js";


 const port = 5005 ;

const app = express();


connectDB();

app.use("/api/notes", notes_routes);
// app.use("/api/products", product_routes);
// app.use("/api/payments", payments_routes);






app.listen(port,()=>{
    console.log("Server is starting");
});





// mongodb+srv://ayushkr900649:0efFWFl8wMLPtjcZ@cluster0.8lrodmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0