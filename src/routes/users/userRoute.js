const express= require('express');
const {registerAUser, loginContrl, fetchUsersContrl} = require("../../controllers/users/userContrl")

const userRouter = express.Router();

userRouter.post('/register',registerAUser);
userRouter.post('/login', loginContrl);
userRouter.get('/users', fetchUsersContrl);

module.exports = userRouter;