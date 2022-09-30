const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const incomeSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title required"]
    },
    description: {
        type: String,
        required: [true, "description required"]
    },
    type: {
        type: String,
        default:"income"
    },
    amount: {
        type: Number,
        required: [true, "Amonut required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "user id required"]
    },
},

    {
        timestamp: true,
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },

    });

incomeSchema.plugin(mongoosePaginate);

    const Income = mongoose.model("Income", incomeSchema);
    module.exports = Income;