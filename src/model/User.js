const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "firstname required"]
    },
    lastname: {
        type: String,
        required: [true, "lastname required"]
    },
    email: {
        type: String,
        required: [true, "email required"]
    },
    password: {
        type: String,
        required: [true, "password required"]
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},

    {
        timestamp: true

    });

    userSchema.pre('save', async function(next){
        if(!this.isModified("password")){
            next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    });
    userSchema.methods.isPasswordMatch = async function(enterPassword){
        return await bcrypt.compare(enterPassword, this.password);
    }

userSchema.plugin(mongoosePaginate);
const User = mongoose.model("User", userSchema);
module.exports = User;