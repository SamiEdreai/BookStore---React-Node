import mongoose from 'mongoose'
import environments from '../../config/environments.js';

const MONGODB_URL = environments.MONGODB_URL;

const connectMongoose = async () => {

    try {
        await mongoose.connect(MONGODB_URL);
        console.log("mongose connected");
    }
    catch (err) {
        console.log('mongose disconnected')
        process.exit(1);
    }

}

export default connectMongoose;