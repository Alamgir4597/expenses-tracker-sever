const express = require('express');
const { createExpCrtl, fetchExpContrl, fetchSingleExpContrl, updateExpCotrl, fetchDeleteExpContrl } = require('../../controllers/epenses/ExpensesCtrl');
const authMiddleWare = require('../../middlewares/AuthMiddleWare');






const expenRouter = express.Router();


expenRouter.post('/', authMiddleWare, createExpCrtl);
expenRouter.get('/', authMiddleWare, fetchExpContrl);
expenRouter.get('/:id',authMiddleWare, fetchSingleExpContrl);
expenRouter.put('/:id', authMiddleWare, updateExpCotrl);
expenRouter.delete('/:id', authMiddleWare, fetchDeleteExpContrl);

module.exports = expenRouter;