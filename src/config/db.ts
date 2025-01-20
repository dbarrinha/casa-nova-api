import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI;
    if(!dbURI) throw new Error('MongoDB URI is missing in .env file');
    await mongoose.connect(dbURI, {
      dbName: 'casa-nova'
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);  // Encerra a aplicação em caso de erro na conexão
  }
};

export default connectDB;