const express = require("express");
const router = express.Router();
const userService = require("../BL/user.service")
const auth = require("../auth")


router.post("/register", async (req, res) => {
    const user = req.body;
    try {
        const newUser = await userService.createNewUser(user);
        res.send(newUser);
    } catch (e) {
        console.log(e)
        res.send(400)
    }
})
router.post("/login", async (req, res) => {
    try {
        let result = await userService.login(req.body)
        console.log(result)
        res.send(result)

    }
    catch (err) {
        res.status(err.code ?? 400).send(err.msg)
    }

})

router.get("/last", auth.validToken, async (req, res) => {
    console.log(req.send)
})



module.exports = router;