import mongoose from "mongoose";

const connection = {};

mongoose.set('strictQuery', true);
 
async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    
    const db = await mongoose.connect("mongodb+srv://Rahman:hdZWFSSvllNYuWry@cluster0.kpwzoai.mongodb.net/todoDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
