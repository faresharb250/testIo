import mongoose from "mongoose";
const connectDB = async()=>{
    const DBURI = "mongodb+srv://E-commerce:SOQ0IomEFf2CSvpF@cluster0.h6prhj1.mongodb.net/testIo"
    return await mongoose.connect(DBURI)
    .then(res=>console.log(`DB connected successfully on.....${DBURI}`))
    .catch(err=>console.log(`Fail to connect DB..........${err}`))
}
export default connectDB