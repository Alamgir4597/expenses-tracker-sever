const expressAsyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const User = require("../model/User")

const authMiddleWare = expressAsyncHandler(async (req, res, next)=>{
    let token;
    if (req?.authorization?.startsWith("Bearer")) {
        token = req?.headers?.authorization?.split("")[1];
        try {
            if(token){
                const decoded = jwt.verify(token, process.env.JWT_KEY);
                console.log(decoded);
                const user = await User.findById(decoded?.id)
                console.log(user);
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Not Authorized token exprire");
        }
    }else{
        throw new Error("Not Authorized");
    }
})

module.exports = authMiddleWare;