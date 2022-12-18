const userDL = require('../DL/user.controller')
require('../DL/db').connect()

async function createNewUser(data) {
    if (!data.email || !data.password) throw "missing data"

    // TODO bcrypt - bcrypt.hash(password)

    let user = await userDL.readOne({ email: data.email });
    if (user) throw "user is exist"

    let res = await userDL.create(data);
    return res;
}

module.exports = {
    createNewUser
}