const express = require('express');
const dbConnect = require('./config/dbConnect');
const { errorHandler, notFound } = require('./middlewares/errorMiddleWare');
const expenRouter = require('./routes/expenses/ExpensesRouter');
const incomeRouter = require('./routes/income/IncomeRoute');

const userRouter = require('./routes/users/userRoute');
// const userRoute = require('./routes/userRoute');

const app=express();


app.get('/',(req,res)=>{
    console.log("This is Home Route")
})

dbConnect();

app.use(express.json());
// app.use("/",userRoute)
app.use("/api/users",userRouter);

app.use("/api/income", incomeRouter);

app.use("/api/expenses", expenRouter);

// app.get("/",(req,res)=>{
//     res.send("hello world");
// })
app.use(notFound);
app.use(errorHandler);




module.exports =app;


// XZybSDiHzZEpuzMr
// mongodb+srv://me:XZybSDiHzZEpuzMr@expenses-tracker.ztfd7kx.mongodb.net/?retryWrites=true&w=majority