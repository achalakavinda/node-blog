const mongoose = require('mongoose')

const connectDb = async () =>{
    try
    {
        const uri = "mongodb+srv://"+process.env.mongodb_user+":"+process.env.mongodb_password+"@cluster0.itryt.mongodb.net/itinerantnotes?retryWrites=true&w=majority&appName=Cluster0";
        const conn = await mongoose.connect(uri);
        console.log(`Database connected: ${conn.connection.host}`);
    }
    catch(error)
    {
        console.log(error)
    }

}

module.exports = connectDb;