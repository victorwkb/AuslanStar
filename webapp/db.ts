import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI! );
    console.log("Connected to database")
  } catch (error) {
    throw new Error('Error connecting to database');
  }
}

export default dbConnect;
