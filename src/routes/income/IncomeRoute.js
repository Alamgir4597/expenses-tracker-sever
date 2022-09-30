const express = require('express');
const { createInCrtl, fetchIncomeContrl, updateInCotrl, fetchSingleIncomeContrl, fetchDeleteIncomeContrl } = require('../../controllers/income/incomeCtrl');
const authMiddleWare = require('../../middlewares/AuthMiddleWare');


const incomeRouter = express.Router();


incomeRouter.post('/', authMiddleWare, createInCrtl);
incomeRouter.get('/',authMiddleWare, fetchIncomeContrl);
incomeRouter.get('/:id',authMiddleWare, fetchSingleIncomeContrl);
incomeRouter.put('/:id',authMiddleWare ,updateInCotrl);
incomeRouter.delete('/:id',authMiddleWare, fetchDeleteIncomeContrl);

module.exports= incomeRouter;
