import mongoose from 'mongoose'

const connectDB = async () => {
    try {
     const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('MONGODB Connected:', conn.connection.host)
    } catch (error) {
        console.error('Error connecting to MONGODB:', error)
        process.exit(1); // 1 status code indicates failure, 0 status code indicates success
    }
}
export default connectDB;
