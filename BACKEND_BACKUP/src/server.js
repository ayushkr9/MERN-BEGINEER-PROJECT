import express from "express"
import notes_routes from "./route/notes_routes.js"


 const port = 5009 ;

const app = express();


app.use("/api/notes", notes_routes);
// app.use("/api/products", product_routes);
// app.use("/api/payments", payments_routes);






app.listen(port,()=>{
    console.log("Server is starting");
});





