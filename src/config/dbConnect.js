const  mongoose  = require("mongoose")

const dbConnect= async ()=>{
    try {
        await mongoose.connect(
            "mongodb+srv://me:XZybSDiHzZEpuzMr@expenses-tracker.ztfd7kx.mongodb.net/expenses-tracker-DB?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log("DB connections established")
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports =dbConnect;
