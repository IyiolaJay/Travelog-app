import mongoose from "mongoose";

const URI = ""

const connectDB = async () => {
    try {
        const connector = await mongoose.connect(URI)
        console.log(`MongoDB Connected: ${connector.connection.host}`.red.underline)
    } catch (error) {
        process.exit(1)
    }
}
module.exports = connectDB


//mongodb+srv://travelog:<password>@travelogcluster.gz2mq88.mongodb.net/?retryWrites=true&w=majority