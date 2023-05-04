const playlistDL = require('../DL/controller/playlist.controller')

async function createNewPlaylist(data) {
    let playlist = await playlistDL.readOne({ name: data.name });
    if (playlist) throw "playlist name is exist";

    let res = await playlistDL.create(data);
    return res;
}


module.exports = { createNewPlaylist }