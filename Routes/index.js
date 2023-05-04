const express = require("express");
const router = express.Router();


const userRouter = require("./user.route")
const playlistRouter = require("./playlist.route")

router.use("/", userRouter)
router.use("/playlist", playlistRouter)


module.exports = router;