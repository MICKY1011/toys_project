const mongoose = require("mongoose");
require("dotenv").config();

async function main(){
    await mongoose.connect(process.env.MONGO_DB);
    console.log("toys DB connect");
}
main().catch(err => console.log(err));