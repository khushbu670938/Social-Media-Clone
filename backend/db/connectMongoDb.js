import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
        const uri =  process.env.MONGODB_URI;
        if (!uri){
            throw new Error("MONGODB_URI is underfined. check your .env file.");
        }
        const conn = await mongoose.connect(uri);
        console.log(`MongoDb Connected : ${conn.connection.host}`);

    } catch (error) {
        console.error(`error Connection to mongoDB : ${error.message}`)
        process.exit(1);
        
    }
}
export default connectMongoDb;
