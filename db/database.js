// https://www.geeksforgeeks.org/how-to-connect-node-js-to-a-mongodb-database/
//https://www.section.io/engineering-education/nodejs-mongoosejs-mongodb/

const mongoose = require('mongoose');

const connectDB= () => {
    try{
    mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,   //to avoid Deprecation Warning
    useUnifiedTopology:true,
    });
    console.log("Databse connected successfully");
}
    catch(err){
        console.log("Error");
    };
}

module.exports = connectDB
// export default connectDB;