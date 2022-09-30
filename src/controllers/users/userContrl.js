const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../../middlewares/generateJWT");
const User = require("../../model/User");


 const registerAUser = expressAsyncHandler(async (req, res) => {
    const { email, firstname, lastname, password } = req?.body;
    const userExists = await User.findOne({ email });
    if (userExists) throw new Error(`User ${email} already exists`);
    try {
        const user = await User.create({ email, firstname, lastname, password });
        res.status(200).json(user);
    } catch (error) {
        res.json(error);
    }
});

 const fetchUsersContrl = expressAsyncHandler(async (req, res) => {
     const { page } = req.query;
    try {
        const users = await User.paginate({}, { limit: 10, page: Number(page) });
        res.json(users);
    } catch (error) {
        res.json(error);
    }
});

const loginContrl = expressAsyncHandler(async (req, res) => {
    const {email,password}=req?.body;
    const userFound = await User.findOne({ email });
    if(userFound && (await userFound?.isPasswordMatch(password))){
        res.json({
            _id: userFound?._id,
            firstname: userFound?.firstname,
            lastname: userFound?.lastname,
            email: userFound?.email,
            isAdmin: userFound?.isAdmin,
            token: generateToken(userFound?._id)
        });
    }else{
        res.status(401);
        throw new Error('Invalid login credentials');
    }
    
})

module.exports= {registerAUser,fetchUsersContrl, loginContrl};

