import mongoose from "mongoose"

export const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://ayushkr900649:0efFWFl8wMLPtjcZ@cluster0.8lrodmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database Connected SuccessFully");
    } catch (error) {
        console.error("Error Connecting to mongodb",error);
        process.exit(1); // exit() with failure
    }
}