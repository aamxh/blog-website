const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.connection_string);
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (ex) {
        console.error(ex); 
    }
}
module.exports = connectDB;