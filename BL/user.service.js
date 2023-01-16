const userDL = require('../DL/controller/user.controller')
require('../DL/db').connect()
const bcrypt = require("bcrypt");
let saltRounds = 10;
const auth = require("../auth")

async function createNewUser(data) { // register - new user
    if (!data.email || !data.password) throw "missing data"

    let user = await userDL.readOne({ email: data.email });
    if (user) throw "user is exist"
    let userPass = data.password;
    let hashPass = await bcrypt.hash(userPass, saltRounds);
    data.password = hashPass;

    let res = await userDL.create(data);
    return res;
}

async function login(data) {
    console.log(data)
    let user = await userDL.readOne({ email: data.email });
    let match = await bcrypt.compare(data.password, user.password);
    if (!user || !match) throw { msg: "Login failed", code: 401 }
    let token = auth.createToken(data)
    return token;
}

async function lastSong(_id, song) {   //add song to songs list that hearded lately ,,  צריך להגביל ל10, וללראות שהשיר כבר לא קיים
    let lastHeard = await userDL.update(id, { $push: { lastSong: song } })
    return lastHeard;
}

//  { $pull: { songs: [{ name: song.name }] } });



module.exports = { createNewUser, login, lastSong }