const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const expensesSchema = mongoose.Schema({
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
        default: "expenses"
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
expensesSchema.plugin(mongoosePaginate);

const Expenses = mongoose.model("Expenses", expensesSchema);
module.exports = Expenses;