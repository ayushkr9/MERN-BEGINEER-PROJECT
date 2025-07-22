import mongoose from "mongoose"
 

export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected SuccessFully");
    } catch (error) {
        console.error("Error Connecting to mongodb",error);
        process.exit(1); // exit() with failure
    }
}