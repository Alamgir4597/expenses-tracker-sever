const expressAsyncHandler = require("express-async-handler");
const Income = require("../../model/Income");



const createInCrtl = expressAsyncHandler( async (req, res) => {
    const { title,description, amount} = req?.body;
    try {
        const income = await Income.create({title, description, amount, user});
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

const fetchIncomeContrl = expressAsyncHandler(async (req, res) => {
    const {page}=req.query;
    try {
        const income = await Income.paginate({},{limit: 10, page: Number(page), populate: "user"});
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

const fetchSingleIncomeContrl = expressAsyncHandler(async (req, res) => {
    const {id}=req?.params;
    try {
        const income = await Income.findById(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

const updateInCotrl= expressAsyncHandler(async (req, res) => {
    const {id}=req?.params;
    const { title, description, amount } = req?.body;
    try {
        const income = await Income.findByIdAndUpdate(id, { amount, title, description }, {new : true});
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

const fetchDeleteIncomeContrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const income = await Income.findByIdAndDelete(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

module.exports = { createInCrtl, fetchIncomeContrl, fetchSingleIncomeContrl, updateInCotrl, fetchDeleteIncomeContrl };