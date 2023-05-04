const express = require("express");
const router = express.Router();
const playlistService = require("../BL/playlist.service")


router.post("/new", async (req, res) => {
    const playlist = req.body;
    try {
        const newPlaylist = await playlistService.createNewPlaylist(playlist)
        res.send(newPlaylist);
    } catch (e) {
        console.log(e)
        res.send(400)
    }
})



module.exports = router;