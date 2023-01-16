const jwt = require("jsonwebtoken");
require("dotenv").config()
const secret = process.env.SECRET;

async function createToken(data) {
    let token = await jwt.sign({ data }, secret, { expiresIn: "1h" })
    return token;
}

async function validToken(req, res, next) {
    try {
        let data = req.headers.authorization.replace("Bearer ", "");
        let result = jwt.verify(data, secret);
        req.send = result.data
        next()
    }
    catch (error) {
        res.status(401).send("token incorrect!!")
    }
}


// function myMiddleware(req, res, next) {
// const data = { foo: 'bar' };
// next(data);
// }

// function nextMiddleware(req, res, next) {
//     console.log(req.foo);  // 'bar'
//     next();
// }


module.exports = { createToken, validToken }