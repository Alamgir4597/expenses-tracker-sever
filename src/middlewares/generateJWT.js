const jwt = require('jsonwebtoken'); 

const generateToken = id =>{
    return jwt.sign({ id }, "dgdfhfgjfgsdasre575i7hfbfadzsc", {expiresIn:'30d'})
};

module.exports = generateToken;