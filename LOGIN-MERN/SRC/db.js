import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://dbroot:1234@cluster0.x13uenf.mongodb.net/LOGIN", {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log(">> DB Connect")
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}
export default  connectDB

