import mongoose from "mongoose";

export async function connectDB() {

    try {

        await mongoose.connect(process.env.MONGOURI!)
        console.log("MongoDB connected")

    } catch (error) {
        console.error("Connection failed")
        console.log(error)
    }

}