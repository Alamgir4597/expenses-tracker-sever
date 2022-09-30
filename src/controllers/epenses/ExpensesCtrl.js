const expressAsyncHandler = require("express-async-handler");
const Expenses = require("../../model/Expenses");




const createExpCrtl = expressAsyncHandler( async (req, res) => {
    const { title,description, amount} = req?.body;
    try {
        const expense = await Expenses.create({title, description, amount, user});
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

const fetchExpContrl = expressAsyncHandler(async (req, res) => {
    const { page } = req.query;
    try {
        const expense = await Expenses.paginate({}, { limit: 10, page: Number(page),populate: "user" });
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

const fetchSingleExpContrl = expressAsyncHandler(async (req, res) => {
    const {id}=req?.params;
    try {
        const expense = await Expenses.findById(id);
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

const updateExpCotrl= expressAsyncHandler(async (req, res) => {
    const {id}=req?.params;
    const { title, description, amount } = req?.body;
    try {
        const expense = await Expenses.findByIdAndUpdate(id, { amount, title, description }, {new : true});
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

const fetchDeleteExpContrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const income = await Expenses.findByIdAndDelete(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

module.exports = { createExpCrtl, fetchExpContrl, fetchSingleExpContrl, updateExpCotrl, fetchDeleteExpContrl };