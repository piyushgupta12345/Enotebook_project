import monngose from 'mongoose'
import 'dotenv/config'

const connectToDb = async () => {
    try {
        await monngose.connect(process.env.MONGODB_URL,{
        })
        console.log("Database connect to successfully !!");
    } catch (error) {
        console.log("Database connection failed !!");
        console.log(error);
    }
}

export default connectToDb;

