const express = require("express");
const userService = require("../BL/user.service")
const router = express.Router();

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

module.exports = router;