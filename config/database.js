import mongoose from "mongoose";

const connect_DB = async () => {
    try {
        await mongoose.connect(process.env.database);
        console.log(`Connected to MongoDB ${process.env.database}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with an error code 
    }
}

export default connect_DB;